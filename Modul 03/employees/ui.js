import { getEmployees, removeEmployee, addEmployee, findById, searchEmployees, setEmployeeManager, saveEmployee} from './service';
import DATA from './employees-json';

export function runUI() { 
    showEmployees(DATA.employees);
    showEmployeesEdit(DATA.employees);

    fillSelect(document.getElementById("managerSelect"), getEmployeesOptions());
    fillSelect(document.getElementById("managerSearch"), getEmployeesOptions());
    fillSelect(document.getElementById("managerEdit"), getEmployeesOptions());

    document.getElementById("searchButton").click();

    assignSendOnEnter("searchPane","searchEmployeesButton");
    assignSendOnEnter("addPane", "addEmployeeButton");
    assignSendOnEnter("editPane", "editEmployeesButton");
}; 

function clearEmployeesPlaceholder() { 
    document.getElementById('employeesPlaceholder').innerHTML = ''; 
};

function showEmployees(employees) { 
    clearEmployeesPlaceholder(); 
    const ul = document.createElement("ul"); 
    
    for (let employee of employees) { 
        const li = document.createElement("li"); 
        ul.appendChild(li); 

        let managerHTML = ""; 
        if (employee.managerRef) { 
            let manager = findById(employee.managerRef); 
            managerHTML = " <b>Manager:</b> " + manager.name + " " + manager.surname;

            const managerSpan = document.createElement("span"); 
            const managerSelect = document.createElement("select"); 
            fillSelect(managerSelect, getEmployeesOptions(), employee.managerRef); 
            managerSelect.addEventListener('change', () => employee.managerRef = managerSelect.value); 
            managerSpan.innerHTML = " <b>Manager:</b> "; 
            li.appendChild(managerSpan); 
            li.appendChild(managerSelect); 
        } 
        li.innerHTML = employee.name + " " + employee.surname + managerHTML;

        const removeButton = document.createElement("button"); 
        removeButton.innerHTML = "Remove"; 
        removeButton.addEventListener('click', () => removeEmployeeUI(employee.id)); 
        li.appendChild(removeButton);
    } 
    document.getElementById('employeesPlaceholder').appendChild(ul);
};

function showEmployeesEdit(employees) { 
    const ul = document.createElement("ul"); 
    
    for (let employee of employees) { 
        const li = document.createElement("li"); 
        ul.appendChild(li); 

        let managerHTML = ""; 
        if (employee.managerRef) { 
            let manager = findById(employee.managerRef); 
            managerHTML = " <b>Manager:</b> " + manager.name + " " + manager.surname;

            const managerSpan = document.createElement("span"); 
            const managerSelect = document.createElement("select"); 
            fillSelect(managerSelect, getEmployeesOptions(), employee.managerRef); 
            managerSelect.addEventListener('change', () => employee.managerRef = managerSelect.value); 
            managerSpan.innerHTML = " <b>Manager:</b> "; 
            li.appendChild(managerSpan); 
            li.appendChild(managerSelect); 
        } 
        li.innerHTML = employee.name + " " + employee.surname + managerHTML;

        const editButton = document.createElement("button"); 
        editButton.innerHTML = "Edit"; 
        editButton.addEventListener('click', () => editEmployeeBtn(employee.id)); 
        li.appendChild(editButton);
    } 
    document.getElementById('employeesEditPlaceholder').appendChild(ul);
};

