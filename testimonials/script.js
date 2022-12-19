let image = document.querySelector("#img");
let nameInfo = document.querySelector("#name");
let leftBtn = document.querySelector("#left-btn");
let rightBtn = document.querySelector("#right-btn");
let des = document.querySelector(".des");
let index = 0;

let datas = [
    { image: "./img/1.webp", name: "SANDY", moreInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, doloribus repellendus eligendi unde accusantium, nam sit, corporis at aliquid nulla temporibus tempora! Sunt, nulla quos. Ipsa iure eaque commodi magnam." },
    { image: "./img/4.webp", name: "SERA", moreInfo: "1245Lorem ipsnsectetur adipisicing elit. Mollitia, doloribus repellendus eligendi unde accusantium, nam sit, corporis at aliquid nulla temporibus tempora! Sunt, nulla quos. Ipsa iure eaque commodi magnam." },
    { image: "./img/3.jpg", name: "SHOAN", moreInfo: "5487Lorem ipsum dolor sit amet consectets repellendus eligendi unde accusantium, nam sit, corporis at aliquid nulla temporibus tempora! Sunt, nulla quos. Ipsa iure eaque commodi magnam." },
    { image: "./img/2.png", name: "TARA", moreInfo: "6259Lorem ipsum dolr adipisicing elit. Mollitia, doloribus repellendus eligendi unde accusantium, nam sit, corporis at aliquid nulla temporibus tempora! Sunt, nulla quos. Ipsa iure eaque commodi magnam." },
]

window.addEventListener("load", () => {
    setInfo(datas, index);
})

leftBtn.addEventListener("click", () => {
    index == 0 ? index = datas.length - 1 : index--;
    setInfo(datas, index);
})

rightBtn.addEventListener("click", () => {
    index == datas.length - 1 ? index = 0 : index++;
    setInfo(datas, index);
})

function setInfo(datas, index) {
    image.src = datas[index].image;
    nameInfo.innerHTML = datas[index].name;
    des.innerHTML = datas[index].moreInfo;
}