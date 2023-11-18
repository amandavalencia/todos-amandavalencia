// export function createHtmlForToDo(toDoList){
//     const toDos = document.createElement("p");
//     const toDoContainer = document.createElement("div");

//     toDoContainer.className = "toDoContainer";
//     toDos.innerHTML= toDoList;
    
//     toDoContainer.appendChild(toDos);
//     listContainer.appendChild(toDoContainer);

//     toDoContainer.addEventListener("click", () => {
//         haveDone.push(toDoList);
//         console.log(haveDone);
//         for(let i = 0; i < haveDone.length; i++){
//             const done = document.createElement("p");
//             const doneContainer = document.createElement("div");

//             doneContainer.className = "doneContainer";
//             done.innerHTML = haveDone[i];

//             doneContainer.appendChild(done);
//             listDoneContainer.appendChild(doneContainer);
//         }
//     })
// }
// const listContainer = document.getElementById("section#ToDo");
// const listDoneContainer = document.getElementById("section#Done");


// export function createHtmlForDone(haveDone){
//     const done = document.createElement("p");
//     const doneContainer = document.createElement("div");

//     doneContainer.className = "doneContainer";
//     done.innerHTML = haveDone;

//     doneContainer.appendChild(done);
//     listDoneContainer.appendChild(doneContainer);
// }


// export function createHtmlForDone(){
//     listDoneContainer.innerHTML="";
//     for(let i = 0; i < haveDone.length; i++){
//         const done = document.createElement("p");
//         const doneContainer = document.createElement("div");

//         doneContainer.className = "doneContainer";
//         done.innerHTML = haveDone[i];

//         doneContainer.appendChild(done);
//         listDoneContainer.appendChild(doneContainer);
//     }
// }