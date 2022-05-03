let delIcon = document.querySelector(".fa-xmark");
let delBtn = document.querySelector(".delBtn");
let addBtn = document.querySelector("#liveToastBtn");
let list = document.querySelector("#list");

let alertSuccess = document.querySelector("#snackbar");

// add event listeners
addBtn.addEventListener("click", addFun);
list.addEventListener("click", funDel);

// ---------------

function addFun(e) {
  if (document.querySelector("#task").value != "") {
    e.preventDefault();
    console.log("ekleye basildi");
    let listItem = document.createElement("li");
    listItem.innerText = document.querySelector("#task").value;
    listItem.classList.add("listItem");

    //   create button
    let add = document.createElement("button");
    add.classList.add("delBtn");

    //icon

    let icon = document.createElement("i");
    icon.classList.add("fa-solid");
    icon.classList.add("fa-xmark");
    add.appendChild(icon);

    listItem.appendChild(add);

    list.appendChild(listItem);
    document.querySelector("#task").value = "";

    ////////////////////////////////////////
    // snacbar start
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.innerHTML = "Listeye Eklendi";
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 2000);
    //snacbar end
    //////////////////////////////////////////////////////////////////
  } else {
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.innerHTML = "Bos girmeyin";
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 2000);
  }
}

function funDel(e) {
  e.preventDefault();

  const item = e.target;
  console.log(item.parentElement);
  if (item.classList[0] === "fa-solid") {
    const todo = item.parentElement.parentElement;
    todo.remove();
  }

  if (item.classList[0] === "delBtn") {
    const todo = item.parentElement;
    todo.remove();
  }

  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.innerHTML = "Görev silindi!";
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 2000);
}

// 1. arkadan yiyorum
// taner kim?

// headshotçı ismail
// en boktan adamı kaldırdın
// loading ekranındayım
// leave'ye basıyorum gitmiyor
