
let sideMenu = document.getElementById("sideMenu");
let sideMenuLinks =document.querySelectorAll("#sideMenu .navLink");
let menuClose = true;
let menuBtn = document.getElementById("menuBtn");
let menuBtnLine1 = document.querySelector("#menuBtn .line:nth-child(1)");
let menuBtnLine2 = document.querySelector("#menuBtn .line:nth-child(2)");
let menuBtnLine3 = document.querySelector("#menuBtn .line:nth-child(3)");
let dots = document.querySelectorAll(".dotBox .dot");

let slides = document.querySelectorAll(".slide");

function menuBtnCross(){
    menuBtn.style.gap = '0px';
    menuBtnLine2.style = 'display: none;'
    menuBtnLine1.style = 'transform: translateX(2px) translateY(2px) rotate(45deg);'
    menuBtnLine3.style = 'transform: rotate(-45deg);'
}
function menuBtnReset(){
    menuBtn.style.gap = '6px';
    menuBtnLine2.style = 'display: block;'
    menuBtnLine1.style = 'transform: translateX(-6px); transform: rotate(0deg); '
    menuBtnLine3.style = 'transform: rotate(0deg);'
}

document.getElementById("menuBtn").addEventListener("click", (e)=>{
    if (sideMenu.classList.contains("shown")) {
        sideMenu.classList.remove("shown");
        menuBtnReset();
    }else {
        sideMenu.classList.add("shown");
        menuBtnCross();
    }
})
document.getElementById("menuBtn").addEventListener("focusout", (e)=>{
    sideMenu.classList.remove("shown");
    menuBtnReset();
})

sideMenuLinks.forEach(link => {
    link.addEventListener("click", (e)=>{
        sideMenu.classList.remove("shown");
    })
});

let currentSlide = 1;
let lastSlide = 4;
let firstSlide = 1;
let forward = true;

function slideAhead(){
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${(currentSlide + 0) * 100}%)`;
        // slide.style.transform = `translateX(-100%)`;
    });
    currentSlide = currentSlide + 1;
    // dots.forEach((dot, index) => {
    //     if (dot.classList.contains("filled")) {
    //         dot.classList.remove("filled");
    //         let nextDot = document.querySelector(`.dotBox .dot:nth-child(${currentSlide})`);
    //         nextDot.classList.add("filled");
    //     }
    // });

    for (const dot of dots) {
        if (dot.classList.contains("filled")) {
            dot.classList.remove("filled");
            let nextDot = document.querySelector(`.dotBox .dot:nth-child(${currentSlide})`);
            nextDot.classList.add("filled");
            break;
        }
    }
}
function slideBack(){
    slides.forEach(slide => {
        // slide.style.transform = `translateX(${(currentSlide - 1) * 100}%)`;
        slide.style.transform = `translateX(-${(currentSlide - 2) * 100}%)`;
    });
    currentSlide = currentSlide - 1;
    // dots.forEach((dot, index) => {
    //     if (dot.classList.contains("filled")) {
    //         dot.classList.remove("filled");
    //         let nextDot = dot.previousElementSibling;
    //         if (nextDot){
    //             nextDot.classList.add("filled");
    //         }
    //     }
    // });

    for (const dot of dots) {
        if (dot.classList.contains("filled")) {
            dot.classList.remove("filled");
            let nextDot = document.querySelector(`.dotBox .dot:nth-child(${currentSlide})`);
            nextDot.classList.add("filled");
            break;
        }
    }
}

function runSlider(){
    {
        if (forward === true){
            if (currentSlide < lastSlide) {
                slideAhead();
                console.log(`slide went forward, currentSlide is ${currentSlide} forward in ${forward}`)
            }
            else{
                forward = false;
                slideBack();
                console.log(`slide went back, currentSlide is ${currentSlide} forward in ${forward}`)
            }
        }else{
            console.log("went in else");
            if (currentSlide > firstSlide) {
                // console.log("went in second if")
                slideBack();
                console.log(`slide went back, currentSlide is ${currentSlide} forward in ${forward}`)
            }
            else{
                // console.log("went in second else");
                forward = true;
                slideAhead();
                console.log(`slide went forward, currentSlide is ${currentSlide} forward in ${forward}`)
            }
        }
    }
}

document.body.onload = ()=>{
    setInterval(runSlider, 4000);
}
