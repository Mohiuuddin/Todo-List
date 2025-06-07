import { createElement } from "./function";
export function renderMainContent(){
    const mainContent = createElement('div', 'mainContent');
    mainContent.textContent = "This is mainContent";
    return mainContent;
}