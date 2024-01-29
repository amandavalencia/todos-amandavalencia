import "/src/css/style.scss";

const toDoApp = document.getElementById("header");
const toDoHeader = document.createElement("h1");
toDoHeader.innerHTML="To-Do List &#x1F4DD";
toDoApp.appendChild(toDoHeader);

class Todo{ 
    checkbox;
    task;
    constructor(checkbox, task){
        this.task = task;
        this.checkbox = checkbox;
    }
}
const task1 = new Todo (true, "Sätta igång tvättmaskinen");
const task2 = new Todo (true,"Handla till maten");
const task3 = new Todo (true,"Hämta nycklarna på kontoret");
const task4 = new Todo (true,"Baka en tårta till Peter");

let toDoList = [task1, task2, task3, task4];
let haveDone = [];

const listContainer = document.getElementById("tasks__toDo")
const listDoneContainer = document.getElementById("tasks__done");
const toDoContainer = document.createElement("ul");

if (localStorage.getItem("toDos")){
    toDoList = JSON.parse(localStorage.getItem("toDos"));
}
if (localStorage.getItem("arrayDone")){
    haveDone = JSON.parse(localStorage.getItem("arrayDone"));
}


function createHtmlForToDo(){
toDoContainer.innerHTML="";
localStorage.setItem("toDos", JSON.stringify(toDoList));

for(let i = 0; i < toDoList.length; i++){
    const toDos = document.createElement("li");

    toDoContainer.className = "toDoContainer";
    toDos.innerHTML= toDoList[i].task;

    
    toDoContainer.appendChild(toDos);
    listContainer.appendChild(toDoContainer);

    toDos.addEventListener("click", () => {
        haveDone.push(toDoList[i]);
        toDoList.splice(i,1);
        createHtmlForToDo()
        createHtmlForDone() 
        })
}
}
createHtmlForToDo()


const doneContainer = document.createElement("ul");
function createHtmlForDone(){  
    doneContainer.innerHTML="";
    localStorage.setItem("arrayDone", JSON.stringify(haveDone));
    for(let i = 0; i < haveDone.length; i++){
        const done = document.createElement("li");
        doneContainer.className = "doneContainer";
        done.innerHTML = haveDone[i].task;

        doneContainer.appendChild(done);
        listDoneContainer.appendChild(doneContainer);

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "deleteBtn";
        deleteBtn.innerHTML = "x"
        done.appendChild(deleteBtn);        
        deleteBtn.addEventListener("click", ()=>{
            haveDone.splice(i,1);
            createHtmlForDone();
            createHtmlForToDo()
        })


    } 
}
createHtmlForDone();


// skapa ny task  
const addToDoBtn = document.getElementById("btn");
const inputBox = document.getElementById("inputBox");

addToDoBtn.addEventListener("click", ()=>{
    const inputValue = inputBox.value
    const newTask = new Todo (true, inputValue) 
    toDoList.push(newTask)
    createHtmlForToDo()
    
})