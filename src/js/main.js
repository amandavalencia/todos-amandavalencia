import "/src/css/style.scss";

const toDoApp = document.getElementById("toDoApp");
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

const toDoList = [task1, task2, task3, task4];
const haveDone = [];

const listContainer = document.getElementById("section__ToDo")
const listDoneContainer = document.getElementById("section__Done");
const toDoContainer = document.createElement("ul");

function createHtmlForToDo(){
toDoContainer.innerHTML="";
for(let i = 0; i < toDoList.length; i++){
    const toDos = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    toDos.appendChild(checkbox);

    toDoContainer.className = "toDoContainer";
    toDos.innerHTML= toDoList[i].task;
    
    toDoContainer.appendChild(toDos);
    listContainer.appendChild(toDoContainer);

    toDos.addEventListener("click", () => {
        haveDone.push(toDoList[i]);
        console.log("klart: " +haveDone);
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
    for(let i = 0; i < haveDone.length; i++){
        const done = document.createElement("li");

        doneContainer.className = "doneContainer";
        done.innerHTML = haveDone[i].task;

        doneContainer.appendChild(done);
        listDoneContainer.appendChild(doneContainer);

        done.addEventListener("click", ()=>{
            toDoList.push(haveDone[i]);
            haveDone.splice(i,1);
           
            createHtmlForToDo();
            createHtmlForDone();
        })
    }
}