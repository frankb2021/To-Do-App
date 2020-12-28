let addButton = document.querySelector('.add-todo');
let emptyList = document.querySelector('.container1')

addButton.addEventListener('click', function(event) {

    event.preventDefault();

    let newtask = document.createElement('li');
    let node = document.createTextNode('vuur');
    newtask.appendChild(node);
    document.querySelector('.ul-list').appendChild(newtask);
})