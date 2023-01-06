let input = document.querySelector("input");
let addBtn = document.querySelector(".addBtn");
let list = document.querySelector(".list");
let clearBtn = document.querySelector(".clearBtn");
let alarm = document.querySelector(".alarm");

let itemsList = JSON.parse(localStorage.getItem("itemsList")) || [];

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-times-circle")) {
    let index = Array.from(list.children).findIndex(
      (item) => item == e.target.parentNode
    );
    itemsList.splice(index, 1);
    e.target.parentNode.remove();
  }
  if (e.target.classList.contains("fa-check-circle")) {
    e.target.parentNode.firstChild.classList.toggle("done-item");
    e.target.classList.toggle("done");
    if (e.target.classList.contains("done")) {
      let index = Array.from(list.children).findIndex(
        (item) => item == e.target.parentNode
      );
      itemsList[index].condition = true;
    }
  }
  if (e.target.classList.contains("fa-edit")) {
    input.value = e.target.parentNode.firstChild.innerText;
    e.target.parentNode.remove();
    let index = Array.from(list.children).findIndex(
      (item) => item == e.target.parentNode
    );
    itemsList[index].splice(index, 1);
  }
  localStorage.setItem("itemsList", JSON.stringify(itemsList));
});

addBtn.addEventListener("click", (e) => {
  if (!input.value) {
    setTimeout(() => {
      alarm.style.display = "none";
    }, 3000);
    alarm.style.display = "block";
  } else {
    let listItemsInfo = new ListItemsInfo(input.value, false);
    itemsList.push(listItemsInfo);
    localStorage.setItem("itemsList", JSON.stringify(itemsList));
    list.innerHTML = "";
    itemsList.forEach((element) => {
      list.appendChild(createListItem(element.input, element.condition));
    });
    input.value = "";
  }
});

if (itemsList.length != 0) {
  list.innerHTML = "";
  itemsList.forEach((element) => {
    list.appendChild(createListItem(element.input, element.condition));
  });
}

function createListItem(inputValue, condition) {
  let li = document.createElement("li");
  let title = document.createElement("span");
  let done = document.createElement("i");
  let edit = document.createElement("i");
  let remove = document.createElement("i");

  if (condition) {
    done.classList.add("done");
    title.classList.add("done-item");
  }

  title.classList.add("title");
  title.innerText = inputValue;

  done.classList.add("fa-check-circle" , "fa");
  edit.classList.add("fa-edit" , "fa");
  remove.classList.add("fa-times-circle" , "fa");

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
  itemsList = [];
  localStorage.clear();
});

function ListItemsInfo(input, condition) {
  this.input = input;
  this.condition = condition;
}
