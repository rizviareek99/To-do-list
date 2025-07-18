 let taskInput = document.getElementById("input");
      let taskButton = document.getElementById("taskbutton");
      let taskList = document.getElementById("task-list");

      taskButton.addEventListener("click", () => {
        if (taskInput.value.trim() === "") {
          alert("Please enter the task...");
          return;
        }

        let taskItem = document.createElement("div");
        taskItem.className = "task-item";

        let showTask = document.createElement("input");
        showTask.type = "text";
        showTask.value = taskInput.value;
        showTask.readOnly = true;

        let taskEdit = document.createElement("button");
        taskEdit.innerText = "Edit";
        taskEdit.addEventListener("click", () => {
          if (taskEdit.innerText === "Edit") {
            showTask.readOnly = false;
            showTask.focus();
            taskEdit.innerText = "Save";
          } else {
            showTask.readOnly = true;
            taskEdit.innerText = "Edit";
          }
        });

        let taskDelete = document.createElement("button");
        taskDelete.innerText = "Delete";
        taskDelete.classList.add("delete");
        taskDelete.addEventListener("click", () => {
          let confirmDelete = confirm(
            "Are you sure you want to delete this task?"
          );
          if (confirmDelete) {
            taskItem.remove();
          }
        });

        taskItem.appendChild(showTask);
        taskItem.appendChild(taskEdit);
        taskItem.appendChild(taskDelete);
        taskList.appendChild(taskItem);

        taskInput.value = "";
      });