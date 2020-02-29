const burgerBtn = document.querySelector('.section-mobile-menu'),
  menuIcon = document.querySelector('.menu-icon'),
  overlayMenu = document.querySelector('.section-overlay');

let showOverlay = false;
burgerBtn.addEventListener('click', () => {
  showOverlay = !showOverlay;
  if (showOverlay) {
    overlayMenu.classList.remove('hide');
    menuIcon.classList.add('menu-icon-active');
  } else if (!showOverlay) {
    overlayMenu.classList.add('hide');
    menuIcon.classList.remove('menu-icon-active');
  }
});

overlayMenu.addEventListener('click', (e) => {
  if (e.target.tagName === "A") {
    showOverlay = !showOverlay;
    overlayMenu.classList.add('hide');
  }
})