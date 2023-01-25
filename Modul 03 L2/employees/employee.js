import {Person} from './person';

export class Employee extends Person { 
    constructor(name, surname, department) { 
        super(name,surname);       
        this.department = department;
    }
}

window.Employee = Employee;