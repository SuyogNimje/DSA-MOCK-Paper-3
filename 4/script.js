const navbarToggler = document.querySelector('.navbar-toggler');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggler.addEventListener('click', () => {
  navbarToggler.classList.toggle('open');
  navbarMenu.classList.toggle('open');
});
