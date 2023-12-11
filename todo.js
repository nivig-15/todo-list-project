let tasks = [];
let counter=0;
let incomplete=0;
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');
const completedCounter = document.getElementById('completed-counter');
const unCompletedCounter = document.getElementById('uncompleted-counter');

function addTask()
{
    if(addTaskInput.value=='')
        showNotification("Add a task!!!");
    else{
        const li=document.createElement('li');
        li.innerHTML=addTaskInput.value+`<img src="close.png" class="delete-btn"/>`;
        taskList.append(li);
    }
    const text=addTaskInput.value;
    const task={
            text,
            id:Date.now().toString()
    }
    tasks.push(task);
    addTaskInput.value='';
    const count=tasks.length;
    taskCount(count);
}
function showNotification(text) {
    alert(text);
}
function taskCount(count) {
    tasksCounter.innerHTML=count;
}
function completeCount(count) {
    completedCounter.innerHTML=count;
}
function tasksLeft(count) {
    unCompletedCounter.innerHTML=count;
}

function handleClickEvent(e)
{
    const element=e.target;
    if(element.tagName==='LI')
    {
        element.classList.toggle("check-mark");
        counter=counter+1;
        completeCount(counter);
        tasksLeft(tasks.length-counter);
    }
    else if(element.className==='delete-btn')
    {
        element.parentElement.remove();
        tasks.length=tasks.length-1;
        taskCount(tasks.length);
    }
}
taskList.addEventListener('click',handleClickEvent);
