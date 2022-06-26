const btnMenu = document.querySelector(".btnMenu")
const header = document.querySelector(".header nav")

btnMenu.addEventListener('click', () => {
    header.classList.toggle("active")
})