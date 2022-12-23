let screen = document.querySelector(".screen");
let btns = document.querySelectorAll(".btn");
let equal = document.querySelector(".btn-equal");
let clear = document.querySelector(".btn-clear");

clear.addEventListener("click" , ()=>{
    screen.value = "";
})

let dotoperaitor = true;

btns.forEach(btn =>{
    btn.addEventListener("click" , (e)=>{
        if( screen.value == "Please Enter Somthing"){
            screen.value = "";
        }
        if((e.target.innerText == "*" || e.target.innerText =="/" || e.target.innerText =="-" || e.target.innerText =="+" ) ){
            dotoperaitor = true;
            if((screen.value.slice(-1) == "*" || screen.value.slice(-1) == "/" || screen.value.slice(-1) == "+" || screen.value.slice(-1) == "-" || screen.value.slice(-1) == ".")){
                screen.value = screen.value.slice(0,-1) ;
            }
        }
         
        if(e.target.innerText == "." && dotoperaitor){
            dotoperaitor = false;
            screen.value += e.target.innerText;
        }else if (e.target.innerText == "." && !dotoperaitor){
            screen.value += "";
        }else if(e.target.innerText != "."){
            screen.value += e.target.innerText;
        }
        

    })
})

equal.addEventListener("click" , ()=>{
    if(screen.value[0] == "*" || screen.value[0] == "/" || screen.value[0] == "+" || screen.value[0] == "*"){
        screen.value = "0" + screen.value;
    }
    if(screen.value == ""){
        screen.value = "Please Enter Somthing";
    }else{
        screen.value = eval(screen.value);
    }
})