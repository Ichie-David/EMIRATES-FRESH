// Hamburger menu toggle
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("navMenu").classList.toggle("show");
});

//Gallery scroll
function scrollGallery() {
  const scrollBox = document.getElementById("galleryScroll");
  scrollBox.scrollBy({ left: 300, behavior: "smooth" });
}
