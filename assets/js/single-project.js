document.addEventListener('DOMContentLoaded', () => {
  console.log('hi')

  const galleryVillageSwiper = new Swiper('.gallery-village__swiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.gallery-village-next',
      prevEl: '.gallery-village-prev',
    },
  });

})