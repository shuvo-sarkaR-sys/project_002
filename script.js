 
 
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    // },
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
document.getElementById('menu-toggle').addEventListener('click', function () {
  document.getElementById('nav-sidebar').classList.toggle('show'); });
