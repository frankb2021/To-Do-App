// slectors 

const todoInput = document.querySelector('.to-do-input');
const todoButton = document.querySelector('.to-do-button');
const todoList = document.querySelector('.to-do-list');


// event


todoButton.addEventListener('click', function(event){
event.preventDefault();

let newdiv  = document.createElement('div'); // creatre new div
let deleteButton = document.createElement('button'); // create new button
let inputval = todoInput.value;
newdiv.innerHTML = inputval;
newdiv.className = "newTodo"; // give div class name newdiv
todoList.appendChild(newdiv); // append new div to class to-do-list
todoList.appendChild(deleteButton); // append new button to class to-do-list

if(todoInput){
    todoInput.value = "";
}

})