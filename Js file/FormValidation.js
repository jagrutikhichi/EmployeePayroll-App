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