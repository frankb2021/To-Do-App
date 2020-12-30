
let addButton = document.querySelector('.add-todo');
let unlist = document.querySelector('.ul-list');
let inputUser = document.querySelector('.input-task');

addButton.addEventListener('click',function(event){
    event.preventDefault();
    

    let newLi = document.createElement('li');
    let node = document.querySelector('.input-task').value;
    
    newLi.innerHTML = node;
    unlist.appendChild(newLi);
    newLi.classList.add('newItemsMarkup')
})