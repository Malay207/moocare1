
let img = document.querySelector(".slider_img");
// let img1 = document.querySelector(".slider_img img");

// const imgSize = img1[0].clientWidth;
let translate = 0;
setInterval(() => {
    if (translate >= 0 && translate < 200) {
        translate += 100;
    }
    // else if (img[translate].classList.contains("last")) {
    //     img.style.transition = "none";
    //     translate = translate - 200;
    //     img.style.transform = `translateX(-${translate}%)`;
    // }



    else {
        translate = 0;
    }
    img.style.transition = "1s";
    img.style.transform = `translateX(-${translate}%)`;


}, 2000);
function right() {
    if (translate < 200) {
        translate += 100;
        img.style.transition = "1s";
        img.style.transform = `translateX(-${translate}%)`;
    }
}
function left() {
    if (translate >= 0) {
        translate -= 100;
        img.style.transition = "1s";
        img.style.transform = `translateX(-${translate}%)`;
    }
}
// img.addEventListener("transitionend", () => {
//     if (img[translate].classList.contains("first")) {
//         img.style.transition = "none";
//         translate = img.length - 2;
//         img.style.transform = `translateX(-${translate}%)`;
//     }
//     if (img[translate].classList.contains("last")) {
//         img.style.transition = "none";
//         translate = img.length - translate;
//         img.style.transform = `translateX(-${translate}%)`;

//     }

// });
function chk() {

    let checkboxes = document.getElementsByClassName('animal');
    let count = 0;
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked == true) {
            count++;
        }
    }
    if (count > 1) {
        document.getElementById("notvalid").innerHTML = "**You can only choose one animal at a time";
        return false;
    }
    else {
        document.getElementById("notvalid").innerHTML = ""
        return true;
    }
}
let xhr = new XMLHttpRequest();
// let cow = document.getElementById("cow");
// let dog = document.getElementById("dog");
// let goat = document.getElementById("goat");
// let buffalos = document.getElementById("buffalos");
let animal = document.getElementsByClassName('animal');

document.getElementById("btn").addEventListener("click", function () {
    let checkboxes = document.getElementsByClassName('animal');
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked == true) {
            if (i == 0) {
                xhr.open("GET", "cow.html", true);
            }
            else if (i == 1) {
                xhr.open("GET", "buffalos.html", true);
            }
            else if (i == 2) {
                xhr.open("GET", "goats.html", true);
            }
            else {
                xhr.open("GET", "dog.html", true);
            }

        }

    }

    xhr.onload = function () {
        if (xhr.status == 200) {

            document.getElementById("services").innerHTML = xhr.responseText;
        }
        else {
            document.getElementById("services").innerHTML = "Error";
        }
    }
    xhr.send();
});
