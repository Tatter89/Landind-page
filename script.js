const imageCarousel = (carouselElement) => {
  let activeIndex = 0;
  const prevButton = carouselElement.querySelector(
    ".image-carousel__btn--prev"
  );
  const nextButton = carouselElement.querySelector(
    ".image-carousel__btn--next"
  );
  const slides = carouselElement.getElementsByClassName(
    "image-carousel__slide"
  );
  const dotsContainer = carouselElement.querySelector(
    ".image-carousel__dots-container"
  );
  const handleDotClick = (event) => {
    slides[activeIndex].classList.remove("image-carousel__slide--active");
    dots[activeIndex].classList.remove("image-carousel__dot--active");
    activeIndex = +event.target.dataset.index;
    slides[event.target.dataset.index].classList.add(
      "image-carousel__slide--active"
    );
    dots[event.target.dataset.index].classList.add(
      "image-carousel__dot--active"
    );
  };

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("image-carousel__dot");
    dot.dataset.index = i;
    dot.addEventListener("click", handleDotClick);
    dotsContainer.appendChild(dot);
  }

  const dots = carouselElement.getElementsByClassName("image-carousel__dot");
  dots[activeIndex].classList.add("image-carousel__dot--active");
  slides[activeIndex].classList.add("image-carousel__slide--active");

  const nextSlide = () => {
    if (activeIndex < slides.length - 1) {
      slides[activeIndex].classList.remove("image-carousel__slide--active");
      slides[activeIndex + 1].classList.add("image-carousel__slide--active");
      dots[activeIndex].classList.remove("image-carousel__dot--active");
      dots[activeIndex + 1].classList.add("image-carousel__dot--active");
      activeIndex++;
    } else {
      slides[activeIndex].classList.remove("image-carousel__slide--active");
      dots[activeIndex].classList.remove("image-carousel__dot--active");
      activeIndex = 0;
      slides[activeIndex].classList.add("image-carousel__slide--active");
      dots[activeIndex].classList.add("image-carousel__dot--active");
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      slides[activeIndex].classList.remove("image-carousel__slide--active");
      slides[activeIndex - 1].classList.add("image-carousel__slide--active");
      dots[activeIndex].classList.remove("image-carousel__dot--active");
      dots[activeIndex - 1].classList.add("image-carousel__dot--active");
      activeIndex--;
    } else {
      slides[activeIndex].classList.remove("image-carousel__slide--active");
      dots[activeIndex].classList.remove("image-carousel__dot--active");
      activeIndex = slides.length - 1;
      slides[activeIndex].classList.add("image-carousel__slide--active");
      dots[activeIndex].classList.add("image-carousel__dot--active");
    }
  };

  nextButton.addEventListener("click", () => nextSlide());
  prevButton.addEventListener("click", () => prevSlide());

  // adding touch event
  let touchStartX = 0;
  let touchEndX = 0;

  const checkDirection = () => {
    if (touchEndX < touchStartX) nextSlide();
    if (touchEndX > touchStartX) prevSlide();
  };

  carouselElement.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].screenX;
  });

  carouselElement.addEventListener("touchend", (event) => {
    touchEndX = event.changedTouches[0].screenX;
    checkDirection();
  });
};

document.addEventListener("DOMContentLoaded", () => {
  imageCarousel(document.getElementById("badacsony"));
  imageCarousel(document.getElementById("balaton"));
  imageCarousel(document.getElementById("csopak"));
  imageCarousel(document.getElementById("fulek"));
});

document.addEventListener("DOMContentLoaded", () => {
  imageCarousel(document.getElementById("mindszent"));
  imageCarousel(document.getElementById("poroszlo"));
  imageCarousel(document.getElementById("pusztazamor"));
  imageCarousel(document.getElementById("tagyon"));
});
document.addEventListener("DOMContentLoaded", () => {
  imageCarousel(document.getElementById("tagyon"));
  imageCarousel(document.getElementById("tapolca"));
  imageCarousel(document.getElementById("tiszakecske"));
  imageCarousel(document.getElementById("tiszaladany"));
});

document.addEventListener("DOMContentLoaded", () => {
  imageCarousel(document.getElementById("hero-carousel"));
});

// Language switch
const langBtn = document.getElementById("btn");
const downloadEng = document.querySelector(".download-btn-eng");
const downloadHun = document.querySelector(".download-btn-hun");
const cvEng = document.querySelector(".cv-eng");
const cvHun = document.querySelector(".cv-hun");

function leftClick() {
  langBtn.style.left = "0";
  downloadEng.style.display = "none";
  downloadHun.style.display = "block";
  cvEng.style.display = "none";
  cvHun.style.display = "block";
}

function rightClick() {
  langBtn.style.left = "110px";
  downloadEng.style.display = "block";
  downloadHun.style.display = "none";
  cvEng.style.display = "block";
  cvHun.style.display = "none";
}

// scrolling with buttons
const upButton = document.querySelector(".scrollButton");
const downButton = document.querySelector(".downButton");
const scrollPageTo = (x = 0, y = 0) => window.scrollTo(x, y);

const scrollButtonHandler = (event, scrollOffset = 600) => {
  if (window.scrollY > scrollOffset) {
    // show up button
    upButton.classList.add("active");
    if (downButton) downButton.classList.add("hidden");
  } else {
    // hide up button || show down button
    upButton.classList.remove("active");
    if (downButton) downButton.classList.remove("hidden");
  }
};

if (downButton) {
  downButton.addEventListener("click", () => {
    scrollPageTo(0, 1000);
  });
}
upButton.addEventListener("click", scrollPageTo);
window.addEventListener("scroll", scrollButtonHandler);
window.addEventListener("DOMContentLoaded", scrollButtonHandler);

/* const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav"); */
