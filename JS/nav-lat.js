const open_menu = document.getElementById('open_menu')
const menu = document.querySelector('.menu')
const close_menu = document.getElementById('fecha_menu')

open_menu.addEventListener('click', () => {
    menu.classList.remove('slide-out')
    menu.classList.remove('menu')
    menu.classList.add('animado') 
})
close_menu.addEventListener('click', () => {
    menu.classList.remove('animado')
    menu.classList.add('slide-out') 
})