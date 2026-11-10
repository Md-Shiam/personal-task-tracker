let tasks = ["Assignment", "Study", "Exercise"];

function deleteTask(index) {
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        console.log("Task deleted successfully!");
    } else {
        console.log("Invalid task index!");
    }
}

// Delete the first task
deleteTask(0);

// Display remaining tasks
console.log("Remaining tasks:", tasks);