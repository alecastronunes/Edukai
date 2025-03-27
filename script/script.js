document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const carouselItems = carousel.querySelectorAll(".carousel-item");
  const prevButton = carousel.querySelector(".prev");
  const nextButton = carousel.querySelector(".next");
  let currentIndex = 0;

  function showSlide(index) {
    // Remove active class from all items
    carouselItems.forEach((item) => item.classList.remove("active"));

    // Adjust index if out of bounds
    if (index >= carouselItems.length) currentIndex = 0;
    if (index < 0) currentIndex = carouselItems.length - 1;

    // Add active class to current slide
    carouselItems[currentIndex].classList.add("active");
  }

  function moveCarousel(direction) {
    currentIndex += direction;
    showSlide(currentIndex);
  }

  // Event listeners for navigation
  prevButton.addEventListener("click", () => moveCarousel(-1));
  nextButton.addEventListener("click", () => moveCarousel(1));
});

// const carousel = document.querySelector(".carousel");
// const images = document.querySelector(".carousel-item");
// const prevButton = document.querySelector(".carousel-nav-prev");
// const nextButton = document.querySelector(".carousel-nav-next");
// let counter = 0;
// const imageWidth = images.clientWidth;

// nextButton.addEventListener("click", () => {
//   if (counter >= images.children.length - 1) return;
//     counter++;
//     images.style.transform = `translateX(${-imageWidth * counter}px)`;
// });

// prevButton.addEventListener("click", () => {
//   if (counter <= 0) {
//     return;
//   }
//   counter--;
//   images.style.transform = `translateX(${-imageWidth * counter}px)`;
// });
