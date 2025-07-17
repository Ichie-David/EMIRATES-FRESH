// Hamburger menu toggle
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("navMenu").classList.toggle("show");
});

//Gallery scroll
function scrollGallery() {
  const scrollBox = document.getElementById("galleryScroll");
  scrollBox.scrollBy({ left: 300, behavior: "smooth" });
}

function toggleReadMore(btn) {
  const moreText = btn.previousElementSibling.querySelector(".more-text");
  const isVisible = moreText.style.display === "inline";

  if (isVisible) {
    moreText.style.display = "none";
    btn.textContent = "Read More";
  } else {
    moreText.style.display = "inline";
    btn.textContent = "Show Less";
  }
}
