const STORAGE_KEY = "preferred-language";
const DEFAULT_LANGUAGE = "en";

const translations = {
  en: {
    nav: {
      summary: "Summary",
      experience: "Experience",
      education: "Education",
      memories: "Memories",
      contact: "Contact",
    },
    common: {
      menu: "Menu",
      contact_title: "Contact",
      email_label: "Email",
      location_label: "Location",
      location_value: "Taipei, Taiwan",
      linkedin_label: "LinkedIn",
      footer: "Made with love in Taipei · Jenifer Antony Padyachi © 2026",
      toggle_label: "中文",
      toggle_aria: "Switch to Traditional Chinese",
    },
    home: {
      meta_title: "Jenifer Antony Padyachi",
      meta_description: "Jenifer Antony Padyachi - English Language Teaching Professional.",
      hero_identity: "English Language Teaching Professional, Master's in Applied Foreign Languages",
      hero_summary: "English Language Teaching professional with a Master's in Applied Foreign Languages and strong experience teaching young learners in Taiwan. Experienced in both public school and private English education settings, with a background as an ELTA teacher and current role as a Foreign English Teacher at American Eagle Institute. Skilled in lesson planning, classroom management, curriculum implementation, student support, parent communication, and cross-cultural education. Passionate about creating engaging, inclusive, and confidence-building learning environments where students are encouraged to communicate, participate, and grow as English learners.",
      view_experience: "View Experience",
      student_memories: "Student Memories",
      contact_details: "Contact Details",
      expertise_title: "Areas of Expertise",
      professional_skills_title: "Professional Skills",
      professional_skills_body: "English Language Teaching, Lesson Planning, Curriculum Implementation, Classroom Management, Student Mentoring, Parent Communication, Cross-Cultural Education, Assessment & Evaluation, Content Writing, Student Support",
      technical_skills_title: "Technical Skills",
      technical_skills_body: "Educational Technology, McGraw Hill Curriculum, Microsoft Office, Google Workspace, Learning Management Systems",
      experience_title: "Professional Experience",
      current_role_title: "Foreign English Teacher",
      current_role_date: "Sep. 2025 - Present",
      current_role_location: "New Taipei City, Taiwan",
      current_role_body: "Currently teaching Grade 1 and Grade 5 students in a structured English program using the McGraw Hill curriculum. Responsible for delivering engaging lessons, supporting student progress, managing classroom learning, correcting student work, providing feedback, and communicating with parents about student development.",
      elta_title: "English Language Teaching Assistant (ELTA)",
      elta_org: "Ministry of Education, Taiwan",
      elta_date: "Feb. 2024 - Jun. 2025 [1 Year 4 months]",
      elta_location: "Taipei City, Taiwan",
      elta_body: 'Selected for a national program supporting English education across Taiwan. Worked at <a href="https://www.whps.ntpc.edu.tw/" target="_blank" rel="noreferrer">New Taipei Municipal Wangxi Elementary School</a> and <a href="https://www.japs.tp.edu.tw/nss/p/index" target="_blank" rel="noreferrer">Ren-Ai Elementary School</a>. Collaborated with local educators to deliver interactive English lessons, cross-cultural exchanges, and communicative language learning activities, adapted curriculum materials to meet diverse student needs and learning styles across different school environments, and continuously improved teaching practice through ongoing professional development and reflective teaching methods.',
      education_title: "Education and Qualifications",
      ma_title: "Master of Arts, Applied Foreign Languages",
      ma_meta: "National Taiwan University of Science and Technology (NTUST), Taipei, Taiwan",
      ma_date: "Sep. 2023 - Jul. 2025",
      ma_body: "Advanced graduate program focusing on applied linguistics, second language acquisition theory, and pedagogical methodologies. Specialization in cross-cultural communication and language education technology integration.",
      ba_title: "Bachelor of Arts, Mass Media (Journalism Specialization)",
      ba_meta: "Smt. Maniben M.P. Shah Women's College, SNDT Women's University, Mumbai, Maharashtra, India",
      ba_date: "Jun. 2018 - Apr. 2021",
      ba_body: "Graduated with highest honors (GPA: 10.00/10.00, 97% overall). Comprehensive program covering media studies, journalism ethics, content creation, and communication theory. Completed notable projects including documentary filmmaking, social issue awareness campaigns, and multimedia content development.",
      certification_title: "Certification",
      certification_body: '120-Hour TESOL/TEFL Certificate, <a href="https://www.worldtesolacademy.com/" target="_blank" rel="noreferrer">World TESOL Academy</a>',
      certification_date: "Issued 16/09/2025",
      languages_title: "Languages",
      languages_list: "<li><strong>English:</strong> Native Proficiency</li><li><strong>Hindi:</strong> Native Proficiency</li><li><strong>Tamil:</strong> Native Proficiency</li><li><strong>Marathi:</strong> Native Proficiency</li><li><strong>Chinese:</strong> Elementary Proficiency</li><li><strong>Korean:</strong> Elementary Proficiency</li>",
    },
    contact: {
      meta_title: "Contact | Jenifer Antony Padyachi",
      meta_description: "Contact details for Jenifer Antony Padyachi.",
      hero_summary: "Contact details sourced directly from the current CV, with direct links for email and LinkedIn access.",
    },
    memories: {
      meta_title: "Student Memories | Jenifer Antony Padyachi",
      meta_description: "Student memories gallery for Jenifer Antony Padyachi.",
      title: "Notes and memories from students and colleagues",
      identity: "A quiet collection of messages, moments, and photos from the journey.",
      summary: "",
      loading: "Loading images...",
      count_singular: "1 image",
      count_plural: "{count} images",
      empty_title: "No memories yet",
      empty_body: "Memories will appear here soon.",
      close: "Close",
      load_error: "Unable to load images",
    },
  },
  "zh-Hant": {
    nav: {
      summary: "簡介",
      experience: "經歷",
      education: "學歷",
      memories: "回憶",
      contact: "聯絡",
    },
    common: {
      menu: "選單",
      contact_title: "聯絡方式",
      email_label: "電子郵件",
      location_label: "所在地",
      location_value: "台北，台灣",
      linkedin_label: "LinkedIn",
      footer: "在台北用心製作 · Jenifer Antony Padyachi © 2026",
      toggle_label: "EN",
      toggle_aria: "Switch to English",
    },
    home: {
      meta_title: "Jenifer Antony Padyachi",
      meta_description: "Jenifer Antony Padyachi－英語教學專業人才。",
      hero_identity: "英語教學專業人才，應用外語碩士",
      hero_summary: "具備應用外語碩士學歷，並在台灣教授兒童英語方面擁有扎實經驗的英語教學專業人才。曾任 ELTA 英語教學助理，目前於 American Eagle Institute 擔任外籍英語教師，熟悉公立學校與民間英語教育環境。擅長課程規劃、班級經營、教材執行、學生支持、家長溝通及跨文化教育。致力於打造有參與感、具包容性且能建立學生自信的學習環境，鼓勵學生主動溝通、積極參與並持續成長。",
      view_experience: "查看經歷",
      student_memories: "學生回憶",
      contact_details: "聯絡資訊",
      expertise_title: "專業領域",
      professional_skills_title: "專業技能",
      professional_skills_body: "英語教學、課程規劃、課程執行、班級經營、學生輔導、家長溝通、跨文化教育、評量與評估、內容寫作、學生支持",
      technical_skills_title: "技術能力",
      technical_skills_body: "教育科技、McGraw Hill 課程、Microsoft Office、Google Workspace、學習管理系統",
      experience_title: "工作經歷",
      current_role_title: "外籍英語教師",
      current_role_date: "2025 年 9 月－至今",
      current_role_location: "新北市，台灣",
      current_role_body: "目前教授一年級與五年級學生，依照 McGraw Hill 課程架構進行英語教學。工作內容包含設計具吸引力的課堂活動、追蹤學生學習進度、管理課堂學習、批改作業、提供回饋，以及與家長溝通學生的學習發展。",
      elta_title: "英語教學助理（ELTA）",
      elta_org: "台灣教育部",
      elta_date: "2024 年 2 月－2025 年 6 月［1 年 4 個月］",
      elta_location: "台北市，台灣",
      elta_body: '獲選參與支援台灣英語教育的全國計畫。曾於 <a href="https://www.whps.ntpc.edu.tw/" target="_blank" rel="noreferrer">新北市汪汪溪國民小學</a> 與 <a href="https://www.japs.tp.edu.tw/nss/p/index" target="_blank" rel="noreferrer">台北市仁愛國民小學</a> 任教。與本地教師合作規劃互動式英語課程、跨文化交流活動及溝通導向語言學習內容，並依不同學校環境與學生需求調整教材，同時透過持續專業成長與教學反思精進教學能力。',
      education_title: "學歷與資格",
      ma_title: "應用外語文學碩士",
      ma_meta: "國立台灣科技大學（NTUST），台北，台灣",
      ma_date: "2023 年 9 月－2025 年 7 月",
      ma_body: "研究所課程著重於應用語言學、第二語言習得理論與教學法，並聚焦跨文化溝通與語言教育科技整合。",
      ba_title: "文學學士，大眾傳播（新聞學方向）",
      ba_meta: "Smt. Maniben M.P. Shah Women's College, SNDT Women's University，孟買，馬哈拉施特拉邦，印度",
      ba_date: "2018 年 6 月－2021 年 4 月",
      ba_body: "以最高榮譽畢業（GPA 10.00/10.00，總成績 97%）。課程涵蓋媒體研究、新聞倫理、內容創作與傳播理論，並完成紀錄片製作、社會議題倡議及多媒體內容開發等專題。",
      certification_title: "證照",
      certification_body: '120 小時 TESOL/TEFL 證書，<a href="https://www.worldtesolacademy.com/" target="_blank" rel="noreferrer">World TESOL Academy</a>',
      certification_date: "核發日期：2025/09/16",
      languages_title: "語言能力",
      languages_list: "<li><strong>英語：</strong>母語程度</li><li><strong>印地語：</strong>母語程度</li><li><strong>坦米爾語：</strong>母語程度</li><li><strong>馬拉地語：</strong>母語程度</li><li><strong>中文：</strong>初級</li><li><strong>韓語：</strong>初級</li>",
    },
    contact: {
      meta_title: "聯絡方式 | Jenifer Antony Padyachi",
      meta_description: "Jenifer Antony Padyachi 的聯絡資訊。",
      hero_summary: "聯絡資訊直接整理自目前履歷，提供電子郵件與 LinkedIn 連結方便聯繫。",
    },
    memories: {
      meta_title: "學生回憶 | Jenifer Antony Padyachi",
      meta_description: "Jenifer Antony Padyachi 的學生回憶相簿。",
      title: "來自學生與同事的字條與回憶",
      identity: "收錄一路上珍藏的訊息、片刻與照片。",
      summary: "",
      loading: "正在載入照片...",
      count_singular: "1 張照片",
      count_plural: "{count} 張照片",
      empty_title: "目前還沒有回憶內容",
      empty_body: "新的回憶很快就會出現在這裡。",
      close: "關閉",
      load_error: "無法載入照片",
    },
  },
};

