const addFormTodo = document.querySelector('.add');
const ul = document.querySelector('.todos');

//function to append li to the ul list
function addTodo(todo) {
    ul.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
};
//Add submit event to the form
addFormTodo.addEventListener('submit', e => {
    e.preventDefault(); // stop built-in  default redirect of browser


    const todo = addFormTodo.add.value.trim(); // trim down the space 

    if (todo.length) { // check if blank input
        addTodo(todo);
        addFormTodo.reset();
    };
});

//Add click event to the form. Find the class delete to romve the li 
ul.addEventListener('click', e => {
    // console.log(e.target.classList);//e.target will track the click in the form
    if (e.target.classList.contains('delete')) {//classList to find the list of class of that element. contain will return boolean
        e.target.parentElement.remove();           //if true find the parent of i which is li    
    };
});
