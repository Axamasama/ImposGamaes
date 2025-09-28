// Переключение вкладок
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
    link.classList.add("active");

    const section = link.dataset.section;
    document.querySelectorAll("main section").forEach(sec => sec.style.display = "none");
    document.getElementById("section-" + section).style.display = "block";
  });
});

// Модалка для игр
const modal = document.getElementById("modal");
const gameFrame = document.getElementById("gameFrame");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".open-game").forEach(btn => {
  btn.addEventListener("click", () => {
    const gameUrl = btn.dataset.game;
    gameFrame.src = gameUrl;
    modal.style.display = "flex";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  gameFrame.src = "";
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
    gameFrame.src = "";
  }
});
