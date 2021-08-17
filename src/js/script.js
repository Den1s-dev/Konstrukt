"use strict"

window.onscroll = function() {myFunction()};

let menu = document. getElementsByClassName("menu");

let nav = menu.offsetTop;

function myFunction() {
    if (window.pageYOffset >= nav) {
        menu.classList.add("nav")
    }else {
        menu.classList.remove("nav");
    }
}