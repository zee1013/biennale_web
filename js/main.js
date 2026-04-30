window.addEventListener("load", ()=>{
    const fixBtn = document.querySelector(".fix-btn")
    const goTop = document.querySelector(".gotop")
    goTop.addEventListener("click", ()=>{
        window.scrollTo({
            top:0,
            behavior : "smooth",
        })
    })
    let waypoint_gallery = new Waypoint({
        element : document.querySelector(".gallery"),
        handler : function(direction){
            if(direction === "down"){
                fixBtn.classList.add("active")
            }else{
                fixBtn.classList.remove("active")
            }
        },
        offset:"80%"
    })
    // 스크롤 버튼
    const scroll = document.querySelector(".scroll-btn")
    const infoSection = document.querySelector(".info")
    scroll.addEventListener("click", ()=>{
        this.window.scrollTo({
            top: infoSection.offsetTop,
            behavior : "smooth",
        })
    })
})