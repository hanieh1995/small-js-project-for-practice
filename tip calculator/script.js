let inputs = document.querySelectorAll("input");
let satisfaction = document.querySelector("select");
let alertText = document.querySelectorAll("p");
let alarm = document.querySelector(".alarm");
let result = document.querySelector(".result");
let waiting = document.querySelector(".loading");

let bills;
let numbers;





inputs.forEach(input => {

    if (input.className == "bill") {
        input.addEventListener("input", () => {
            bills = input.value;
        })

    } else if (input.className == "numbers") {
        input.addEventListener("input", () => {
            numbers = input.value;
        })

    } else {
        input.addEventListener("click", (e) => {
            e.preventDefault();
            calculate();
        })
    }
})

function calculate() {
    if (!bills) {
        alertText[0].style.display = "block";
        alarm.style.display = "block";
    }
    if (!numbers){
        alertText[1].style.display = "block";
        alarm.style.display = "block";
    }
    if(satisfaction.value == "0"){
        alertText[2].style.display = "block";
        alarm.style.display = "block";
    }

    if(bills && numbers && satisfaction.value != 0){
        waiting.style.display = "block";

        setTimeout(() => {
            let  total =  bills * 1 + bills * satisfaction.value / 100;
            result.style.display = "block";
            waiting.style.display = "none";
            result.children[0].innerText = `Tip Amount $ ${bills * satisfaction.value * 100}` ;
            result.children[1].innerText = `Total Amount $ ${total}`;
            result.children[2].innerText = `Each Person Owes $ ${total / numbers}`;
            setTimeout(timeOuteResult,3000);  
        }, (3000));
    }
    setTimeout(timeOuteAlert,3000);
}

function timeOuteAlert(){
    alertText.forEach(element =>{
        element.style.display="none";
    })
    alarm.style.display = "none";
}

function timeOuteResult(){
    result.style.display = "none";
    inputs[0].value = "";
    inputs[1].value = "";
    numbers = "";
    bills = "";
    satisfaction.value = "0";
}