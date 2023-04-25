let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.querySelector('.marquee-container').classList.remove('marquee-container-hide');
    document.querySelector('.main-navbar-hide').classList.add('main-header-bottom-bar');
    
  } else {
    document.querySelector('.marquee-container').classList.add('marquee-container-hide');
    document.querySelector('.main-navbar-hide').classList.remove('main-header-bottom-bar');
    
  }
  prevScrollPos = currentScrollPos;
}
