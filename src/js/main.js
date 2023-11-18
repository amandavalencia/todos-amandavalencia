import "/src/css/style.scss";


const toDoList = ["Sätta igång tvättmaskinen","Handla till maten","Hämta nycklarna på kontoret","Baka en tårta till Peter",];
const haveDone = [];

const listContainer = document.getElementById("section#ToDo");
const listDoneContainer = document.getElementById("section#Done");
const toDoContainer = document.createElement("ul");
for(let i = 0; i < toDoList.length; i++){
    const toDos = document.createElement("li");
   

    toDoContainer.className = "toDoContainer";
    toDos.innerHTML= toDoList[i];
    
    toDoContainer.appendChild(toDos);
    listContainer.appendChild(toDoContainer);

    toDos.addEventListener("click", () => {
        haveDone.push(toDoList[i]);
        console.log("klart: " +haveDone);
        createHtmlForDone()
        })
}
const doneContainer = document.createElement("ul");
function createHtmlForDone(){
    doneContainer.innerHTML="";
    for(let i = 0; i < haveDone.length; i++){
        const done = document.createElement("li");
        

        doneContainer.className = "doneContainer";
        done.innerHTML = haveDone[i];

        doneContainer.appendChild(done);
        listDoneContainer.appendChild(doneContainer);
    }
}

