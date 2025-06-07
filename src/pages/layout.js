import { createElement } from "./function"
import { renderSidebar } from "./sidebar";
import { renderMainContent } from "./mainContent";

export default function renderLayout(){
    const layout = createElement('div', 'gridContainer');
    
    layout.appendChild(renderSidebar());
    
    layout.appendChild(renderMainContent());
    return layout;
}