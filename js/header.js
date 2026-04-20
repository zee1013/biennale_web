window.addEventListener("load", ()=>{
    const header = document.querySelector(".header")
    let scy = 0
    // 스크롤을 내렸을 때 헤더 색 변경
    window.addEventListener("scroll", ()=>{
        scy = window.document.documentElement.scrollTop
        if(scy > 0){
            header.classList.add("active")
        }else{
            header.classList.remove("active")
        }
    })
    // 모바일일때 메뉴 버튼 클릭시 서브메뉴 나오기
    const mbt = document.querySelector(".mb-menuBtn")
    const mbMenu = document.querySelector(".mb-nav")
     const htmlRoot = document.querySelector("html")
    mbt.addEventListener("click", ()=>{
        const state = mbt.classList.contains("ani")
        if(state){
            mbt.classList.remove("active")
            mbMenu.classList.remove("active")
            header.classList.remove("active")
            mbt.classList.remove("ani")
            htmlRoot.classList.remove("active")
        }else{
            mbt.classList.add("active")
            mbMenu.classList.add("active")
            header.classList.add("active")
            mbt.classList.add("ani")
            htmlRoot.classList.add("active")
        }
    })
    // 서브메뉴가 나왔을 때 스크롤 바 없애기
    window.addEventListener("resize", ()=>{
        let winW = window.innerWidth
        if(winW > 1024){
            mbt.classList.remove("ani")
            mbMenu.classList.remove("active")
            htmlRoot.classList.remove("active")
            if(scy > 0){
                header.classList.add("active")
                mbt.classList.add("active")
            }else{
                header.classList.remove("active")
                mbt.classList.remove("active")
            }
        }
    })
})