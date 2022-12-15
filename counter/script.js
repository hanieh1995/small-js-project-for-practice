let counter = document.querySelector("#number");
let decreas = document.querySelector("#decreas");
let increas = document.querySelector("#increas");




decreas.addEventListener("click", () => {
    counter.innerHTML--;
    if (counter.innerHTML < 0 ) {
        counter.classList.remove("green");
        counter.classList.add("red");
    }else if(counter.innerHTML == 0){
        counter.classList.remove("green");
    }
})

increas.addEventListener("click", () => {
    counter.innerHTML++;
    if (counter.innerHTML > 0) {
        counter.classList.remove("red");
        counter.classList.add("green");
    }else if(counter.innerHTML == 0){
        counter.classList.remove("red");
    }
})