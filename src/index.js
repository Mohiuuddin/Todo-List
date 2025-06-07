import '@fortawesome/fontawesome-free/css/all.min.css';
import renderLayout from './pages/layout';
import './styles.css';
import { sidebarToggle } from './pages/function';

document.addEventListener('DOMContentLoaded', ()=>{
   const bodyTag = document.body;
   bodyTag.appendChild(renderLayout());
   sidebarToggle();

   // const toggleBtn = document.querySelector('.menuIcon');  
   // const gridContainer = document.querySelector('.gridContainer');

   // toggleBtn.addEventListener('click', () => {
   // gridContainer.classList.toggle('collapsed');
   // });


});
