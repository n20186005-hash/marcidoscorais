// 全局客户端交互：主题切换 / 导航 / FAQ / 灯箱 / 滚动揭示 / 天气
// 该脚本由 BaseLayout 引入，Astro 会自动打包。

document.addEventListener("DOMContentLoaded", () => {
  /* ---------- 主题切换 ---------- */
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = themeToggle?.querySelector<HTMLElement>(".theme-toggle__icon");
  const applyThemeIcon = (theme: string) => {
    if (themeIcon) themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
  };
  applyThemeIcon(document.documentElement.getAttribute("data-theme") || "light");
  themeToggle?.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (_) {}
    applyThemeIcon(next);
  });

  /* ---------- 导航滚动态 ---------- */
  const nav = document.getElementById("siteNav");
  const onScroll = () => {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 10);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- 移动端菜单 ---------- */
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  navToggle?.addEventListener("click", () => {
    navLinks?.classList.toggle("open");
  });
  navLinks?.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("open"))
  );

  /* ---------- 语言菜单 ---------- */
  const langMenu = document.getElementById("langMenu");
  const langBtn = document.getElementById("langMenuBtn");
  langBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    langMenu?.classList.toggle("open");
    langBtn.setAttribute(
      "aria-expanded",
      langMenu?.classList.contains("open") ? "true" : "false"
    );
  });
  document.addEventListener("click", (e) => {
    if (langMenu && !langMenu.contains(e.target as Node)) {
      langMenu.classList.remove("open");
      langBtn?.setAttribute("aria-expanded", "false");
    }
  });

  /* ---------- FAQ 手风琴 ---------- */
  document.querySelectorAll<HTMLElement>(".faq-question").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      if (!item) return;
      const answer = item.querySelector<HTMLElement>(".faq-answer");
      const open = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      if (answer) answer.style.maxHeight = open ? `${answer.scrollHeight}px` : "";
    });
  });

  /* ---------- 画廊灯箱 ---------- */
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg") as HTMLImageElement | null;
  const lightboxCap = document.getElementById("lightboxCap");
  const openLightbox = (src: string, caption: string) => {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = caption;
    if (lightboxCap) lightboxCap.textContent = caption;
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  };
  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  };
  document.querySelectorAll<HTMLElement>(".gallery-item").forEach((item) => {
    item.addEventListener("click", () => {
      const src = item.dataset.full || "";
      const caption = item.dataset.caption || "";
      openLightbox(src, caption);
    });
  });
  document.getElementById("lightboxClose")?.addEventListener("click", closeLightbox);
  lightbox?.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  /* ---------- 滚动揭示 ---------- */
  const reveals = document.querySelectorAll<HTMLElement>(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("visible"));
  }

  /* ---------- 天气（Open-Meteo） ---------- */
  const weatherCard = document.getElementById("weatherCard");
  const tempEl = document.getElementById("weatherTemp");
  const descEl = document.getElementById("weatherDesc");
  const iconEl = document.getElementById("weatherIcon");
  if (weatherCard && tempEl) {
    const lat = weatherCard.dataset.lat || "-9.6689";
    const lon = weatherCard.dataset.lon || "-35.6853";
    const codeMap: Record<number, { icon: string; label: string }> = {
      0: { icon: "☀️", label: "Clear" },
      1: { icon: "🌤️", label: "Mostly clear" },
      2: { icon: "⛅", label: "Partly cloudy" },
      3: { icon: "☁️", label: "Overcast" },
      45: { icon: "🌫️", label: "Fog" },
      48: { icon: "🌫️", label: "Fog" },
      51: { icon: "🌦️", label: "Light drizzle" },
      53: { icon: "🌦️", label: "Drizzle" },
      55: { icon: "🌦️", label: "Drizzle" },
      61: { icon: "🌧️", label: "Rain" },
      63: { icon: "🌧️", label: "Rain" },
      65: { icon: "🌧️", label: "Heavy rain" },
      71: { icon: "🌨️", label: "Snow" },
      73: { icon: "🌨️", label: "Snow" },
      75: { icon: "🌨️", label: "Snow" },
      80: { icon: "🌧️", label: "Showers" },
      81: { icon: "🌧️", label: "Showers" },
      82: { icon: "🌧️", label: "Showers" },
      95: { icon: "⛈️", label: "Thunderstorm" },
      96: { icon: "⛈️", label: "Thunderstorm" },
      99: { icon: "⛈️", label: "Thunderstorm" },
    };
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code`
    )
      .then((r) => r.json())
      .then((data) => {
        const cur = data?.current;
        if (!cur) return;
        const temp = Math.round(cur.temperature_2m);
        const info = codeMap[cur.weather_code] || { icon: "🌡️", label: "" };
        if (tempEl) tempEl.textContent = `${temp}°`;
        if (descEl) descEl.textContent = info.label;
        if (iconEl) iconEl.textContent = info.icon;
      })
      .catch(() => {
        if (descEl) descEl.textContent = "";
      });
  }
});
