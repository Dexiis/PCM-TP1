// Scroll to carousel
function carousel() {
  const targetElement = document.getElementById("carousel-section");
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
    });
  }
}