function getStoredLanguage() {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored && translations[stored] ? stored : DEFAULT_LANGUAGE;
}

function getTranslation(lang, key) {
  return key.split(".").reduce((value, segment) => {
    if (value && Object.prototype.hasOwnProperty.call(value, segment)) {
      return value[segment];
    }
    return undefined;
  }, translations[lang]);
}

function formatTranslation(template, values) {
  return template.replace(/\{(\w+)\}/g, (_, token) => String(values[token] ?? ""));
}

function applyTranslations(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = getTranslation(lang, key);
    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    const value = getTranslation(lang, key);
    if (typeof value === "string") {
      element.innerHTML = value;
    }
  });

  document.querySelectorAll("[data-i18n-content]").forEach((element) => {
    const key = element.dataset.i18nContent;
    const value = getTranslation(lang, key);
    if (typeof value === "string") {
      if (element.tagName === "TITLE") {
        document.title = value;
      } else {
        element.setAttribute("content", value);
      }
    }
  });

  document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
    button.textContent = getTranslation(lang, "common.toggle_label");
    button.setAttribute("aria-label", getTranslation(lang, "common.toggle_aria"));
  });

  document.dispatchEvent(
    new CustomEvent("languagechange", {
      detail: { lang },
    })
  );
}

function setLanguage(lang) {
  window.localStorage.setItem(STORAGE_KEY, lang);
  applyTranslations(lang);
}

