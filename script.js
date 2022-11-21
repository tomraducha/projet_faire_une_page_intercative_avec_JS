//Fonctionnalité 1:

let x = document.querySelector("footer");
let count = 0;


x.addEventListener("click", function () {
    count++
    console.log("clique numéro: " + count)
});

//Fonctionnalité 2:

const navBarId = document.getElementById("navbarHeader")
const collapseClass = document.getElementsByClassName("navbar-toggler")

function hamburgerMenu() {
    navBarId.classList.toggle("collapse")
}

collapseClass[0].addEventListener("click", hamburgerMenu);

//Fonctionnalité 3:

const cardText = document.getElementsByClassName("card-text")
const buttonCard = document.getElementsByClassName("btn-outline-secondary")

buttonCard[0].addEventListener("click", textColor);

function textColor() {
    cardText[0].style.color = "red"
}

//Fonctionnalité 4:

buttonCard[1].addEventListener("click", textSecondColor);
function textSecondColor() {
    if (cardText[1].style.color === "green") {
        cardText[1].style.color = "black"
    } else {
        cardText[1].style.color = "green"
    }
}

//Fonctionnalité 5:

const linkBootstrap = document.getElementsByTagName("link")[0]
const navDisable = document.getElementsByTagName("header")[0]

navDisable.addEventListener("dblclick", removeBootstrap);

function removeBootstrap() {
    if (linkBootstrap.disabled === true) {
        linkBootstrap.disabled = false
    } else {
        linkBootstrap.disabled = true
    }
}

//Fonctionnalité 6:

document.querySelectorAll(".card")
    .forEach((card) => {
        card.querySelector("button")
            .addEventListener("mouseover", () => {
                card.querySelector("p")
                    .classList.toggle("collapse");
                let img = card.querySelector("img");
                if (img.style.width === "20%") {
                    img.style.width = "100%";
                } else {
                    img.style.width = "20%";
                }
            });
    });
