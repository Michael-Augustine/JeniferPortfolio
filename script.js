const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    navLinks.classList.toggle("is-open");
    document.body.classList.toggle("menu-open", !expanded);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      navLinks.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    });
  });
}

function setupReveal() {
  const revealElements = document.querySelectorAll("[data-reveal]");

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
}

setupReveal();

function setupMemoryGrid() {
  const section = document.querySelector("[data-gallery-folder]");
  const grid = document.querySelector("[data-memory-grid]");

  if (!section || !grid) {
    return;
  }

  const countTarget = document.querySelector("[data-memory-count]");
  const emptyState = document.querySelector("[data-memory-empty]");
  const rowUnit = 10;
  const rowGap = 16;
  const allowedExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"];

  function resizeItem(item) {
    const image = item.querySelector("img");

    if (!image || !image.complete || !image.naturalWidth || !image.naturalHeight) {
      return;
    }

    const caption = item.querySelector(".memory-caption");
    const ratio = image.naturalHeight / image.naturalWidth;
    const imageHeight = item.clientWidth * ratio;
    const captionHeight = caption ? caption.offsetHeight : 0;
    const totalHeight = imageHeight + captionHeight;
    const span = Math.max(18, Math.ceil((totalHeight + rowGap) / rowUnit));

    item.style.gridRowEnd = `span ${span}`;
  }

  function resizeAllItems() {
    grid.querySelectorAll(".memory-item").forEach(resizeItem);
  }

  function updateCount(total) {
    if (countTarget) {
      countTarget.textContent = total === 1 ? "1 image" : `${total} images`;
    }
  }

  function showEmptyState() {
    updateCount(0);
    if (emptyState) {
      emptyState.hidden = false;
    }
  }

  function appendImageCard(src, labelText) {
    const item = document.createElement("article");
    item.className = "memory-item";
    item.setAttribute("data-reveal", "");

    const figure = document.createElement("figure");
    figure.className = "memory-figure";

    const image = document.createElement("img");
    image.className = "memory-image";
    image.src = src;
    image.alt = labelText;
    image.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.className = "memory-caption";

    const label = document.createElement("p");
    label.textContent = labelText;
    caption.appendChild(label);

    figure.appendChild(image);
    figure.appendChild(caption);
    item.appendChild(figure);
    grid.appendChild(item);

    image.addEventListener("load", () => {
      resizeItem(item);
      item.classList.add("is-visible");
    });

    image.addEventListener("error", () => {
      item.remove();
      const remaining = grid.querySelectorAll(".memory-item").length;
      updateCount(remaining);
      if (!remaining) {
        showEmptyState();
      }
    });

    if (image.complete && image.naturalWidth) {
      resizeItem(item);
      item.classList.add("is-visible");
    }
  }

  async function loadGithubGallery() {
    const owner = section.dataset.galleryOwner;
    const repo = section.dataset.galleryRepo;
    const branch = section.dataset.galleryBranch;
    const folder = section.dataset.galleryFolder;

    try {
      const response = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/${folder}?ref=${branch}`,
        {
          headers: {
            Accept: "application/vnd.github+json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`GitHub API request failed with ${response.status}`);
      }

      const items = await response.json();
      const files = Array.isArray(items)
        ? items
            .filter((item) => item.type === "file")
            .filter((item) =>
              allowedExtensions.some((extension) =>
                item.name.toLowerCase().endsWith(extension)
              )
            )
            .sort((a, b) => a.name.localeCompare(b.name))
        : [];

      if (!files.length) {
        showEmptyState();
        return;
      }

      updateCount(files.length);
      if (emptyState) {
        emptyState.hidden = true;
      }

      files.forEach((file) => {
        const relativePath = file.path
          .split("/")
          .map(encodeURIComponent)
          .join("/");
        const labelText = file.name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ");

        appendImageCard(relativePath, labelText);
      });

      resizeAllItems();
    } catch (error) {
      console.error("Unable to load gallery images from GitHub.", error);
      if (countTarget) {
        countTarget.textContent = "Unable to load images";
      }
      if (emptyState) {
        emptyState.hidden = false;
      }
    }
  }

  window.addEventListener("resize", resizeAllItems);
  loadGithubGallery();
}

setupMemoryGrid();
