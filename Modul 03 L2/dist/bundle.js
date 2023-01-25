/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./employees/employee.js":
/*!*******************************!*\
  !*** ./employees/employee.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Employee": () => (/* binding */ Employee)
/* harmony export */ });
/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./person */ "./employees/person.js");


class Employee extends _person__WEBPACK_IMPORTED_MODULE_0__.Person { 
    constructor(name, surname, department) { 
        super(name,surname);       
        this.department = department;
    }
}

window.Employee = Employee;

/***/ }),

/***/ "./employees/employees-json.js":
/*!*************************************!*\
  !*** ./employees/employees-json.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ 
 employees: [ 
   { 
    id: 1, 
    name: "Peter", 
    surname: "Peterson", 
    department: "IT" 
   },
   { 
    id: 2, 
    name: "Seppi", 
    surname: "Peterson", 
    department: "IT" 
   },
   { 
    id: 3, 
    name: "Josef", 
    surname: "Peterson", 
    department: "IT" 
   },
   { 
    id: 4, 
    name: "Franz", 
    surname: "Peterson", 
    department: "IT" 
   }
 ] 
}); 

/***/ }),

/***/ "./employees/person.js":
/*!*****************************!*\
  !*** ./employees/person.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Person": () => (/* binding */ Person)
/* harmony export */ });
class Person { 
    constructor(name, surname) { 
        this.name = name; 
        this.surname = surname;
 
    }
    get fullName() { 
        return this.name + " " + this.surname; 
    }
    get age() { 
        if (!this._dateOfBirth) return ""; 
        let ageDiff = Date.now() - this._dateOfBirth.getTime(); 
        let ageDate = new Date(ageDiff); // milliseconds from epoch 
        return " <b>Age:</b>"+ 
       
       Math.abs(ageDate.getUTCFullYear() - 1970); 
    }
    set addPhone(phone) { 
        this.phones = [];  
        this.phones.push(phone);
    }
    get addPhone() {
        return this.phones;
    }
    formatDate(date) { 
        let day = date.getDate(); 
        if (day<10) day = '0'+day; 
        let month = date.getMonth()+1; 
        if (month<10) month = '0'+month; 
        let year = date.getFullYear(); 
        return day + '.' + month + '.' + year;
    }
    set dateOfBirth(date) { 
        this._dateOfBirth = new Date(date); 
    }  
    get dateOfBirth() { 
        return this._dateOfBirth ? " <b>Date of birth:</b> " + this.formatDate(this._dateOfBirth) : ""; 
    }
    toString() { 
        const phones = this.phones ? `List of phones: ${this.phones}` : ''; 
        return `${this.fullName} \ ${this.dateOfBirth} ${this.age} ${phones}`; 
    } 
} 

/***/ }),

/***/ "./employees/service.js":
/*!******************************!*\
  !*** ./employees/service.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addEmployee": () => (/* binding */ addEmployee),
/* harmony export */   "findById": () => (/* binding */ findById),
/* harmony export */   "getEmployees": () => (/* binding */ getEmployees),
/* harmony export */   "removeEmployee": () => (/* binding */ removeEmployee),
/* harmony export */   "saveEmployee": () => (/* binding */ saveEmployee),
/* harmony export */   "searchEmployees": () => (/* binding */ searchEmployees),
/* harmony export */   "setEmployeeManager": () => (/* binding */ setEmployeeManager)
/* harmony export */ });
/* harmony import */ var _employees_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employees-json */ "./employees/employees-json.js");


function getEmployees() { return _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees };

function findByName(name, surname) {
    let result = []; 
    for (var employee of _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees) { 
        if ((!name || employee.name === name) && (!surname || employee.surname === surname)) { 
            result.push(employee); 
        } 
    } 
    return result;
};

function addEmployee(name, surname) { 
    if (!name || name.length == 0 || !surname || surname.length == 0) { 
     throw new Error("name and surname should be not empty"); 
    } 
    let max = 0;
    for (let employee of _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees) { 
     if (employee.id > max) max = employee.id; 
    } 
    let id = max + 1; 
    _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees.push({id, name, surname}); 
    return id; 
};

function removeEmployee(id) { 
    let index = 0; 
    for (let employee of _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees) { 
     if (employee.id === id) break; 
     index++; 
    } 
    _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees.splice(index, 1);
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
    for (let employee of _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees) { 
     showEmployee(employee); 
    } 
};

