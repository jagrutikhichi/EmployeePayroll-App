window.addEventListener('DOMContentLoaded', (event) => {
    validateName();
    validateDate();
    SalaryOutput();
});

//UC-2 To add eventListener to salary and to validate name and date
function validateName() {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;
            textError.textContent = "";
        } catch (e) {
            console.log(e);
            textError.textContent = e;
        }
    });
}

function SalaryOutput() {
    const salary = document.querySelector('#salary');
    const salaryOutput = document.querySelector('.salary-output');
    salary.addEventListener('input', function() {
        salaryOutput.textContent = salary.value;
        console.log(salaryOutput.textContent);
    });
}

function validateDate() {
    const day = document.querySelector('#day');
    const month = document.querySelector('#month');
    const year = document.querySelector('#year');
    const dateerror = document.querySelector('.date-error');

    day.addEventListener('input', checkDate);
    month.addEventListener('input', checkDate);
    year.addEventListener('input', checkDate);

}

function checkDate() {
    console.log("checking date");
    const dateerror = document.querySelector('.date-error');
    try {
        let date = day.value + " " + month.value + " " + year.value;
        (new EmployeePayrollData()).startDate = Date.parse(date);
        dateerror.textContent = " ";
    } catch (e) {
        dateerror.textContent = e;
    }

}

//UC-3 To create EmployeePayroll Object on Save
const save = () => {
    try {
        let employeePayrollData = createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);

    } catch (e) {
        console.log(e);
        return;
    }
}

const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();

    try {
        employeePayrollData.name = getInputValueId('#name');
        let date = getInputValueId('#day') + " " + getInputValueId('#month') + " " + getInputValueId('#year');
        employeePayrollData.startDate = Date.parse(date);
    } catch (e) {
        console.log(e)
        setTextValue('.text-error', e);
        throw e;
    }
    employeePayrollData.profilePic = getSelectedValue('[name = profile]').pop();
    employeePayrollData.gender = getSelectedValue('[name = gender]').pop();
    employeePayrollData.department = getSelectedValue('[name = department]');
    employeePayrollData.salary = getInputValueId('#salary');
    employeePayrollData.note = getInputValueId('#notes');
    console.log(employeePayrollData);

    return employeePayrollData;
}

const getInputValueId = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const getSelectedValue = (propertyValue) => {
    let allItem = document.querySelectorAll(propertyValue);
    let setItem = [];
    allItem.forEach(item => {
        if (item.checked) {
            setItem.push(item.value);
        }
    });
    return setItem;
}

const setTextValue = (id, message) => {
    const textError = document.querySelector(id);
    textError.textContent = message;
}

//UC-4 To save Employee Payroll Object to Local Storage
const createAndUpdateStorage = (data) => {
    let dataList = JSON.parse(localStorage.getItem("EmployeePayrollList"));

    if (dataList != undefined) {
        dataList.push(data);
    } else {
        dataList = [data];
    }

    localStorage.setItem("EmployeePayrollList", JSON.stringify(dataList));
    alert("data stored with name : " + data.name);

}

//UC-5 To reset the form on Clicking reset
const resetForm = () => {
    setValue('#name', '');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary', ' ');
    setTextValue(".salary-output", '400000');
    setTextValue('#text-error', ' ');
    setValue('#notes', ' ');
    setValue('#day', '1');
    setValue('#month', 'Jan');
    setValue('#year', '2020');
}
const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => { item.checked = false; });
}
const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}