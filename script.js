// Timer Logic
let timeLeft = 1500; // 25 minutes
let timer;
let isPaused = true;

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.querySelector(".timer-display").textContent = `${String(
        minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

document.getElementById("start").addEventListener("click", () => {
    if (isPaused) {
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimerDisplay();
            } else {
                clearInterval(timer);
            }
        }, 1000);
        isPaused = false;
    }
});

document.getElementById("pause").addEventListener("click", () => {
    clearInterval(timer);
    isPaused = true;
});

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(timer);
    timeLeft = 1500;
    updateTimerDisplay();
    isPaused = true;
});

// To-Do List Logic
document.getElementById("add-task").addEventListener("click", () => {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.onclick = () => taskItem.remove();
        taskItem.appendChild(deleteButton);
        document.getElementById("tasks").appendChild(taskItem);
        taskInput.value = "";
    }
});
