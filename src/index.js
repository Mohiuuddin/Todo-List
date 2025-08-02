import '@fortawesome/fontawesome-free/css/all.min.css';
import renderLayout from './pages/layout';
import './styles.css';
import { sidebarToggle, activeClass } from './pages/function';
import {renderAddPropject }from './pages/addProject';


document.addEventListener('DOMContentLoaded', ()=>{
   const bodyTag = document.body;
   bodyTag.appendChild(renderLayout());
   sidebarToggle();
   activeClass();
   renderAddPropject();
   const button = document.getElementById('showPicker');
  const calendarContainer = document.getElementById('calendarContainer');
  const dateInput = document.getElementById('datepicker');


});
