const navbar = document.querySelector('nav');
const scrollUpBtn = document.querySelector('.scroll-up-btn');
const menuItems = document.querySelector('.menu-items');
const menuBtn = document.querySelector('.menu-btn i');
const send = document.querySelector('.send');
const status = document.querySelector('.status');

let isMenuBtnActive = false;

function debounce(func, delay = 15) {
  let timeout;
  return function () {
    const args = arguments;
    const later = function () {
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
  };
}

function scrolling() {
  if (window.scrollY > 40) {
    navbar.classList.add('nav-bar');
  } else {
    navbar.classList.remove('nav-bar');
  }
  if (window.scrollY > 700) {
    scrollUpBtn.classList.add('show');
  } else {
    scrollUpBtn.classList.remove('show');
  }
}

function handleMenu(e) {
  if (isMenuBtnActive) {
    menuItems.classList.remove('active');
    menuBtn.classList.remove('active');
  } else {
    menuItems.classList.add('active');
    menuBtn.classList.add('active');
  }
  isMenuBtnActive = !isMenuBtnActive;
  console.log('CLICKED', isMenuBtnActive);
}

function scrollToTop() {
  window.scrollTo(0, 0);
}

const typed = new Typed('.typing', {
  strings: ['Web Developer'],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

function contactMe(e) {
  e.preventDefault();
  emailjs
    .sendForm('service_3jv7p0r', 'template_0kqp13a', e.target, 'user_6WC2H7h8PMQY0ehSejKJ0')
    .then()
    .catch();
  send.classList.add('hide');
  status.classList.remove('hide');
  e.target.reset();
}

window.addEventListener('scroll', debounce(scrolling));
