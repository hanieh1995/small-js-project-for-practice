let leftBtn = document.querySelector("#left");
let rigthBtn = document.querySelector("#rigth");
let container = document.querySelector("#container");
let index = 0;
let imgs = ["11", "12", "13", "14", "15"];

window.addEventListener("load", () => {
    container.style.backgroundImage = "url('./img/" + imgs[index] + ".jpg')";
})

leftBtn.addEventListener("click", () => {
    index == 0 ? index = imgs.length - 1 : index--;
    container.style.backgroundImage = "url('./img/" + imgs[index] + ".jpg')";
})

rigthBtn.addEventListener("click", () => {
    index == imgs.length - 1 ? index = 0 : index++;
    container.style.backgroundImage = "url('./img/" + imgs[index] + ".jpg')";
})