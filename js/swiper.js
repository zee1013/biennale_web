window.addEventListener("load", ()=>{
     const swiper = new Swiper(".main-swiper", {
        effect : "fade",
        loop : true,
        speed : 1700,
        autoplay:{
            delay : 2500,
            disableOnInteraction:false,
        }
     });
     // 갤러리 스와이퍼
     const gallerySwiper = new Swiper(".gallery-swiper", {
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
     })
})