function setupLanguageToggle() {
  const toggleButtons = document.querySelectorAll("[data-lang-toggle]");

  if (!toggleButtons.length) {
    return;
  }

  const initialLanguage = getStoredLanguage();
  applyTranslations(initialLanguage);

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextLanguage = document.documentElement.lang === "en" ? "zh-Hant" : "en";
      setLanguage(nextLanguage);
    });
  });
}

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

function setupMemoryGrid() {
  const section = document.querySelector("[data-gallery-folder]");
  const grid = document.querySelector("[data-memory-grid]");

  if (!section || !grid) {
    return;
  }

  const countTarget = document.querySelector("[data-memory-count]");
  const emptyState = document.querySelector("[data-memory-empty]");
  const lightbox = document.querySelector("[data-memory-lightbox]");
  const lightboxImage = document.querySelector("[data-memory-lightbox-image]");
  const lightboxCaption = document.querySelector("[data-memory-lightbox-caption]");
  const lightboxClose = document.querySelector("[data-memory-close]");
  const allowedExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"];
  let currentLanguage = getStoredLanguage();
  let loadedCount = 0;
  let galleryStatus = "loading";

  function memoryTranslation(key) {
    return getTranslation(currentLanguage, `memories.${key}`);
  }

  function updateCount(total) {
    loadedCount = total;
    if (!countTarget) {
      return;
    }
    if (total === 1) {
      countTarget.textContent = memoryTranslation("count_singular");
      return;
    }
    countTarget.textContent = formatTranslation(memoryTranslation("count_plural"), { count: total });
  }

  function updateStatusText() {
    if (!countTarget) {
      return;
    }
    if (galleryStatus === "loading") {
      countTarget.textContent = memoryTranslation("loading");
      return;
    }
    if (galleryStatus === "error") {
      countTarget.textContent = memoryTranslation("load_error");
      return;
    }
    updateCount(loadedCount);
  }

  function showEmptyState() {
    galleryStatus = "ready";
    updateCount(0);
    if (emptyState) {
      emptyState.hidden = false;
    }
  }

  function openLightbox(src, labelText) {
    if (!lightbox || !lightboxImage || !lightboxCaption) {
      return;
    }

    lightboxImage.src = src;
    lightboxImage.alt = labelText;
    lightboxCaption.textContent = labelText;
    lightbox.hidden = false;
    document.body.classList.add("menu-open");
  }

  function closeLightbox() {
    if (!lightbox || !lightboxImage || !lightboxCaption) {
      return;
    }

    lightbox.hidden = true;
    lightboxImage.src = "";
    lightboxImage.alt = "";
    lightboxCaption.textContent = "";
    document.body.classList.remove("menu-open");
  }

  function appendImageCard(src, labelText) {
    const item = document.createElement("article");
    item.className = "memory-item";
    item.setAttribute("data-reveal", "");
    item.tabIndex = 0;

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

    item.addEventListener("click", () => {
      openLightbox(src, labelText);
    });

    item.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(src, labelText);
      }
    });

    image.addEventListener("load", () => {
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
      item.classList.add("is-visible");
    }
  }

  async function loadGithubGallery() {
    const owner = section.dataset.galleryOwner;
    const repo = section.dataset.galleryRepo;
    const branch = section.dataset.galleryBranch;
    const folder = section.dataset.galleryFolder;

    updateStatusText();

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

      galleryStatus = "ready";
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
    } catch (error) {
      console.error("Unable to load gallery images from GitHub.", error);
      galleryStatus = "error";
      updateStatusText();
      if (emptyState) {
        emptyState.hidden = false;
      }
    }
  }

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox && !lightbox.hidden) {
      closeLightbox();
    }
  });

  document.addEventListener("languagechange", (event) => {
    currentLanguage = event.detail.lang;
    updateStatusText();
  });

  loadGithubGallery();
}

setupLanguageToggle();
setupReveal();
setupMemoryGrid();
