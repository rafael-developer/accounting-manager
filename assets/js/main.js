document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggle && navLinks) {
    const closeMenu = () => {
      navLinks.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menu");
    };

    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      const isOpen = !expanded;
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) closeMenu();
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});
