const imageCarousel = (carouselElement) => {
    let activeIndex = 0;
    const prevButton = carouselElement.querySelector('.image-carousel__btn--prev');
    const nextButton = carouselElement.querySelector('.image-carousel__btn--next');
    const slides = carouselElement.getElementsByClassName('image-carousel__slide');

    slides[activeIndex].classList.add('image-carousel__slide--active');

    const nextSlide = () => {
        if (activeIndex < slides.length - 1) {
            slides[activeIndex].classList.remove('image-carousel__slide--active');
            slides[activeIndex + 1].classList.add('image-carousel__slide--active');
            activeIndex++;
        } else {
            slides[activeIndex].classList.remove('image-carousel__slide--active');
            activeIndex = 0;
            slides[activeIndex].classList.add('image-carousel__slide--active');
        }
    }

    const prevSlide = () => {
        if (activeIndex > 0) {
            slides[activeIndex].classList.remove('image-carousel__slide--active');
            slides[activeIndex - 1].classList.add('image-carousel__slide--active');
            activeIndex--;
        } else {
            slides[activeIndex].classList.remove('image-carousel__slide--active');
            activeIndex = slides.length - 1;
            slides[activeIndex].classList.add('image-carousel__slide--active');
        }
    }

    nextButton.addEventListener('click', () => nextSlide());
    prevButton.addEventListener('click', () => prevSlide());

    // adding touch event
    let touchStartX = 0;
    let touchEndX = 0;

    const checkDirection = () => {
        if(touchEndX < touchStartX) nextSlide();
        if(touchEndX > touchStartX) prevSlide();
    }

    carouselElement.addEventListener('touchstart', event => {
        touchStartX = event.changedTouches[0].screenX;
    });

    carouselElement.addEventListener('touchend', event => {
        touchEndX = event.changedTouches[0].screenX;
        checkDirection();
    })
};

document.addEventListener('DOMContentLoaded', () => {
    imageCarousel(document.getElementById('image-carousel-1'));
    imageCarousel(document.getElementById('image-carousel-2'));
    imageCarousel(document.getElementById('image-carousel-3'));
});