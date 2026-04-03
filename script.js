const btn = document.getElementById("btn");
const navbar = document.querySelector(".navbar");

function clique(){
    navbar.classList.toggle("navbar_on");
}

btn.addEventListener("click", clique);