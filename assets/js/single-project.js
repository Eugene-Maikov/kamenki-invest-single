document.addEventListener('DOMContentLoaded', () => {
  console.log('hi')

  const galleryVillageSwiper = new Swiper('.gallery-village__swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: '.gallery-village-next',
      prevEl: '.gallery-village-prev',
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

})