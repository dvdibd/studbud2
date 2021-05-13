const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button")
var taskInput = document.getElementById("taskInput");
var tasklist = document.getElementById("tasklist");

var dueDateInput = document.getElementById("dueDateInput");

var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let task = taskInput.value;
    let dueDate = dueDateInput.value;

    let estimatedTime = estimatedTimeInput.value;
    let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
    addTask(task, dueDate, estimatedTime, priorityRating, false);
    console.log(taskList);
})

var taskListArray = [];

function addTask(taskDescription, dueDate, estimatedTime, priorityRating, completionStatus) {
    let d = new Date();
    let dateCreated = d.getFullYear();
    let task = {
        taskDescription,
        dueDate,
        dateCreated,
        estimatedTime,
        priorityRating,
        estimatedTime,
        completionStatus
    };
    taskListArray.push(task);
    renderTask(task);
}

function renderTask(task) {
    // Create HTML elements
    let item = document.createElement("li");
    let taskInfo = "<p>" + task.taskDescription + " " + task.dueDate + " " + task.estimatedTime + " " + task.priorityRating + "</p>";
    let statusDone = document.createTextNode("  Done");
    item.innerHTML = taskInfo;

    tasklist.appendChild(item);

    // Extra Task DOM elements
    let delButton = document.createElement("button");
    let delButtonText = document.createTextNode("Delete Task");
    let statusAlert = document.createElement("radio");
    let statusAlertText = document.createTextNode("Task Done");
    delButton.appendChild(delButtonText);
    item.appendChild(delButton);
    statusAlert.appendChild(statusAlertText);
    item.appendChild(statusAlert);



    // Event Listeners for DOM elements
    delButton.addEventListener("click", function(event) {
        event.preventDefault();
        item.remove();
    })
    statusAlert.addEventListener("click", function(event) {
        //event.preventDefault();
        //item.remove();
        item.appendChild(statusDone);
        statusAlert.remove();
    })


    // Clear the input form
    form.reset();
}