export function addEmployeeUI() { 
	let errorHTML = ""; 

    const name = document.getElementById("name").value; 
    if (name == "") { 
        errorHTML += "- Employee name must be set<br>"; 
        document.getElementById("name").style.backgroundColor = '#FFEEEE';  
    } 
    
    const surname = document.getElementById("surname").value; 
    if (surname == "") { 
        errorHTML += "- Employee surname must be set<br>"; 
        document.getElementById("surname").style.backgroundColor = '#FFEEEE';  
    } 

    const dateOfBirth = document.getElementById("dateOfBirth").value; 
    if (dateOfBirth == "") { 
        errorHTML += "- Employee date of birth should be set<br>"; 
    } 
	
    document.getElementById("addEmployeeFormErrorMessage").innerHTML = errorHTML; 
	if (errorHTML.length != 0) return; 

    addEmployee(name, surname); 
    showEmployees(DATA.employees);
    
    const id = addEmployee(name, surname); 
    const managerId = document.getElementById("managerSelect").value;
    setEmployeeManager(id, Number(managerId));

    document.getElementById("name").value = ""; 
    document.getElementById("surname").value = ""; 
};

function fillSelect(select, values, selectedValue) { 
    for (let val of values) { 
        const option = document.createElement("option"); 
        option.text = val.text; 
        option.value = val.value; 
        if (selectedValue==option.value) option.selected=true; 
        select.appendChild(option); 
    } 
};

function getEmployeesOptions() { 
    let options = [];
    options.push({text:' ', value: ''}); 
    for (let e of DATA.employees) { 
        options.push({text:e.name + ' ' + e.surname, value:e.id}); 
    } 
    return options; 
};

export function searchEmployeeUI() { 
    const name = document.getElementById("nameSearch").value; 
    const surname = document.getElementById("surnameSearch").value; 
    const managerRef = document.getElementById("managerSearch").value; 
    
    const employees  = searchEmployees(name, surname, managerRef); 
    showEmployees(employees); 
};

/** 
 * Activates the selected tab 
 * @param evt event invoking activation 
 * @param id tab identifier 
 */ 
export function openTab(evt, id) { 
    // Define variables 
    var i, tabcontent, tablinks; 
    
    // Get all elements with class="tabcontent" and hide them 
    tabcontent = document.getElementsByClassName("tabcontent"); 
    for (i = 0; i < tabcontent.length; i++) { 
        tabcontent[i].style.display = "none"; 
    } 
    
    // Get all elements with class="tablinks" and delete the class "active" 
    tablinks = document.getElementsByClassName("tablinks"); 
    for (i = 0; i < tablinks.length; i++) { 
        tablinks[i].className = tablinks[i].className.replace(" active", ""); 
    } 
    
    // Show the current tab and add the class "active" 
    // to the button that opens this tab 
    document.getElementById(id).style.display = "block"; 
    evt.currentTarget.className += " active";

    if (id === "editPane") {
        document.getElementById('managerEdit').innerHTML = "";
        fillSelect(document.getElementById("managerEdit"), getEmployeesOptions());

        document.getElementById('employeesEditPlaceholder').innerHTML = "";
        showEmployeesEdit(DATA.employees);
    }

    if (id === "searchPane") {        
        document.getElementById('managerSearch').innerHTML = "";
        fillSelect(document.getElementById("managerSearch"), getEmployeesOptions());

        document.getElementById('employeesPlaceholder').innerHTML = "";
        showEmployees(DATA.employees);
    }

    if (id === "addPane") {        
        document.getElementById('managerSelect').innerHTML = "";
        fillSelect(document.getElementById("managerSelect"), getEmployeesOptions());
    }
};

function assignSendOnEnter(paneId, buttonId) { 
    let allInput = document.querySelectorAll("#"+paneId+" input"); 
    for (let input of allInput) { 
        input.addEventListener("keyup", function(event) { 
        event.preventDefault(); 
        if (event.keyCode === 13) { 
            document.querySelector("#"+paneId+" button").click(); 
        } 
     }); 
    } 
};

function editEmployeeBtn(id) {
    for (let e of DATA.employees) { 
        if (e.id === id) {
            document.getElementById('idEdit').value = e.id;
            document.getElementById('nameEdit').value = e.name;
            document.getElementById('surnameEdit').value = e.surname; 
        } 
    }
}

export function editEmployeeUI() {
    saveEmployee();

    document.getElementById('employeesEditPlaceholder').innerHTML = "";
    showEmployeesEdit(DATA.employees);
}