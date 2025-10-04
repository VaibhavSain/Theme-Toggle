const body = document.querySelector("body");
const toggle = document.querySelector(".toggle");
const swi = document.querySelector(".swi");

let theme = "light";

swi.addEventListener("click", () => {
    if (theme == "light") {
        toggle.style.backgroundColor = "black";
        toggle.style.left = "82px";
        body.style.backgroundColor = "black";
        theme = "dark";
    }
    else {
        toggle.style.backgroundColor = "white";
        toggle.style.left = "5px";
        body.style.backgroundColor = "white";
        theme = "light";
    }
});