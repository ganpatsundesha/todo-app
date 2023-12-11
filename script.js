let toDoList = [];
let localData = localStorage.getItem("todolist")
let readTodo = JSON.parse(localData)
toDoList = readTodo
displayItem()

function addToDo() {
    let inputElement = document.querySelector("#todo-input");
    let dateElement = document.querySelector("#todo-date");
    let todoItem = inputElement.value;
    let dueDate = dateElement.value;
    if (todoItem == '') {
        alert("Please add Your Todo")
    }
    else if (dueDate == '') {
        alert("Please select Date")
    }
    else {
        toDoList.push({ item: todoItem, dueDate: dueDate });
        inputElement.value = '';
        dateElement.value = '';
        displayItem();
    }
};

function displayItem() {
    let displayElement = document.querySelector("#todoContainer");
    let todoHtml = '';
    for (let i = 0; i < toDoList.length; i++) {
        let { item, dueDate } = toDoList[i]
        todoHtml += `
        <div class="todo-item">
            <span>${item}</span>
            <div class='d-flex'>
                <span>${dueDate}</span>
                <button onclick="toDoList.splice(${i}, 1); displayItem();">Delete</button>
            </div>
        </div>`
    }
    displayElement.innerHTML = todoHtml;
    let local = JSON.stringify(toDoList)
    localStorage.setItem("todolist", local);
};
