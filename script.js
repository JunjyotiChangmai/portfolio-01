const menu = document.getElementById("menu-Icon");
menu.addEventListener("click", function() {
    document.getElementById("side-bar").style.display = "block";
});

const cross = document.getElementById("cross-icon");
cross.addEventListener("click", function() {
    document.getElementById("side-bar").style.display = "none";
});