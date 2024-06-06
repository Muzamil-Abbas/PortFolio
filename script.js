/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });

    };
  });



  /*==================== sticky navbar ====================*/
  let header = document.querySelector('header');

  header.classList.add('sticky', window.scrollY > 100);


  /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};
/*==================== scroll reveal ====================*/

ScrollReveal({
  reset: true,
  distance: '2rem',
  duration: 2000,
  delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contant h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contant p, .about-content', { origin: 'right' });



/*==================== typed js ====================*/

// const typed = new Typed('.multiple-text', {
//   String: ['Frontend Developer', 'React Js Developer', 'Bloger '],
//   typeSpeed: 100,
//   backSpeed: 100,
//   baclDelay: 1000,
//   loop: true
// });
const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'React Js Developer', 'Blogger'],
  typeSpeed: 100,
  backSpeed: 100,
  startDelay: 1000, // Adjusted property name
  loop: true,
  loopDelay: 1000 // Add loop delay if needed
});
