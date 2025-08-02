import { createElement, clickEvent, closeDialog } from "./function";
import { renderProjectList } from "./renderProjectList";

export function getProjectList() {
  return JSON.parse(localStorage.getItem("projects")) || [];
}

export function renderAddPropject() {
  clickEvent(".projectAddIcon", () => {
    const projectDialog = createElement('dialog', 'dialog');
    projectDialog.innerHTML = `<form class='dialogForm'>
        <h3>Add project</h3>
        <div class='formContent'>
        <div class='inputDiv'>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required placeholder='Project Name'>
        </div>
        </div>
        <div class='formButtons'>
          
          <button type="button" class="cancelBtn">Cancel</button>
          <button type="button" class="submitBtn">Add</button>
        </div>
      </form>
    `;

   document.body.appendChild(projectDialog);
   projectDialog.showModal();
    closeDialog(projectDialog);
    clickEvent('.submitBtn', ()=>{
      const nameInput = projectDialog.querySelector("#name");
      const id = crypto.randomUUID();
      const projectNmae = nameInput.value.trim();
      if(projectNmae){
        const currentProjects = getProjectList();
        currentProjects.push({name: projectNmae, id : id});
        localStorage.setItem("projects", JSON.stringify(currentProjects));
        projectDialog.close();
        projectDialog.remove();

        const oldProjectView = document.querySelector('.projectView');
        if(oldProjectView){
          oldProjectView.remove();
        }
        const sidebar = document.querySelector('.sidebar');
        const newProjectView = renderProjectList();
        sidebar.appendChild(newProjectView);
      

      } else {
        alert('Please enter a project name');
      }

    });

  });
  }
