window.addEventListener("load", ()=>{
    const header = document.querySelector(".header")
    let scy = 0
    window.addEventListener("scroll", ()=>{
        scy = window.document.documentElement.scrollTop
        if(scy > 0){
            header.classList.add("active")
        }else{
            header.classList.remove("active")
        }
    })
})