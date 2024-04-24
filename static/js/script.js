
let sideMenu = document.getElementById("sideMenu");
let sideMenuLinks =document.querySelectorAll("#sideMenu .navLink");
let menuClose = true;
let menuBtn = document.getElementById("menuBtn");
let menuBtnLine1 = document.querySelector("#menuBtn .line:nth-child(1)");
let menuBtnLine2 = document.querySelector("#menuBtn .line:nth-child(2)");
let menuBtnLine3 = document.querySelector("#menuBtn .line:nth-child(3)");

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