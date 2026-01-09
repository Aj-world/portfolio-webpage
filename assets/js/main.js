/* ===== LOAD HTML SECTIONS ===== */
const loadSection = (id, file) => {
  fetch(`sections/${file}`)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
};

loadSection("header", "header.html");
loadSection("hero", "hero.html");
loadSection("about", "about.html");
loadSection("skills", "skills.html");
loadSection("services", "services.html");
loadSection("portfolio", "portfolio.html");
loadSection("contact", "contact.html");
loadSection("footer", "footer.html");

/* ===== DARK MODE ===== */
const toggle = document.getElementById("themeToggle");

document.addEventListener("click", e => {
  if (e.target.id === "themeToggle") {
    const body = document.body;
    const isDark = body.dataset.theme === "dark";

    body.dataset.theme = isDark ? "light" : "dark";
    e.target.textContent = isDark ? "🌙" : "☀️";
  }
});

