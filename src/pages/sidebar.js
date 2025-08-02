import { clickEvent, createElement, createNavItem } from "./function";
import { createImg } from "./function.js";
import tommy from '../asset/tommy.jpg';
import { renderProjectList } from "./renderProjectList.js";
import { updateMainContent } from "./mainContent";

export function renderSidebar(){
    
    const sidebar = createElement('div', 'sidebar');
    const topBar = createElement('div', 'topBar');
    const profileDiv = createElement('div', 'profileDiv');
    const profileImg = createImg(tommy, 'profile picture'); 
    const menuIcon = createElement('i');
    menuIcon.classList.add('fas', 'fa-window-maximize', 'menuIcon');

    profileDiv.appendChild(profileImg);

    topBar.appendChild(profileDiv);
    topBar.appendChild(menuIcon);
    sidebar.appendChild(topBar);

    const navContent = createElement('nav', 'navContent');

    const addTaskItem = createNavItem({
        iconClass:'fas fa-plus-circle',
        extraIconClass: 'addTaskIcon',
        text: 'Add task',
        linkClass: 'addTaskText',

    });
    addTaskItem.dataset.id = 'add-task';


    const inboxItem = createNavItem({
        itemClass: 'active',
        iconClass:'fas fa-inbox',
        extraIconClass: 'inboxIcon',
        text: 'Inbox',
        linkClass: 'inboxText',

    });

    const todayItem = createNavItem({
        iconClass:'fas fa-calendar-alt',
        extraIconClass: 'todayIcon',
        text: 'Today',
        linkClass: 'todayText',
    });

    const completeItem = createNavItem({
        itemClass: 'navHover',
        iconClass:'fas fa-check-circle',
        extraIconClass: 'completeIcon',
        text: 'Completed',
        linkClass: 'completeText',
    });

    navContent.appendChild(addTaskItem);
    navContent.appendChild(inboxItem);
    navContent.appendChild(todayItem);
    navContent.appendChild(completeItem);
    sidebar.appendChild(navContent);

    const projects = createElement('div', 'myProjects');
    const myProjects = createElement('div', 'addProjects');
    const myProjectsTitle = createElement('a', 'myProjectsTitle');
    myProjectsTitle.textContent = 'My Projects';
    const myProjectsIcons = createElement('div','myProjectsIcons');
    const projectAddIcon = createElement('i', 'projectAddIcon');
    projectAddIcon.classList.add('fas', 'fa-plus');
    projectAddIcon.title = "Add Projects";
    const projectDropDownIcon = createElement('i', 'projectDropDownIcon'); 
    projectDropDownIcon.classList.add('fas', 'fa-angle-down');
    
    myProjectsIcons.appendChild(projectAddIcon);
    myProjectsIcons.appendChild(projectDropDownIcon);

    myProjects.appendChild(myProjectsTitle);

    projects.appendChild(myProjects);
    projects.appendChild(myProjectsIcons);

    sidebar.appendChild(projects);

    sidebar.appendChild(renderProjectList());

    projectDropDownIcon.addEventListener('click', ()=>{
    const projectView = sidebar.querySelector('.projectView');
    if (projectView) {
    projectView.classList.toggle('hidden');
    const isCollapsed = projectView.classList.contains('hidden');
    projectDropDownIcon.style.transform = isCollapsed? "rotate(-90deg)": "rotate(0deg)";

  }
    });

    inboxItem.addEventListener('click', () => {
  updateMainContent('Inbox');
});

todayItem.addEventListener('click', () => {
  updateMainContent('Today');
});

completeItem.addEventListener('click', () => {
  updateMainContent('Completed');
});


    return sidebar;
}