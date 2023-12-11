let tasks = [];
/*Global variables for counters*/
let counter=0;
let incomplete=0;

/*Fetching the required elements*/
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');
const completedCounter = document.getElementById('completed-counter');
const unCompletedCounter = document.getElementById('uncompleted-counter');

/*Adding a task to the to-do-list*/
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
/*Keeping count of tasks in list*/
function taskCount(count) {
    tasksCounter.innerHTML=count;
}
function completeCount(count) {
    completedCounter.innerHTML=count;
}
function tasksLeft(count) {
    unCompletedCounter.innerHTML=count;
}
/*For the check ande delete operation*/
function handleClickEvent(e)
{
    const element=e.target;
    if(element.tagName==='LI')
    {
        element.classList.toggle("check-mark"); /*classList property gives list of all the classnames with the name 'check-mark' and roggle ensures that the styling under this class is enabled*/
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
