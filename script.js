window.addEventListener("scroll", function () {
    const nav = document.getElementsByClassName("container");
    const navLi = document.getElementsByTagName("a");

    if (window.scrollY > 30) {
        nav[0].style.backgroundColor = "white";
        nav[0].style.color = "black";
        navLi[0].style.color = "black";
        navLi[1].style.color = "black";
        navLi[2].style.color = "black";
        navLi[3].style.color = "black";
        navLi[4].style.color = "black";
    }
    else {
        nav[0].style.backgroundColor = "#3056D3";
        nav[0].style.color = "white";
        navLi[0].style.color = "white";
        navLi[1].style.color = "white";
        navLi[2].style.color = "white";
        navLi[3].style.color = "white";
        navLi[4].style.color = "white";
    }
});



//handeling menubar when click on menu icon
const menuBar = document.getElementsByClassName("menu-bar");
const menuIcon = document.getElementsByClassName("menu-icon");
const crossIcon = document.getElementsByClassName("cross-icon");

let trackClick = 0;

function menuIconHandleClick() {
    if(trackClick === 0) {   
        menuBar[0].style.display ="block";
        menuIcon[0].style.display ="none";
        crossIcon[0].style.display ="block";
        trackClick = 1;
    }
    else {
        menuBar[0].style.display ="none";
        menuIcon[0].style.display ="block";
        crossIcon[0].style.display ="none";
        trackClick = 0;
    }
}
document.getElementsByClassName("menu-container")[0].addEventListener("click", menuIconHandleClick);