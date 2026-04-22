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
})