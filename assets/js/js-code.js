const form = document.querySelector('form');
const list = document.querySelector('ol');

let todoArray = [];
let counter = 0;

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const {todo: {value: text}} = event.target;
    if (text){
        todoArray.push({
            text: text,
            id: counter++
        });
    }
    updateView(todoArray);
});



function updateView(todoArray) {
    const liArray = todoArray.map(todoObj => {
        const li = document.createElement('li');
        li.append(todoObj.text);
        li.dataset.id = todoObj.id;
        const button = document.createElement('button');
        button.textContent = 'x';
        button.addEventListener('click', deleteButtonHandler)
        li.append(button);
        return li;
    });
    list.replaceChildren(...liArray);
}


function deleteButtonHandler(event) {
  const parentLi = event.target.parentElement;
  todoArray = todoArray.filter(elem => elem.id !== Number(parentLi.dataset.id));
  updateView(todoArray);
}