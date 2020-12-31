
let addButton = document.querySelector('.add-todo');
let unlist = document.querySelector('.ul-list');
let inputUser = document.querySelector('.input-task');

addButton.addEventListener('click',function(event, event2){
    event.preventDefault();
    
    // add input value


    
    let newLi = document.createElement('li'); // create li
    let node = document.querySelector('.input-task').value; // target input value from input 
    newLi.innerHTML = node; // the value of newli innerhtml = node value input
    unlist.appendChild(newLi); // add to new li
    newLi.classList.add('newItemsMarkup'); // add style to newli
    console.log(unlist);


    // delete button

    let deleteButton =  document.createElement('button'); // creat button
    deleteButton.className = "delete"; // create class for button
    deleteButton.innerHTML = "DELETE"; // create text name for button 
    
    newLi.appendChild(deleteButton);
    

    // delete element onlcick
    
   

})


