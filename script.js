// Buka popup
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const popupId = link.getAttribute("data-popup");
    document.getElementById(popupId).classList.add("active");
  });
});

// Tutup popup
document.querySelectorAll(".close").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".popup").classList.remove("active");
  });
});

// Klik di luar popup-content untuk nutup
document.querySelectorAll(".popup").forEach(popup => {
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("active");
    }
  });
});
