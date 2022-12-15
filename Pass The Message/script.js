let inputvalue = document.querySelector("#text");
let submitbtn = document.querySelector("#submit-btn");
let message = document.querySelector("#message");
let alert = document.querySelector("#alert");


submitbtn.addEventListener("click", () => {
    addMessage();
})

inputvalue.addEventListener("keydown", (e) => {
    if (e.code == "Enter") {
        addMessage();
    }
})

function addMessage() {
    if (inputvalue.value == "") {
        alert.classList.add("showalert");
        setTimeout(removeClass, 2000);
    } else {
        message.innerHTML = inputvalue.value;
        inputvalue.value = "";
    }
}

function removeClass(){
    alert.classList.remove("showalert");
}