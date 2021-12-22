const inputBox = document.querySelector(".inputField input")
const addButton = document.querySelector(".inputField button")
const listOfCallBacks = document.querySelector(".listOfCallBacks")

let entryLocalStorage = localStorage.getItem("new entry");
let listCallBacks = [];
if (entryLocalStorage) {
    listCallBacks = JSON.parse(entryLocalStorage);
}
showCallBacks();

function showCallBacks() {
    let newLiTag = '';
    listCallBacks.forEach((element, index) => {
        newLiTag += `<li> ${element} <span onclick="deleteCallBack(${index})"> *remove* </span></li>`
    });
    listOfCallBacks.innerHTML = newLiTag;
}

addButton.onclick = ()=> {
    let text = inputBox.value;
    if (text !== "") {
        listCallBacks.push(text);
    }
    localStorage.setItem("new entry", JSON.stringify(listCallBacks));
    showCallBacks()
}

function deleteCallBack(index) {
    listCallBacks.splice(index, 1);
    localStorage.setItem("new entry", JSON.stringify(listCallBacks));
    showCallBacks()
}
