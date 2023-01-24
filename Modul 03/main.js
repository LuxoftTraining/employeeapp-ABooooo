import { runUI, addEmployeeUI, openTab, searchEmployeeUI, editEmployeeUI } from './employees/ui';
import './css/style.css';

window.addEmployeeUI = addEmployeeUI; 
window.openTab = openTab; 
window.searchEmployeeUI = searchEmployeeUI; 
window.editEmployeeUI = editEmployeeUI; 

runUI();