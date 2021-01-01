// slectors 

const todoInput = document.querySelector('.to-do-input');
const todoButton = document.querySelector('.to-do-button');
const todoList = document.querySelector('.to-do-list');


// event


todoList.addEventListener('click', deletecheck);
todoButton.addEventListener('click', function(event){
event.preventDefault();

let newdiv  = document.createElement('div'); // creatre new div
let deleteButton = document.createElement('button'); // create new button
deleteButton.textContent  ="delete";
deleteButton.classList  ="deleteitem";
let inputval = todoInput.value;
newdiv.innerHTML = inputval;
newdiv.className = "newTodo"; // give div class name newdiv
todoList.appendChild(newdiv); // append new div to class to-do-list
newdiv.appendChild(deleteButton); // append new button to class to-do-list

if(todoInput){
    todoInput.value = "";
}

})

 function deletecheck(e){
    const item = e.target;
    
if(item.classList[0] === "deleteitem"){
    const todo = item.parentElement;
    todo.remove();

 

 }
}

    
 




