const taskInput = document.getElementById("taskInput");

const addTask = document.getElementById("addTask");

const deleteTask = document.getElementById("deleteTask");

const taskList = document.getElementById("taskList");


// Add Task

addTask.addEventListener("click", function () {

    if (taskInput.value.trim() === "") {

        alert("Please enter a task");

        return;

    }

    // Create li

    let li = document.createElement("li");

    li.className =
        "list-group-item d-flex justify-content-between align-items-center";

    // Task Text

    let span = document.createElement("span");

    span.innerText = taskInput.value;

    // Toggle Complete

    span.addEventListener("click", function () {

        span.classList.toggle("completed");

    });

    // Delete Button

    let removeBtn = document.createElement("button");

    removeBtn.innerText = "Delete";

    removeBtn.className = "btn btn-danger btn-sm";

    removeBtn.addEventListener("click", function () {

        li.remove();

    });

    li.appendChild(span);

    li.appendChild(removeBtn);

    taskList.appendChild(li);

    taskInput.value = "";

});


// Delete All

deleteTask.addEventListener("click", function () {

    taskList.innerHTML = "";

});