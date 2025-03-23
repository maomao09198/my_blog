const toggleButton = document.getElementById("toggle-button");

const logo = document.querySelector(".logo img")
const footerLogo = document.querySelector(".footer-logo img"); 
const menuItem = document.querySelector(".menu-item a");

console.log(localStorage.getItem("theme"));

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleButton.classList.add("dark");
    logo.src = "./assets/logodark.png";
    footerLogo.src = "./assets/footerlogodark.png";  
    menuItem.style.color = "white";

}
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleButton.classList.toggle("dark");

    // Save theme preference
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        logo.src = "./assets/logodark.png";
        menuItem.color ="white";
        footerLogo.src = "./assets/footerlogodark.png";  
        menuItem.style.color = "white";  
    } else {
        localStorage.setItem("theme", "light");
        logo.src = "./assets/logowhite.png";
        menuItem.color ="#202020";
        footerLogo.src = "./assets/logoblue.png"; 
        menuItem.style.color = "#202020";  

    }
});

const menuIcon = document.getElementById("menuIcon");
const menu = document.getElementById("menu");
menuIcon.addEventListener("click", ()=>{
    if(menu.style.display === "block"){
        menu.style.display = "none"
    }
    else {
        menu.style.display = "block"
    }
});

function showAlert() {
    alert("Hello, You Subscribed !!!");
  }