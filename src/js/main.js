import "/src/css/style.scss";


const toDoList = ["Sätta igång tvättmaskinen","Handla till maten","Hämta nycklarna på kontoret","Baka en tårta till Peter",];
const haveDone = [];

const listContainer = document.getElementById("section#ToDo");
const listDoneContainer = document.getElementById("section#Done");
const toDoContainer = document.createElement("ul");

function createHtmlForToDo(){
toDoContainer.innerHTML="";
for(let i = 0; i < toDoList.length; i++){
    const toDos = document.createElement("li");
   

    toDoContainer.className = "toDoContainer";
    toDos.innerHTML= toDoList[i];
    
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
createHtmlForToDo();

const doneContainer = document.createElement("ul");

function createHtmlForDone(){
    doneContainer.innerHTML="";
    for(let i = 0; i < haveDone.length; i++){
        const done = document.createElement("li");

        doneContainer.className = "doneContainer";
        done.innerHTML = haveDone[i];

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

// function createHtmlForToDo(){
//     toDoContainer.innerHTML="";
//     for(let i = 0; i<toDoList.length;i++){

//     }
// }