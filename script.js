 
document.getElementById('menu-toggle').addEventListener('click', function () {
  document.getElementById('nav-sidebar').classList.toggle('show'); });
  const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

// Scroll: Highlight active nav link
window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150; // adjust based on your navbar height
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
      // Optional: keep the active item visible in horizontal scroll
      link.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  });
});

// Click: Smooth scroll and highlight
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // prevent jump
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 100, // adjust if you have sticky nav
        behavior: 'smooth'
      });

      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
});

 
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 4,
      
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1024: { slidesPerView: 4 },
      768:  { slidesPerView: 2 },
      0:  { slidesPerView: 1 },
    }
  });






  const swiper1 = new Swiper('.swiper2', {
  slidesPerView: 3,
    slidesPerGroup: 1,
      
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
         
    },
    breakpoints: {
      1024: { slidesPerView: 3 },
      768:  { slidesPerView: 2 },
      0:  { slidesPerView: 1 },
    }
});

  const swiper3 = new Swiper('.swiper3', {
  slidesPerView: 3,
    slidesPerGroup: 1,
    
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
         
    },
    breakpoints: {
      1024: { slidesPerView: 3 },
      768:  { slidesPerView: 2 },
      0:  { slidesPerView: 1 },
    }
});


 
