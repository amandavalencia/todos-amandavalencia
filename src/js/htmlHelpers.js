export function createHtmlForToDo(toDoList){
    const toDos = document.createElement("p");
    const toDoContainer = document.createElement("div");

    toDoContainer.className = "toDoContainer";
    toDos.innerHTML= toDoList;
    
    toDoContainer.appendChild(toDos);
    listContainer.appendChild(toDoContainer);
}
const listContainer = document.getElementById("section#ToDo");