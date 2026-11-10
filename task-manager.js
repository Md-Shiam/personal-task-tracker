let tasks = ["Assignment", "Study", "Exercise"];

function deleteTask(index) {
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        console.log("Task deleted successfully!");
    } else {
        console.log("Invalid task index!");
    }
}

deleteTask(0);

console.log("Remaining tasks:", tasks);