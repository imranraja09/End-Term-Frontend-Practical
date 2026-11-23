const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});