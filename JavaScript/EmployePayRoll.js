let isUpdate = false;
let employeePayrollObj = {};

window.addEventListener('DOMContentLoaded', (event) => {
  const name = document.querySelector('#name');
  const textError = document.querySelector('.text-error');
  name.addEventListener('input', function () {
    if (name.value.length == 0) {
      textError.textContent = "";
      return;
    }
    try {
      (new EmployeePayrollData()).name = name.value;
      textError.textContent = "";
    } catch (e) {
      textError.textContent = e;
    }
  });


  const salary = document.querySelector('#salary');
  const output = document.querySelector('.salary-output');
  salary.addEventListener('input', function () {
    output.textContent = salary.value;
  });

  checkForUpdate();
});


const year = document.getElementById('year')
const month = document.getElementById('month')
const day = document.getElementById('day')
const dateError = document.querySelector('.date-error')
year.addEventListener('change', function () {
    try {
        dateValidation()
    } catch (e) { dateError.textContent = e }
});
month.addEventListener('change', function () {
    try {
        dateValidation()
    } catch (e) { dateError.textContent = e }
});
day.addEventListener('change', function () {
    try {
        dateValidation()
    } catch (e) { dateError.textContent = e }
});
function dateValidation() {
    let date = getInputValueById('#day') + " " + getInputValueById('#month') + " " +
        getInputValueById('#year')
    let newDate = Date.parse(date)
    let currDate = new Date()
    let miliDate = Date.parse(currDate) - 2592000000
    if (newDate < miliDate) {
        dateError.textContent = ""
        return
    } else throw 'Incorrect Date'
}


const save = () => {
  try {
    let employee = createEmployeePayroll();
    createAndUpdateStorage(employee);
  } catch (e) {
    alert(e);
  }
}

const checkForUpdate = () => {
  const employeePayrollJson = localStorage.getItem('editEmp');
  isUpdate = employeePayrollJson ? true : false;
  if (!isUpdate)
    return;
  employeePayrollObj = JSON.parse(employeePayrollJson);
  setForm();
}

const setForm = () => {
  setValue('#name', employeePayrollObj._name);
  setSelectedValues('[name=profile]', employeePayrollObj._profilePic);
  setSelectedValues('[name=gender]', employeePayrollObj._gender);
  setSelectedValues('[name=department]', employeePayrollObj._department);
  setValue('#salary', employeePayrollObj._salary);
  setTextValue('.salary-output', employeePayrollObj._salary);
  setValue('#notes', employeePayrollObj._note);
  let date = stringifyDate(employeePayrollObj._startDate).split(" ");
  let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].indexOf(date[1]);
  console.log(date[0]);
  if (date[0] < 10) {
    let num = date[0];
    num = num.toString();
    num = "0" + num;
    date[0] = num;
  }
  //console.log(date[0]);
  setValue('#day', date[0]);
  setValue('#month', month);
  setValue('#year', date[2]);
}

const resetForm = () => {
  setValue('#name', '');
  setTextValue('.text-error', "");
  unsetSelectedValues('[name=profile]');
  unsetSelectedValues('[name=gender]');
  unsetSelectedValues('[name=department]');
  setValue('#salary', '');
  setValue('#notes', '');
  setSelectedIndex('#day', '0');
  setSelectedIndex('#month', '0');
  setSelectedIndex('#year', '0');
  setTextValue('.date-error', '');
}

const createEmployeePayroll = () => {
  let employeePayrollData = new EmployeePayrollData();
  try {
    employeePayrollData.name = getInputValueById('#name');
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById('#notes');
    employeePayrollData.startDate = new Date(getInputValueById('#year'), getInputValueById('#month'),
      getInputValueById('#day'));
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if (employeePayrollList == undefined)
      employeePayrollData.id = 1;
    else employeePayrollData.id = employeePayrollList.length + 1;
    return employeePayrollData;
  } catch (error) {
    throw error;
  }
}

function createAndUpdateStorage(employeePayrollData) {
  let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
  if (employeePayrollList == undefined) {
    employeePayrollList = [employeePayrollData];
  } else {
    employeePayrollList.push(employeePayrollData);
  }
  alert(employeePayrollData.toString());
  localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList));
}

const getInputValueById = (id) => {
  let value = document.querySelector(id).value;
  //console.log("Date: " + value);
  return value;
}

const getSelectedValues = (propertyValue) => {
  let allItems = document.querySelectorAll(propertyValue);
  let selItems = [];
  allItems.forEach(item => {
    if (item.checked)
      selItems.push(item.value);
  });
  return selItems;
}

const unsetSelectedValues = (propertyValue) => {
  let allItems = document.querySelectorAll(propertyValue);
  allItems.forEach(item => {
    item.checked = false;
  });
}

const setSelectedValues = (propertyValue, value) => {
  let allItems = document.querySelectorAll(propertyValue);
  allItems.forEach(item => {
    if (Array.isArray(value)) {
      if (value.includes(item.value)) {
        item.checked = true;
      }
    }
    else if (item.value == value)
      item.checked = true;
  });
}

const setTextValue = (id, value) => {
  const element = document.querySelector(id);
  element.textContent = value;
}

const setValue = (id, value) => {
  const element = document.querySelector(id);
  element.value = value;
}

const setSelectedIndex = (id, index) => {
  const element = document.querySelector(id);
  element.selectedIndex = index;
}

