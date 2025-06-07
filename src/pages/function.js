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

export function sidebarToggle() {
  const toggleBtn = document.querySelector('.menuIcon');  
  const gridContainer = document.querySelector('.gridContainer');

  if (toggleBtn && gridContainer) {
    toggleBtn.addEventListener('click', () => {
      gridContainer.classList.toggle('collapsed');
    });
  }
}
