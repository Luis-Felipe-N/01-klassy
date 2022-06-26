const containerCarousel = document.querySelector('.ourMenu__carousel-container')
const carousel = document.querySelector('.ourMenu__carousel')
const carouselItems = carousel.querySelectorAll('li')
const widthCarouselItems = 384

const btnPreviouCarousel = document.querySelector('[aria-js="controlLeftCarousel"]')
const btnNextCarousel = document.querySelector('[aria-js="controlRightCarousel"]')
let indexC=0;

btnPreviouCarousel.addEventListener('click', () => {
    indexC += 1
    carousel.style.transform = `translateX(${indexC * widthCarouselItems}px)`
    if (indexC > 0) {
    }
})

btnNextCarousel.addEventListener('click', () => {
    indexC -= 1
    console.log('sda')
    carousel.style.transform = `translateX(${indexC * widthCarouselItems}px)`
    if (indexC <= carouselItems.length - 3) {
    }
})