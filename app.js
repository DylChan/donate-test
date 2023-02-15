//general rule of thumb seems to be that its best to have one JS file so there is less requests. However, while developing it is nice to have a bunch of smaller files to stay organized

//variables for the hoverImage function
const imageBtn1 = document.getElementById("image-btn1");
const imageBtn2 = document.getElementById("image-btn2");
const imageBtn3 = document.getElementById("image-btn3");
const info1 = document.querySelector(".info1");
const info2 = document.querySelector(".info2");
const info3 = document.querySelector(".info3");
const imgTitle1 = document.querySelector(".img-title1");
const imgTitle2 = document.querySelector(".img-title2");
const imgTitle3 = document.querySelector(".img-title3");
function hoverImage(){
//each button toggles the image to show text below it one at a time:
imageBtn1.addEventListener("click", function(){
    if(info1.classList.contains("visible")){
        info1.classList.remove("visible");
        imgTitle1.classList.remove("invisible");
        imageBtn1.classList.remove("dim");
    }
    else{
        //makes first image visible while making subititle move down creating illusion that its moving down
        info1.classList.add("visible");
        imgTitle1.classList.add("invisible");
        imageBtn1.classList.add("dim");

        info2.classList.remove("visible");
        imgTitle2.classList.remove("invisible");
        imageBtn2.classList.remove("dim");

        info3.classList.remove("visible");
        imgTitle3.classList.remove("invisible");
        imageBtn3.classList.remove("dim");
    }
});
imageBtn2.addEventListener("click", function(){
    if(info2.classList.contains("visible")){
        info2.classList.remove("visible");
        imgTitle2.classList.remove("invisible");
        imageBtn2.classList.remove("dim");
    }
    else{
        info2.classList.add("visible");
        imgTitle2.classList.add("invisible");
        imageBtn2.classList.add("dim");

        info1.classList.remove("visible");
        imgTitle1.classList.remove("invisible");
        imageBtn1.classList.remove("dim");

        info3.classList.remove("visible");
        imgTitle3.classList.remove("invisible");
        imageBtn3.classList.remove("dim");
    }
});
imageBtn3.addEventListener("click", function(){
    if(info3.classList.contains("visible")){
        info3.classList.remove("visible");
        imgTitle3.classList.remove("invisible");
        imageBtn3.classList.remove("dim");
    }
    else{
        info3.classList.add("visible");
        imgTitle3.classList.add("invisible");
        imageBtn3.classList.add("dim");

        info2.classList.remove("visible");
        imgTitle2.classList.remove("invisible");
        imageBtn2.classList.remove("dim");

        info1.classList.remove("visible");
        imgTitle1.classList.remove("invisible");
        imageBtn1.classList.remove("dim");
    }

});
}


//variables for navbar sticker
const navbar = document.querySelector(".subnav");
const tabBanner = document.querySelector(".current-tab");
const sticky = tabBanner.offsetTop;
function navbarSticker(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky-subnav");
    }
    else{
        navbar.classList.remove("sticky-subnav");
    }
    console.log(sticky);
}
hoverImage();
window.onscroll=function(){navbarSticker()};