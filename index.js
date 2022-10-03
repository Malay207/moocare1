
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
let animal = document.getElementsByClassName('animal');

document.getElementById("btn1").addEventListener("click", function () {
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
class contact {
    constructor(name, email, message) {
        this.name = name;
        this.email = email;
        this.message = message;
    }
}
class display {

    show(type, display) {
        let display2 = document.getElementById("display");
        let text;
        if (type === "message succesfuly sent.") {
            text = "message succesfuly sent.";
        }
        else {
            text = "something went wrong!";
        }
        display2.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>${text}</strong> ${display}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
        setTimeout(function () {
            display2.innerHTML = ''
        }, 3000);
    }
    ValidateEmail() {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(contact.email.value)) {
            return true;
        }

    }
    validate(contact) {
        if (contact.name.length < 3 || contact.name.length > 20) {
            return false;
        }
        else if (contact.email.length < 3 || contact.email.length > 20 && !this.ValidateEmail()) {
            return false;
        }
        else if (contact.message.length < 5) {
            return false;

        }
        else {
            return true;
        }
    }

};
let btn = document.getElementsByClassName("sendbtn")[0];
btn.addEventListener("click", function (e) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("mail").value;
    let message = document.getElementById("message").value;
    let contact1 = new contact(name, email, message);
    let display1 = new display();
    if (name == "" || email == "" || message == "") {

        display1.show("Error!", "Please fill all the details");
        document.getElementsByClassName("alert")[0].style.backgroundColor = "#e05e5e";
        document.getElementsByClassName("alert")[0].style.borderLeftColor = "red";
    }
    else if (display1.validate(contact1)) {
        display1.show("message succesfuly sent.", "message succesfuly sent");

    }
    else {
        display1.show("something went wrong!", "something went wrong!");
        document.getElementsByClassName("alert")[0].style.backgroundColor = "#e05e5e";
        document.getElementsByClassName("alert")[0].style.borderLeftColor = "red";

    }
    e.preventDefault();
});
