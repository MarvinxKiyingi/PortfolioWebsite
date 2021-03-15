$(function () {
  const hamburger = $('.BurgerMenuBtn');

  hamburger.on('click', toggleMenu);
});

function toggleMenu() {
  const navLinks = $('.Menu');
  $(this).toggleClass('animate');
  $(navLinks).toggleClass('show');
  // if (window.screen.width >= 769) {
  //   $(this).toggleClass('active');
  //   $(navLinks).toggleClass('show');
  // }
}