function findById(id) { 
    for (var employee of _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees) { 
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
 for (var employee of _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees) { 
  if (id == employee.id) { 
   employeeMap[id] = employee; 
   return employee;
  } 
 } 
};

/*function addPhone(id, phone) { 
    const employee = findById(id); 
    const phones = employee.phones; 
    if (!phones) { 
     employee.phones = []; 
    } 
    employee.phones.push(phone); 
};*/

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

/*function formatDate(date) { 
    let day = date.getDate(); 
    if (day<10) day = '0'+day; 
    let month = date.getMonth()+1; 
    if (month<10) month = '0'+month; 
    let year = date.getFullYear(); 
    
    return day + '.' + month + '.' + year; 
};*/

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

function setEmployeeManager(id, managerId) {
    var myArray = _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees;
    var index = myArray.findIndex((obj => obj.id == id));
    if (index > -1) {
        _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees[index].managerRef = managerId;
    }    
};

function searchEmployees(name, surname, managerRef) { 
    let results = []; 
    for (let e of _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees) { 
     if ((!name || e.name==name) && 
      (!surname || e.surname==surname) && 
      (!managerRef || e.managerRef==managerRef)) { 
      results.push(e); 
     } 
    } 
    return results; 
};

function saveEmployee() {
    var id = document.getElementById('idEdit').value;
    var name = document.getElementById('nameEdit').value;
    var surname = document.getElementById('surnameEdit').value;
    
    var myArray = _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees;
    var index = myArray.findIndex((obj => obj.id == id));
    if (index > -1) {
        _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees[index].name = name;
        _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees[index].surname = surname; 
    }
};







    

/***/ }),

/***/ "./employees/ui.js":
/*!*************************!*\
  !*** ./employees/ui.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addEmployeeUI": () => (/* binding */ addEmployeeUI),
/* harmony export */   "editEmployeeUI": () => (/* binding */ editEmployeeUI),
/* harmony export */   "openTab": () => (/* binding */ openTab),
/* harmony export */   "removeEmployeeUI": () => (/* binding */ removeEmployeeUI),
/* harmony export */   "runUI": () => (/* binding */ runUI),
/* harmony export */   "searchEmployeeUI": () => (/* binding */ searchEmployeeUI)
/* harmony export */ });
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service */ "./employees/service.js");
/* harmony import */ var _employees_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employees-json */ "./employees/employees-json.js");



