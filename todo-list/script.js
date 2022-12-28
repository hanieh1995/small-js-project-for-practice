let input = document.querySelector("input");
let addBtn = document.querySelector(".addBtn");
let list = document.querySelector(".list");
let clearBtn = document.querySelector(".clearBtn");
let alarm = document.querySelector(".alarm");

list.addEventListener("click" , (e)=>{
  if (e.target.className == "fa fa-times-circle") {
    e.target.parentNode.remove();
  }
  if(e.target.className == "fa fa-check-circle"){
    e.target.parentNode.firstChild.classList.toggle("done-item");
    e.target.classList.toggle("done");
  }
  if(e.target.className == "fa fa-edit"){
    input.value = e.target.parentNode.firstChild.innerText;
       e.target.parentNode.remove();
  }
})

addBtn.addEventListener("click", (e) => {
  if (!input.value) {
    setTimeout(() => {
      alarm.style.display = "none";
    }, 3000);
    alarm.style.display = "block";
  } else {
    list.appendChild(createListItem(input.value));
    input.value = "";
  }
});

function createListItem(inputValue) {
  let li = document.createElement("li");
  let title = document.createElement("span");
  let done = document.createElement("i");
  let edit = document.createElement("i");
  let remove = document.createElement("i");

  title.className = "title";
  title.innerText = inputValue;

  done.className = "fa fa-check-circle";
  edit.className = "fa fa-edit";
  remove.className = "fa fa-times-circle";

  li.appendChild(title);
  li.appendChild(done);
  li.appendChild(edit);
  li.appendChild(remove);

  return li;
}

clearBtn.addEventListener("click", () => {
  Array.from(list.children).forEach((element) => {
    element.remove();
  });
});
