import { createElement } from "./function.js";
import { getProjectList } from "./addProject.js";
import {updateMainContent} from "./mainContent";


export function renderProjectList(){
    const projectView = createElement('div', 'projectView');
    
        const list = getProjectList();
    
        if(list && list.length > 0){
            
    
           
            list.forEach(item => {
            const projectItem = createElement('div', 'projectItem');
            projectItem.dataset.id = item.id;
            const projectText = createElement('div', 'projectText');
            const listIcon = createElement('i', 'listIcon');
            listIcon.classList.add('fas', 'fa-hashtag');
            const projectNmae = createElement('h3', 'projectNmae');
            projectNmae.textContent = item.name;
            const projectDelete = createElement('i', 'projectDelete');
            projectDelete.classList.add('fas', 'fa-trash');

            projectDelete.addEventListener('click', () => {
            const updatedProjects = getProjectList().filter(p => p.id !== item.id);
            localStorage.setItem("projects", JSON.stringify(updatedProjects));

        
            const oldProjectView = document.querySelector('.projectView');
            if (oldProjectView) oldProjectView.remove();
            const sidebar = document.querySelector('.sidebar');
            const newProjectView = renderProjectList();
            sidebar.appendChild(newProjectView);
            });

            projectItem.addEventListener('click', () => {
                updateMainContent(item.name);
            });
    
            projectText.appendChild(listIcon);
            projectText.appendChild(projectNmae);
            projectItem.appendChild(projectText);
            projectItem.appendChild(projectDelete);
            projectView.appendChild(projectItem);
    
            });
    
        }
    
        return projectView;
       
        
}


