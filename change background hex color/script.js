const body = document.querySelector("body");
const btn = document.querySelector("#btn");
const hexCode = document.querySelector("#hex-code")

let colorHexLetter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

function backGroundChanger() {
    let hexColor = "";
    for (i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * colorHexLetter.length);
        hexColor += colorHexLetter[index];
    }

    body.style.backgroundColor = "#" + hexColor;
    hexCode.innerText = "#" +  hexColor;
}

btn.addEventListener("click", function () {
    backGroundChanger();
});
window.addEventListener("load", backGroundChanger());