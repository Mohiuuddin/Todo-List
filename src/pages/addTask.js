import { createElement, closeDialog, clickEvent } from "./function";
import { getProjectList } from "./addProject";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { updateMainContent } from "./mainContent";

export function getTaskList() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}


export function renderAddTask(taskToEdit = null) {
  const projectList = getProjectList();
  const projectOptions = `<option value="Inbox" selected>Inbox</option>
    ${projectList
      .filter((project) => project.name !== "Inbox")
      .map((project) => `<option value="${project.name}">${project.name}</option>`)
      .join("")}`;

  const taskDialog = createElement("dialog", "taskDialog");
  taskDialog.innerHTML = `
    <div class='taskContent'>
      <p class="taskTitle" contenteditable="true" data-placeholder="Practice math problems daily at 4pm" id="taskTitle"></p>
      <p class="taskDescription" contenteditable="true" data-placeholder="Description" id="taskDescription"></p>

      <div class="iconBtns">
        <button class="iconBtn" id="date"><i class='fa-regular fa-calendar'></i> Date</button>
        <button class="iconBtn" id="priority"><i class='fa-solid fa-flag'></i> Priority</button>
      </div>

      <div class="selection">
        <div class="projectSelection">
          <select name="projectDropdown" class="projectDropdown" id="projectDropdown">
              ${projectOptions}
          </select>
        </div>
        <div class='taskBtns'>
          <button type="button" class="cancelBtn">Cancel</button>
          <button type="submit" class="submitBtn">Add</button>
        </div>
      </div>
      <input type="text" id="flatpickrAnchor" style="position: absolute; opacity: 0; pointer-events: none; width: 1px; height: 1px; top: 0; left: 0;">
    </div>

    <div class='priority'>
      <i class='fa-solid fa-xmark priority-close-btn'></i>
      <ul>
        <li><i class='fa-solid fa-flag priority1'></i> Priority 1</li>
        <li><i class='fa-solid fa-flag priority2'></i> Priority 2</li>
        <li><i class='fa-solid fa-flag priority3'></i> Priority 3</li>
        <li><i class='fa-solid fa-flag priority4'></i> Priority 4</li>
      </ul>
    </div>
  `;

  document.body.appendChild(taskDialog);
  taskDialog.showModal();
  closeDialog(taskDialog);

  const taskTitle = taskDialog.querySelector("#taskTitle");
  const taskDescription = taskDialog.querySelector("#taskDescription");
  const projectName = taskDialog.querySelector("#projectDropdown");
  const dateBtn = taskDialog.querySelector("#date");
  const priorityBtn = taskDialog.querySelector("#priority");
  const flatpickrAnchor = taskDialog.querySelector("#flatpickrAnchor");
  const priorityDiv = taskDialog.querySelector(".priority");

  // Setup Flatpickr
  const calendar = flatpickr(flatpickrAnchor, {
    defaultDate: new Date(),
    appendTo: taskDialog,
    onChange: (selectedDates, dateStr) => {
      dateBtn.innerHTML = `<i class='fa-regular fa-calendar'></i> ${dateStr}`;
    },
    onOpen: (selectedDates, dateStr, instance) => {
      if (instance.calendarContainer) {
        instance.calendarContainer.style.position = "absolute";
        instance.calendarContainer.style.left = "50%";
        instance.calendarContainer.style.top = "50%";
        instance.calendarContainer.style.transform = "translate(-50%, -50%)";
        instance.calendarContainer.style.display = "block";
        instance.calendarContainer.style.visibility = "visible";
        instance.calendarContainer.style.opacity = "1";
      }
    },
    onClose: (selectedDates, dateStr, instance) => {
      if (instance.calendarContainer) {
        instance.calendarContainer.style.visibility = "hidden";
        instance.calendarContainer.style.opacity = "0";
      }
    },
  });

  // Show calendar
  dateBtn.addEventListener("click", () => calendar.open());

  // Priority Selection Logic 
  priorityBtn.addEventListener("click", () => {
    priorityDiv.style.display = "block";

    const priorityItems = priorityDiv.querySelectorAll("ul li");
    priorityItems.forEach((item) => {
      item.addEventListener("click", () => {
        const selected = item.textContent.trim();
        priorityBtn.innerHTML = `<i class='fa-solid fa-flag'></i> ${selected}`;
        priorityDiv.style.display = "none";
      });
    });

    const closeBtn = priorityDiv.querySelector(".priority-close-btn");
    closeBtn.addEventListener("click", () => {
      priorityDiv.style.display = "none";
    });
  });

  // Cancel button
  taskDialog.querySelector(".cancelBtn").addEventListener("click", () => {
    taskDialog.close();
    calendar.close();
  });

  //  for edit
  if (taskToEdit) {
    taskTitle.textContent = taskToEdit.title;
    taskDescription.textContent = taskToEdit.description;
    dateBtn.innerHTML = `<i class='fa-regular fa-calendar'></i> ${taskToEdit.date}`;
    priorityBtn.innerHTML = `<i class='fa-solid fa-flag'></i> ${taskToEdit.priorityLevel}`;
    projectName.value = taskToEdit.projectTitle;
  }

  // Submit handler
  taskDialog.querySelector(".submitBtn").addEventListener("click", () => {
    const titleValue = taskTitle.textContent.trim();
    const descriptionValue = taskDescription.textContent.trim();
    const dateValue = dateBtn.textContent.trim();
    const priorityValue = priorityBtn.textContent.trim();
    const projectValue = projectName.value.trim();

    if (dateValue !== "Date" && priorityValue !== "Priority") {
      if (titleValue !== "" && descriptionValue !== "") {
        const currentTasks = getTaskList();

        if (taskToEdit) {
          const updatedTasks = currentTasks.map((task) =>
            task.id === taskToEdit.id
              ? {
                  ...task,
                  title: titleValue,
                  description: descriptionValue,
                  date: dateValue,
                  priorityLevel: priorityValue,
                  projectTitle: projectValue,
                }
              : task
          );
          localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        } else {
          const newTask = {
            id: crypto.randomUUID(),
            title: titleValue,
            description: descriptionValue,
            date: dateValue,
            priorityLevel: priorityValue,
            projectTitle: projectValue,
            isCompleted: false,
          };
          currentTasks.push(newTask);
          localStorage.setItem("tasks", JSON.stringify(currentTasks));
        }

        updateMainContent();
        taskDialog.close();
        calendar.close();
      }
    } else {
      alert("Please select a valid date and priority level.");
    }
  });
}


