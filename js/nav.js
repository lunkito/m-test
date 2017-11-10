// ES 6 //
const navToggle = document.querySelector('.menu-button')

navToggle.addEventListener('click', _ => {
   document.body.classList.toggle('nav-open')
})