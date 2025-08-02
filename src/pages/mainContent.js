import { createElement } from "./function";
import { getTaskList } from "./addTask";
import { renderAddTask } from "./addTask";


export function renderMainContent(projectName = "Inbox"){
    const mainContent = createElement('div', 'mainContent');
    const taskGroup = createElement('div', 'taskGroup');
    const projectTitle = createElement('h2', 'projectTitle');
    projectTitle.textContent = projectName;
    const taskList = createElement('ul', 'taskList');
   

    const tasks = getTaskList();
    const todayDate = new Date().toLocaleDateString('en-CA');
    const filteredTasks = tasks.filter(task=>{
      if(projectName === "Today"){
         return task.date === todayDate && !task.isCompleted;
      } else if (projectName === 'Completed'){
        return task.isCompleted;
      } else {
        return task.projectTitle === projectName && !task.isCompleted;
      }
    }); 
   
     
    filteredTasks
    .forEach(task => {
      const taskItem = createElement("li");
      const taskDiv = createElement("div", "taskDiv");
      const taskContent = createElement("div", "taskContent");
      const taskButton = createElement("div", "taskButton");
      const editButton = createElement("button", "editButton");
      const deleteButton = createElement("button", "deleteButton");
      editButton.textContent = "Edit";
      deleteButton.textContent = "Delete";
      taskButton.appendChild(editButton);
      taskButton.appendChild(deleteButton);

      editButton.addEventListener('click', ()=>{
        renderAddTask(task);
      });

      deleteButton.addEventListener("click", ()=>{
        const currentTasks = getTaskList();
        const updatedTasks = currentTasks.filter((del) => del.id !== task.id);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        updateMainContent(projectName);
      });


      const taskTitle = createElement("div", "taskTitle");
      const checkbox = createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = task.id;
      checkbox.checked = task.isCompleted;

      checkbox.addEventListener("change", (e) => {
  const taskId = e.target.id;
  const tasks = getTaskList();

  const updatedTasks = tasks.map(task => {
    if (task.id === taskId) {
      return { ...task, isCompleted: e.target.checked };
    }
    return task;
  });

  localStorage.setItem("tasks", JSON.stringify(updatedTasks));

  updateMainContent(projectName);
});

      const label = createElement("label");
      label.setAttribute("for", task.id);
      label.textContent = task.title;

      const description = createElement("div", "taskDescription");
      description.textContent = task.description;

      const date = createElement("div", "taskDate");
      date.textContent = `Due Date: ${task.date}`;

      taskTitle.appendChild(checkbox);
      taskTitle.appendChild(label);
      taskContent.appendChild(taskTitle);
      taskContent.appendChild(description);
      taskContent.appendChild(date);
      taskDiv.appendChild(taskContent);
      taskDiv.appendChild(taskButton);
      taskItem.appendChild(taskDiv);
      taskList.appendChild(taskItem);
    });

     
    taskGroup.appendChild(projectTitle);
    taskGroup.appendChild(taskList);
    mainContent.appendChild(taskGroup);

    return mainContent;
}

export function updateMainContent(projectName = "Inbox") {
  const oldContent = document.querySelector(".mainContent");
  if (oldContent) oldContent.remove();

  const newContent = renderMainContent(projectName);
  document.querySelector(".gridContainer").appendChild(newContent);
} 