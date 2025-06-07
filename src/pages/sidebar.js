import { createElement } from "./function";
import { createImg } from "./function.js";
import tommy from '../asset/tommy.jpg';

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

    
     // const menuDiv = createElement('nav', 'menuDiv');
    // sidebar end
         
         
    return sidebar;
}