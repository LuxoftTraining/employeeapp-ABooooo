import { runUI, addEmployeeUI, openTab, searchEmployeeUI, editEmployeeUI, removeEmployeeUI} from './employees/ui';
import {Employee} from './employees/employee';
import './css/style.css';

window.addEmployeeUI = addEmployeeUI; 
window.openTab = openTab; 
window.searchEmployeeUI = searchEmployeeUI; 
window.editEmployeeUI = editEmployeeUI;
window.removeEmployeeUI = removeEmployeeUI;

runUI();