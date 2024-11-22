const slides = [
    '<div><img src="img/baby-yoda.svg" alt="Baby Yoda"></div>',
    '<div><img src="img/banana.svg" alt="Banana"></div>',
    '<div><img src="img/girl.svg" alt="Girl"></div>',
    '<div><img src="img/viking.svg" alt="Viking"></div>',
]

let currIdx = 0;

function renderCarousel() {
    const slidesContainer = document.querySelector('.product-carousel__slides');
    slidesContainer.innerHTML = slides[currIdx];
    if (window.matchMedia('(min-width: 768px)').matches) {
        const secondSlideIdx = currIdx + 1 >= slides.length ? 0 : currIdx + 1;
        slidesContainer.innerHTML += slides[secondSlideIdx];
        if (window.matchMedia('(min-width: 1024px)').matches) { 
            const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
            slidesContainer.innerHTML += slides[thirdSlideIdx];
        }
    }
}

function nextSlide() {
    currIdx = currIdx + 1 >= slides.length ? 0 : currIdx + 1;
    renderCarousel();
}

function prevSlide() {
    currIdx = currIdx - 1 < 0 ? slides.length - 1 : currIdx - 1;
    renderCarousel();
}

// setInterval(nextSlide, 3000);

renderCarousel();

const btnNext = document.querySelector('.product-carousel__btn-next');
btnNext.addEventListener('click', nextSlide);

const btnPrev = document.querySelector('.product-carousel__btn-prev');
btnPrev.addEventListener('click', prevSlide);

window.addEventListener('resize', renderCarousel);
