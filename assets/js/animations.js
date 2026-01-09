/* =====================================================
   Animations JS
   Visual effects only
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initScrollReveal();
});

/* ---------- Scroll Reveal Animation ---------- */
function initScrollReveal() {
  const revealItems = document.querySelectorAll(
    ".section, .service-card, .portfolio-card, .skill-group"
  );

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  revealItems.forEach(item => observer.observe(item));
}
