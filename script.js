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