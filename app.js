//general rule of thumb seems to be that its best to have one JS file so there is less requests. However, while developing it is nice to have a bunch of smaller files to stay organized

//variables for the hoverImage function
const imageBtn1 = document.getElementById("image-btn1");
const imageBtn2 = document.getElementById("image-btn2");
const imageBtn3 = document.getElementById("image-btn3");
const info1 = document.querySelector(".info1");
const info2 = document.querySelector(".info2");
const info3 = document.querySelector(".info3");
// const infoContainer = document.querySelector(".infoContainer");
const imgTitle1 = document.querySelector(".img-title1");
const imgTitle2 = document.querySelector(".img-title2");
const imgTitle3 = document.querySelector(".img-title3");
const container = document.querySelector(".container");
//allows the hover image section to work correctly
function hoverImage() {
    //each button toggles the image to show text below it one at a time:
    imageBtn1.addEventListener("click", function () {
        if (info1.classList.contains("visible")) {
            info1.classList.remove("visible");
            imgTitle1.classList.remove("invisible");
            imageBtn1.classList.remove("dim");
            container.classList.remove("container-extend");
        }
        else {
            //makes first image visible while making subititle move down creating illusion that its moving down
            info1.classList.add("visible");
            imgTitle1.classList.add("invisible");
            imageBtn1.classList.add("dim");
            container.classList.add("container-extend");


            info2.classList.remove("visible");
            imgTitle2.classList.remove("invisible");
            imageBtn2.classList.remove("dim");

            info3.classList.remove("visible");
            imgTitle3.classList.remove("invisible");
            imageBtn3.classList.remove("dim");
        }
    });
    imageBtn2.addEventListener("click", function () {
        if (info2.classList.contains("visible")) {
            info2.classList.remove("visible");
            imgTitle2.classList.remove("invisible");
            imageBtn2.classList.remove("dim");
            container.classList.remove("container-extend");
        }
        else {
            info2.classList.add("visible");
            imgTitle2.classList.add("invisible");
            imageBtn2.classList.add("dim");
            container.classList.add("container-extend");


            info1.classList.remove("visible");
            imgTitle1.classList.remove("invisible");
            imageBtn1.classList.remove("dim");

            info3.classList.remove("visible");
            imgTitle3.classList.remove("invisible");
            imageBtn3.classList.remove("dim");
        }
    });
    imageBtn3.addEventListener("click", function () {
        if (info3.classList.contains("visible")) {
            info3.classList.remove("visible");
            imgTitle3.classList.remove("invisible");
            imageBtn3.classList.remove("dim");
            container.classList.remove("container-extend");
        }
        else {
            info3.classList.add("visible");
            imgTitle3.classList.add("invisible");
            imageBtn3.classList.add("dim");
            container.classList.add("container-extend");

            info2.classList.remove("visible");
            imgTitle2.classList.remove("invisible");
            imageBtn2.classList.remove("dim");

            info1.classList.remove("visible");
            imgTitle1.classList.remove("invisible");
            imageBtn1.classList.remove("dim");
        }

    });
}

const hamburger = document.querySelector(".hamburger");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const mainNavbar = document.querySelector(".main-nav");
const mainNavbarLinks = document.querySelector(".main-nav-links");
//creates hamburger menu for mobile
function hamburgerMenu() {
    hamburger.addEventListener("click", function () {
        if (mainNavbar.classList.contains("main-nav-active")) {
            mainNavbar.classList.remove("main-nav-active");
            mainNavbarLinks.classList.remove("main-nav-links-active");
            bar1.classList.remove("rotate-down");
            bar2.classList.remove("hide");
            bar3.classList.remove("rotate-up");
        }
        else {
            mainNavbar.classList.add("main-nav-active");
            mainNavbarLinks.classList.add("main-nav-links-active");
            bar1.classList.add("rotate-down");
            bar2.classList.add("hide");
            bar3.classList.add("rotate-up");
        }
    });
}

//variables for navbar sticker
const navbar = document.querySelector(".subnav");
const tabBanner = document.querySelector(".current-tab");
const sticky = tabBanner.offsetTop;
//allows the sticky navbar to work
function navbarSticker() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky-subnav");
    }
    else {
        navbar.classList.remove("sticky-subnav");
    }
}

//function to swap between cards when on mobile
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const card4 = document.querySelector(".card4");
const cardBtn1 = document.querySelector(".card-btn1");
const cardBtn2 = document.querySelector(".card-btn2");
const cardBtn3 = document.querySelector(".card-btn3");
const cardBtn4 = document.querySelector(".card-btn4");
function cardSelector() {
    cardBtn1.addEventListener("click", function () {
        if (!cardBtn1.classList.contains("card-btn-active")) {
            cardBtn1.classList.add("card-btn-active");
            card1.classList.remove("card-hide");
            card2.classList.add("card-hide");
            card3.classList.add("card-hide");
            card4.classList.add("card-hide");
            cardBtn2.classList.remove("card-btn-active");
            cardBtn3.classList.remove("card-btn-active");
            cardBtn4.classList.remove("card-btn-active");
        }
    });
    cardBtn2.addEventListener("click", function () {
        if (!cardBtn2.classList.contains("card-btn-active")) {
            cardBtn2.classList.add("card-btn-active");
            card2.classList.remove("card-hide");
            card1.classList.add("card-hide");
            card3.classList.add("card-hide");
            card4.classList.add("card-hide");
            cardBtn1.classList.remove("card-btn-active");
            cardBtn3.classList.remove("card-btn-active");
            cardBtn4.classList.remove("card-btn-active");
        }
    });
    cardBtn3.addEventListener("click", function () {
        if (!cardBtn3.classList.contains("card-btn-active")) {
            cardBtn3.classList.add("card-btn-active");
            card3.classList.remove("card-hide");
            card2.classList.add("card-hide");
            card1.classList.add("card-hide");
            card4.classList.add("card-hide");
            cardBtn2.classList.remove("card-btn-active");
            cardBtn1.classList.remove("card-btn-active");
            cardBtn4.classList.remove("card-btn-active");
        }
    });
    cardBtn4.addEventListener("click", function () {
        if (!cardBtn4.classList.contains("card-btn-active")) {
            cardBtn4.classList.add("card-btn-active");
            card4.classList.remove("card-hide");
            card2.classList.add("card-hide");
            card3.classList.add("card-hide");
            card1.classList.add("card-hide");
            cardBtn2.classList.remove("card-btn-active");
            cardBtn3.classList.remove("card-btn-active");
            cardBtn1.classList.remove("card-btn-active");
        }
    });
}
cardSelector();
hoverImage();
window.onscroll = function () { navbarSticker() };
hamburgerMenu();