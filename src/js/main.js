import { createHtmlForToDo } from "./htmlHelpers";
import "/src/css/style.scss";
const toDoList = ["Sätta igång tvättmaskinen","Handla till maten","Hämta nycklarna på kontoret","Baka en tårta till Peter",];

for(let i = 0; i < toDoList.length; i++){
 createHtmlForToDo(toDoList[i]);
}