function runUI() { 
    showEmployees(_employees_json__WEBPACK_IMPORTED_MODULE_1__["default"].employees);
    showEmployeesEdit(_employees_json__WEBPACK_IMPORTED_MODULE_1__["default"].employees);

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

function removeEmployeeUI(id) {
    (0,_service__WEBPACK_IMPORTED_MODULE_0__.removeEmployee)(id); 
    showEmployees(_employees_json__WEBPACK_IMPORTED_MODULE_1__["default"].employees);

    document.getElementById('managerSearch').innerHTML = "";
    fillSelect(document.getElementById("managerSearch"), getEmployeesOptions());
}

function showEmployees(employees) { 
    clearEmployeesPlaceholder(); 
    const ul = document.createElement("ul"); 
    
    for (let employee of employees) { 
        const li = document.createElement("li"); 
        ul.appendChild(li); 

        let managerHTML = ""; 
        if (employee.managerRef) { 
            let manager = (0,_service__WEBPACK_IMPORTED_MODULE_0__.findById)(employee.managerRef); 
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
            let manager = (0,_service__WEBPACK_IMPORTED_MODULE_0__.findById)(employee.managerRef); 
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

function addEmployeeUI() { 
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

    (0,_service__WEBPACK_IMPORTED_MODULE_0__.addEmployee)(name, surname); 
    showEmployees(_employees_json__WEBPACK_IMPORTED_MODULE_1__["default"].employees);
    
    const id = (0,_service__WEBPACK_IMPORTED_MODULE_0__.addEmployee)(name, surname); 
    const managerId = document.getElementById("managerSelect").value;
    (0,_service__WEBPACK_IMPORTED_MODULE_0__.setEmployeeManager)(id, Number(managerId));

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
    for (let e of _employees_json__WEBPACK_IMPORTED_MODULE_1__["default"].employees) { 
        options.push({text:e.name + ' ' + e.surname, value:e.id}); 
    } 
    return options; 
};

function searchEmployeeUI() { 
    let name = document.getElementById("nameSearch").value; 
    let surname = document.getElementById("surnameSearch").value; 
    const managerRef = document.getElementById("managerSearch").value;
    
    if (managerRef != '') {
        var e = document.getElementById("managerSearch");
        var text = e.options[e.selectedIndex].text;
        var manager = text.split(' ');
        name = manager[0];
        surname = manager[1];
    }
    
    const employees  = (0,_service__WEBPACK_IMPORTED_MODULE_0__.searchEmployees)(name, surname);
    showEmployees(employees); 
};

/** 
 * Activates the selected tab 
 * @param evt event invoking activation 
 * @param id tab identifier 
 */ 
function openTab(evt, id) { 
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
        showEmployeesEdit(_employees_json__WEBPACK_IMPORTED_MODULE_1__["default"].employees);
    }

    if (id === "searchPane") {        
        document.getElementById('managerSearch').innerHTML = "";
        fillSelect(document.getElementById("managerSearch"), getEmployeesOptions());

        document.getElementById('employeesPlaceholder').innerHTML = "";
        showEmployees(_employees_json__WEBPACK_IMPORTED_MODULE_1__["default"].employees);
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
    for (let e of _employees_json__WEBPACK_IMPORTED_MODULE_1__["default"].employees) { 
        if (e.id === id) {
            document.getElementById('idEdit').value = e.id;
            document.getElementById('nameEdit').value = e.name;
            document.getElementById('surnameEdit').value = e.surname; 
        } 
    }
}

function editEmployeeUI() {
    (0,_service__WEBPACK_IMPORTED_MODULE_0__.saveEmployee)();

    document.getElementById('employeesEditPlaceholder').innerHTML = "";
    showEmployeesEdit(_employees_json__WEBPACK_IMPORTED_MODULE_1__["default"].employees);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body { \r\n    font-family: Verdana; \r\n} \r\nbutton,input,select { \r\n    outline: none; \r\n    padding: 5px; \r\n    font-size: 12px; \r\n    background-color: #f1f1f1; \r\n    border: none; \r\n} \r\n.tab { \r\n    overflow: hidden; \r\n    border: 1px solid #ccc; \r\n    background-color: #f1f1f1; \r\n} \r\n \r\n/* Style for buttons used for opening content */ \r\n.tab button { \r\n    background-color: inherit; \r\n    border: none; \r\n    outline: none; \r\n    cursor: pointer; \r\n    padding: 10px; \r\n    transition: 1s; \r\n    font-size: 13px; \r\n    margin: 0px; \r\n} \r\n \r\n/* Change tab background with mouse pointer */ \r\n.tab button:hover { \r\n    background-color: #ddd; \r\n} \r\n \r\n/* Create class for active tab */ \r\n.tab button.active { \r\n    background-color: #fff; \r\n} \r\n \r\n/* Style for tab content */ \r\n.tabcontent { \r\n    display: none; \r\n    padding: 6px 12px; \r\n    border: 1px solid #ccc; \r\n    border-top: none; \r\n}\r\n\r\n#employeesPlaceholder {\r\n    margin-top: 50px; \r\n}\r\n\r\n#employeesPlaceholder button {\r\n    margin-left: 10px; \r\n}\r\n\r\n#employeesPlaceholder li {\r\n    margin-bottom: 10px; \r\n}", "",{"version":3,"sources":["webpack://./css/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;AACxB;AACA;IACI,aAAa;IACb,YAAY;IACZ,eAAe;IACf,yBAAyB;IACzB,YAAY;AAChB;AACA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,yBAAyB;AAC7B;;AAEA,+CAA+C;AAC/C;IACI,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,eAAe;IACf,aAAa;IACb,cAAc;IACd,eAAe;IACf,WAAW;AACf;;AAEA,6CAA6C;AAC7C;IACI,sBAAsB;AAC1B;;AAEA,gCAAgC;AAChC;IACI,sBAAsB;AAC1B;;AAEA,0BAA0B;AAC1B;IACI,aAAa;IACb,iBAAiB;IACjB,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;AACvB","sourcesContent":["body { \r\n    font-family: Verdana; \r\n} \r\nbutton,input,select { \r\n    outline: none; \r\n    padding: 5px; \r\n    font-size: 12px; \r\n    background-color: #f1f1f1; \r\n    border: none; \r\n} \r\n.tab { \r\n    overflow: hidden; \r\n    border: 1px solid #ccc; \r\n    background-color: #f1f1f1; \r\n} \r\n \r\n/* Style for buttons used for opening content */ \r\n.tab button { \r\n    background-color: inherit; \r\n    border: none; \r\n    outline: none; \r\n    cursor: pointer; \r\n    padding: 10px; \r\n    transition: 1s; \r\n    font-size: 13px; \r\n    margin: 0px; \r\n} \r\n \r\n/* Change tab background with mouse pointer */ \r\n.tab button:hover { \r\n    background-color: #ddd; \r\n} \r\n \r\n/* Create class for active tab */ \r\n.tab button.active { \r\n    background-color: #fff; \r\n} \r\n \r\n/* Style for tab content */ \r\n.tabcontent { \r\n    display: none; \r\n    padding: 6px 12px; \r\n    border: 1px solid #ccc; \r\n    border-top: none; \r\n}\r\n\r\n#employeesPlaceholder {\r\n    margin-top: 50px; \r\n}\r\n\r\n#employeesPlaceholder button {\r\n    margin-left: 10px; \r\n}\r\n\r\n#employeesPlaceholder li {\r\n    margin-bottom: 10px; \r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _employees_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employees/ui */ "./employees/ui.js");
/* harmony import */ var _employees_employee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employees/employee */ "./employees/employee.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/style.css */ "./css/style.css");




window.addEmployeeUI = _employees_ui__WEBPACK_IMPORTED_MODULE_0__.addEmployeeUI; 
window.openTab = _employees_ui__WEBPACK_IMPORTED_MODULE_0__.openTab; 
window.searchEmployeeUI = _employees_ui__WEBPACK_IMPORTED_MODULE_0__.searchEmployeeUI; 
window.editEmployeeUI = _employees_ui__WEBPACK_IMPORTED_MODULE_0__.editEmployeeUI;
window.removeEmployeeUI = _employees_ui__WEBPACK_IMPORTED_MODULE_0__.removeEmployeeUI;

(0,_employees_ui__WEBPACK_IMPORTED_MODULE_0__.runUI)();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map