/**
 * Template Name: AgriCulture
 * Template URL: https://bootstrapmade.com/agriculture-bootstrap-website-template/
 * Updated: Jun 29 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

(function () {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector("body");
    const selectHeader = document.querySelector("#header");
    if (!selectBody || !selectHeader) return;
    window.scrollY > 100 ? selectBody.classList.add("scrolled") : selectBody.classList.remove("scrolled");
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  /**
   * Scroll up sticky header to headers with .scroll-up-sticky class
   */
  let lastScrollTop = 0;
  window.addEventListener("scroll", function () {
    const selectHeader = document.querySelector("#header");
    if (!selectHeader) return;
    if (!selectHeader.classList.contains("scroll-up-sticky")) return;

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > selectHeader.offsetHeight) {
      selectHeader.style.setProperty("position", "sticky", "important");
      selectHeader.style.top = `-${selectHeader.offsetHeight + 50}px`;
    } else if (scrollTop > selectHeader.offsetHeight) {
      selectHeader.style.setProperty("position", "sticky", "important");
      selectHeader.style.top = "0";
    } else {
      selectHeader.style.removeProperty("top");
      selectHeader.style.removeProperty("position");
    }
    lastScrollTop = scrollTop;
  });

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function mobileNavToogle() {
    const selectBody = document.querySelector("body");
    if (selectBody) selectBody.classList.toggle("mobile-nav-active");
    if (!mobileNavToggleBtn) return;
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener("click", mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Close mobile nav on backdrop click
   */
  const navmenuOverlay = document.querySelector("#navmenu");
  if (navmenuOverlay) {
    navmenuOverlay.addEventListener("click", (e) => {
      if (e.target === navmenuOverlay && document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  }

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
    navmenu.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector(".scroll-top");

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add("active") : scrollTop.classList.remove("active");
    }
  }
  if (scrollTop) {
    scrollTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", aosInit);

  /**
   * Auto generate the carousel indicators
   */
  document.querySelectorAll(".carousel-indicators").forEach((carouselIndicator) => {
    carouselIndicator
      .closest(".carousel")
      .querySelectorAll(".carousel-item")
      .forEach((carouselItem, index) => {
        if (index === 0) {
          carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest(".carousel").id}" data-bs-slide-to="${index}" class="active"></li>`;
        } else {
          carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest(".carousel").id}" data-bs-slide-to="${index}"></li>`;
        }
      });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(swiperElement.querySelector(".swiper-config").innerHTML.trim());

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Animated number counters (element dengan atribut [data-count])
   */
  function initCounters() {
    const counters = document.querySelectorAll("[data-count]");
    if (!counters.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseInt(el.getAttribute("data-count"), 10) || 0;
          const duration = 1400;
          const start = performance.now();

          function step(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(target * eased).toLocaleString("id-ID");
            if (progress < 1) requestAnimationFrame(step);
          }

          requestAnimationFrame(step);
          obs.unobserve(el);
        });
      },
      { threshold: 0.4 }
    );

    counters.forEach((counter) => observer.observe(counter));
  }

  /**
   * Tombol salin ke clipboard (element dengan atribut [data-copy])
   */
  function initCopyButtons() {
    document.querySelectorAll("[data-copy]").forEach((button) => {
      button.addEventListener("click", async () => {
        const value = button.getAttribute("data-copy") || "";
        try {
          await navigator.clipboard.writeText(value);
        } catch (error) {
          const helper = document.createElement("textarea");
          helper.value = value;
          helper.style.position = "fixed";
          helper.style.opacity = "0";
          document.body.appendChild(helper);
          helper.select();
          document.execCommand("copy");
          helper.remove();
        }

        const label = button.querySelector("span");
        const original = label ? label.textContent : "";
        button.classList.add("is-copied");
        if (label) label.textContent = "Tersalin";
        window.setTimeout(() => {
          button.classList.remove("is-copied");
          if (label) label.textContent = original;
        }, 1600);
      });
    });
  }

  /**
   * Sorot jadwal sholat berikutnya berdasarkan jam lokal
   */
  function markNextPrayer(timings) {
    if (!timings) return;

    const order = [
      [".subuh-time", timings.Fajr],
      [".dzuhur-time", timings.Dhuhr],
      [".ashar-time", timings.Asr],
      [".maghrib-time", timings.Maghrib],
      [".isya-time", timings.Isha],
    ];

    const now = new Date();
    const nowMinutes = now.getHours() * 60 + now.getMinutes();
    let nextSelector = order[0][0];

    for (let i = 0; i < order.length; i += 1) {
      const value = order[i][1];
      if (!value) continue;
      const parts = String(value).split(":");
      const minutes = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
      if (minutes > nowMinutes) {
        nextSelector = order[i][0];
        break;
      }
    }

    document.querySelectorAll(".prayer-time").forEach((el) => el.classList.remove("is-next"));
    const target = document.querySelector(nextSelector);
    if (target && target.closest(".prayer-time")) {
      target.closest(".prayer-time").classList.add("is-next");
    }
  }

  window.KapingrejoUI = {
    markNextPrayer: markNextPrayer,
  };

  function initEnhancements() {
    initCounters();
    initCopyButtons();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initEnhancements);
  } else {
    initEnhancements();
  }

})();
