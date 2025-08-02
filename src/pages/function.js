import {renderAddTask} from './addTask';
export function createElement(tagName, addClass) {
    const el = document.createElement(tagName);
    if (addClass !== "") {
        el.classList.add(addClass);
    }
    return el;
}

export function createImg(src, alt){
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;;
    return img;
}


export function createNavItem ({itemClass='', iconClass, extraIconClass, text, linkClass='' }){
  const navItem = createElement('div', 'navItem');
  if(itemClass) navItem.classList.add(itemClass);
  const icon = createElement('i', extraIconClass);
  const [iconStyle, iconName] = iconClass.split(' ');
  icon.classList.add(iconStyle, iconName);
  const label = createElement('a', linkClass);
  label.textContent = text;
  navItem.appendChild(icon);
  navItem.appendChild(label);

  return navItem;
}

export function sidebarToggle() {
  const toggleBtn = document.querySelector('.menuIcon');  
  const gridContainer = document.querySelector('.gridContainer');

  if (toggleBtn && gridContainer) {
    toggleBtn.addEventListener('click', () => {
      gridContainer.classList.toggle('collapsed');
    });
  }
}

export function activeClass (){
  document.querySelectorAll('.navItem').forEach(item=>{
      item.addEventListener('click', ()=>{
         document.querySelectorAll('.navItem').forEach(el => el.classList.remove('active'));
         item.classList.add('active');

         if(item.dataset.id=== 'add-task'){
           renderAddTask();
         }

      });
   });

} 

export function clickEvent (selector, eventFunc){

  const clickAction = document.querySelector(selector);
  clickAction.addEventListener('click', eventFunc);
  return clickAction;

}

export function closeDialog(dialog){
    clickEvent('.cancelBtn', ()=>{
      dialog.close();
      dialog.remove();
    });
} 

