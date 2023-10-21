function addTask() {
    var taskInput = document.getElementById('task');
    var taskList = document.getElementById('task-list');
    var newTask = taskInput.value;


        var li = document.createElement('li');
        li.appendChild(document.createTextNode(newTask));
        var deleteButton = document.createElement('button');
        deleteButton.appendChild(document.createTextNode('Delete'));
        deleteButton.setAttribute('class', 'delete');
        deleteButton.setAttribute('onclick', 'deleteTask(this)');
        li.appendChild(deleteButton);                
        taskList.appendChild(li);
        taskInput.value = '';
    }


function clearList() {
    var taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
}
function deleteTask(task) {
    task.parentElement.remove();
}