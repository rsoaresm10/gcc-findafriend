let menuClose = document.querySelector(".close-menu")
let menu = document.querySelector(".menu")
let home = document.querySelector(".home-container")



menuClose.addEventListener('click',() => {
menuClose.classList.toggle("hidden")
menu.classList.toggle("hidden")
home.classList.toggle("hidden")


})

menu.addEventListener('click',() => {
    menuClose.classList.toggle("hidden")
    menu.classList.toggle("hidden")
home.classList.toggle("hidden")

    })
    
