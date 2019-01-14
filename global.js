"use strict";

var window, document;

window.onload = function () {
    var mBtn = document.getElementById("magicBtn");
    var myText = document.getElementById("text");

    mBtn.onclick = function () {
        myText.style.color = "red";
    }
}