let tasks = [
    { name: "Complete assignment", completed: false }
];

function completeTask(index) {
    if (index >= 0 && index < tasks.length) {
        tasks[index].completed = true;
        console.log("Task completed!");
    } else {
        console.log("Invalid task index!");
    }
}

completeTask(0);

console.log("Updated tasks:", tasks);