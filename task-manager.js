let tasks = ["Assignment", "Study", "Exercise"];

function deleteTask(index) {
    tasks.splice(index, 1);
    console.log("Task deleted!");
}

deleteTask(0);
