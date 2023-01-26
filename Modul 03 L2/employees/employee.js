import {Person} from './person';
import DATA from './employees-json';

export class Employee extends Person { 
    constructor(name, surname, department) { 
        super(name,surname);       
        this.department = department;
    }
}

export function jsonToEmployees(employeesJSON) { 
    let employees = []; 
    for (let e of employeesJSON) { 
     employees.push(Employee.fromJSON(e)); 
    } 
    return employees; 
} 

window.Employee = Employee;
window.allEmployees = function() { 
    return jsonToEmployees(DATA.employees); 
} 