window.addEventListener("load", () => {
  const swiper = new Swiper(".main-swiper", {
    effect: "fade",
    loop: true,
    speed: 1700,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  // 갤러리 스와이퍼
  const gallerySwiper = new Swiper(".gallery-swiper", {
    loop: true,
    navigation: {
      nextEl: ".sw-visual-next",
      prevEl: ".sw-visual-prev",
    },
  });
  // 전시 스와이퍼
  const exhibitionSwiper = new Swiper(".exhibition-swiper", {
    slidesPerView: 2,
    spaceBetween: 15,
   //   loop: true,
   //  grid: {
   //    rows: 1,
   //    fill: "row",
   //  },
    breakpoints: {
      480: {
        spaceBetween: 26,
        slidesPerView: 2,
        slidesPerGroup: 3,
      },
      768: {
        spaceBetween: 26,
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
          rows: 2,
          fill: "row",
        },
      },
    },
  });
  // 프로그램 스와이퍼
  const programSwiper = new Swiper(".program-swiper", {
    loop : true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  })
});
