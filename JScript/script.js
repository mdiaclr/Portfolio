const heroCard = document.getElementById("heroCard");
const quickIntro = document.getElementById("quickIntro");
const tapHint = document.getElementById("tapHint");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

heroCard.addEventListener("click", () => {
  const isOpen = heroCard.getAttribute("aria-expanded") === "true";
  heroCard.setAttribute("aria-expanded", String(!isOpen));
  quickIntro.hidden = isOpen;
  tapHint.textContent = isOpen ? "tap the card!" : "a little about me";
});

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("click", () => {
    const image = item.querySelector("img");
    lightboxImage.src = item.dataset.full;
    lightboxImage.alt = image.alt;
    lightbox.hidden = false;
    lightboxClose.focus();
  });
});

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.src = "";
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", event => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
});
