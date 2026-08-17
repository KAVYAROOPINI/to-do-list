function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    taskSpan.onclick = function () {
        taskSpan.classList.toggle("completed");
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");

    deleteButton.onclick = function () {
        li.remove();
    };

    li.appendChild(taskSpan);
    li.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}