const body = document.querySelector("body");
const btn = document.querySelector("#btn");

let colors = ["pink", "purple", "red", "yellow", "green", "blue"];

function backGroundChanger() {
    let index = Math.floor(Math.random() * colors.length);
    while (body.style.backgroundColor == colors[index]) {
        index = Math.floor(Math.random() * colors.length);
    }
    body.style.backgroundColor = colors[index];
}

btn.addEventListener("click", function () {
    backGroundChanger();
});
window.addEventListener("load", backGroundChanger());