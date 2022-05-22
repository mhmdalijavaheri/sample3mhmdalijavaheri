// Code By MohammadAliJavaheri
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    // If we need pagination
    autoplay: {
        delay: 300,
        disableOnIntraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });