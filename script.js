//Changing color of navigation bar while scrolling the page-------------------x---------------x--------------------x---------------------x----------------
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



//handeling menubar when click on menu icon-----------x--------x---------x----------------------x-------------------------x------------------
const menuBar = document.getElementsByClassName("menu-bar");
const menuIcon = document.getElementsByClassName("menu-icon");
const crossIcon = document.getElementsByClassName("cross-icon");

let trackClick = 0;

function menuIconHandleClick() {
    if (trackClick === 0) {
        menuBar[0].style.display = "block";
        menuIcon[0].style.display = "none";
        crossIcon[0].style.display = "block";
        trackClick = 1;
    }
    else {
        menuBar[0].style.display = "none";
        menuIcon[0].style.display = "block";
        crossIcon[0].style.display = "none";
        trackClick = 0;
    }
}
document.getElementsByClassName("menu-container")[0].addEventListener("click", menuIconHandleClick);



//------------x----------x form data send here x---------------x------------------x--------------------x----------------x-------------------x--------------------x--------------

const form = document.getElementsByClassName("form-area");
const msgText = document.getElementsByClassName("ud-main-btn");

form[0].addEventListener("submit", async function (e) {
    e.preventDefault()

    msgText[0].disabled = true;
    msgText[0].innerHTML = "Sending...";

    let name = document.getElementById("name").value
    let emailID = document.getElementById("eaddress").value
    let phone = document.getElementById("phone").value
    let Msg = document.getElementById("message").value

    let userData = {
        fullName: name,
        email: emailID,
        phoneNo: Number(phone),
        message: Msg
    }

    // const url = "http://localhost:8000/msgData";
    const url = "https://api-portfolio-ntqj.onrender.com/msgData";
    await fetch(url, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            'Content-type': 'application/json'
        }
    }).then((res) => {
        if (res.status === 200) {
            alert("Message Sent Succesfully");
            form[0].reset();
            msgText[0].innerHTML = "Send Message";
            msgText[0].disabled = false;
        }
    }).catch((e) => {
        alert(e);
        msgText[0].innerHTML = "Send Message";
        msgText[0].disabled = false;
    })


})