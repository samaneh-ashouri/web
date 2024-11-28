//hamburgermenu -->


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}



const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}



// stiky-->

const header = document.querySelector('.sticky');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }
});



const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', function() {
    links.forEach(otherLink => otherLink.classList.remove('active'));
    this.classList.add('active');
  });
});










const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.id;
    }
  });
  
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href').slice(1) === current) {
      a.classList.add('active');
    }
  });
});