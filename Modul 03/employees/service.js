import DATA from './employees-json';

export function getEmployees() { return DATA.employees };

function findByName(name, surname) {
    let result = []; 
    for (var employee of DATA.employees) { 
        if ((!name || employee.name === name) && (!surname || employee.surname === surname)) { 
            result.push(employee); 
        } 
    } 
    return result;
};

export function addEmployee(name, surname) { 
    if (!name || name.length == 0 || !surname || surname.length == 0) { 
     throw new Error("name and surname should be not empty"); 
    } 
    let max = 0;
    for (let employee of DATA.employees) { 
     if (employee.id > max) max = employee.id; 
    } 
    let id = max + 1; 
    DATA.employees.push({id, name, surname}); 
    return id; 
};

export function removeEmployee(id) { 
    let index = 0; 
    for (let employee of DATA.employees) { 
     if (employee.id === id) break; 
     index++; 
    } 
    DATA.employees.splice(index, 1);
};

function showEmployee(employee) { 
    const keys = Object.keys(employee); 
    console.log("Employee info " + employee["name"] + ":"); 
    for (let key of keys) { 
        console.log(key + " = " + employee[key]);
    } 
};

function showEmployees() { 
    // alternative option => DATA.employees.forEach(showEmployee);  
    for (let employee of DATA.employees) { 
     showEmployee(employee); 
    } 
};

export function findById(id) { 
    for (var employee of DATA.employees) { 
     if (id == employee.id) { 
      return employee; 
     } 
    } 
   throw Error("employee with id="+id+"not found!"); 
};

const employeeMap = {}; 
function findByIdMap(id) { 
 if (employeeMap[id]) { 
  return employeeMap[id]; 
 } 
 for (var employee of DATA.employees) { 
  if (id == employee.id) { 
   employeeMap[id] = employee; 
   return employee;
  } 
 } 
};

function addPhone(id, phone) { 
    const employee = findById(id); 
    const phones = employee.phones; 
    if (!phones) { 
     employee.phones = []; 
    } 
    employee.phones.push(phone); 
};

// setDateOfBirth(1, new Date('May 30, 1980'))
function setDateOfBirth(id, date) { 
 const employee = findById(id); 
 employee.dateOfBirth = date; 
};
 
function getAge(id) { 
    const employee = findById(id); 
    let ageDiff = Date.now() - employee.dateOfBirth.getTime(); 
    let ageDate = new Date(ageDiff); // miliseconds from epoch 
    return Math.abs(ageDate.getUTCFullYear() - 1970); 
};

function formatDate(date) { 
    let day = date.getDate(); 
    if (day<10) day = '0'+day; 
    let month = date.getMonth()+1; 
    if (month<10) month = '0'+month; 
    let year = date.getFullYear(); 
    
    return day + '.' + month + '.' + year; 
};

function getEmployeeInfo(id) { 
    const employee = findById(id); 
    
    const phones = employee.phones ? `List of phones: ${employee.phones}` : ''; 
    const age = employee.dateOfBirth ? `Age: ${getAge(employee.id)}` : ''; 

    return `
     Name: ${employee.name} 
     Surname: ${employee.surname} 
     Date of birth: ${formatDate(employee.dateOfBirth)} 
     ${phones}  
     ${age} 
    `; 
};

function testEmployee() { 
    addPhone(133, "555-55-55"); 
    addPhone(133, "666-66-66"); 
    setDateOfBirth(133, new Date(2000,1,1)) 
    const info = getEmployeeInfo(133); 
    console.log(info); 
};

function getEmployeeJSON(id) { 
    const employee = findById(id); 
    return JSON.stringify(employee); 
};

function removeEmployeeUI(id) { 
    removeEmployee(id); 
    showEmployees(DATA.employees);

    document.getElementById('managerSearch').innerHTML = "";
    fillSelect(document.getElementById("managerSearch"), getEmployeesOptions());
}

export function setEmployeeManager(id, managerId) {
    var myArray = DATA.employees;
    var index = myArray.findIndex((obj => obj.id == id));
    if (index > -1) {
        DATA.employees[index].managerRef = managerId;
    }    
};

export function searchEmployees(name, surname, managerRef) { 
    let results = []; 
    for (let e of DATA.employees) { 
     if ((!name || e.name==name) && 
      (!surname || e.surname==surname) && 
      (!managerRef || e.managerRef==managerRef)) { 
      results.push(e); 
     } 
    } 
    return results; 
};

export function saveEmployee() {
    var id = document.getElementById('idEdit').value;
    var name = document.getElementById('nameEdit').value;
    var surname = document.getElementById('surnameEdit').value;
    
    var myArray = DATA.employees;
    var index = myArray.findIndex((obj => obj.id == id));
    if (index > -1) {
        DATA.employees[index].name = name;
        DATA.employees[index].surname = surname; 
    }
}







    