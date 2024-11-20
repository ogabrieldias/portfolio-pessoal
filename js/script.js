// ================ scroll sections active link ================
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(seca => {
    let top = window.scrollY;
    let offset = seca.offsetTop - 150;
    let height = seca.offsetHeight;
    let id = seca.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });


// ================ sticky navbar ================

let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);
};
 

// ================ swiper ================
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });