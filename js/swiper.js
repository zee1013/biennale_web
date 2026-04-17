window.addEventListener("load", ()=>{
     const swiper = new Swiper(".main-swiper", {
        effect : "fade",
        loop : true,
        speed : 1500,
        autoplay:{
            delay : 2500,
            disableOnInteraction:false,
        }
     });
})