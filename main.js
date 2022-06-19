const containerSlider = document.querySelector('.hero__slider')
const sliders = containerSlider.querySelectorAll('li')
const btnBack = document.querySelector('.btn__slider_left')
const btnNext = document.querySelector('.btn__slider_right')

let index = 0;

function moveSlider() {
  containerSlider.style.transform = `translateX(-${index * 100}%)`
}

btnBack.addEventListener('click', () => {
  if (index == 0) {
    index = sliders.length -1
  } else {
    index--
  }
  moveSlider()
})

btnNext.addEventListener('click', () => {
  if (index == sliders.length - 1) {
    index = 0
  } else {
    index += 1
  }
  moveSlider()
})