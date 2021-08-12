let employeePayrollList;

//(Day-45) UC-4 To display EmployeePayrollDetails in Tabular Format using Template Literals
window.addEventListener('DOMContentLoaded', (event) => {
    console.log("Called Event");
    employeePayrollList = getDataFromLocalStorage();
    document.querySelector('.emp-count').textContent = employeePayrollList.length;
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<tr><th></th><th>Name</th> <th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>"
        //const empPayrollDataList = createEmployeePayrollJSON ();
    let innerHtml = `${headerHtml}`;
    for (let empPayrollData of employeePayrollList) {
        innerHtml = `${innerHtml}

<tr>
    <td><img src="${empPayrollData._profilePic}"></td>
    <td>${empPayrollData._name}</td>
    <td>${empPayrollData._gender}</td>
    <td>
        ${getDepatmentHtml(empPayrollData._department)}
        <!-- <div class="dept-label">${empPayrollData._department[0]}"</div>
         <div class="dept-label">${empPayrollData._department[1]}"</div> -->
    </td >
    <td>${empPayrollData._salary}</td>
    <td>${empPayrollData._startDate}</td>
    <td>
        <img name="${empPayrollData._id}" src="../assets/icons/delete-black-18dp.svg" alt="Delete" onclick="remove(this)">
        <img name="${empPayrollData._id}" src="../assets/icons/create-black-18dp.svg" alt="Edit" onclick="update(this)">
    </td>
</tr>`;
        document.querySelector('#display').innerHTML = innerHtml;
    }
}

//(Day-45) UC-5 To display Employee details from JSON object
const getDepatmentHtml = (data) => {
    let deptHtml = '';
    for (let dept of data) {
        deptHtml = `${deptHtml}<div class ='dept-label'>${dept}</div>`;
    }
    return deptHtml;
}

const createEmployeePayrollJSON = () => {
    const empPayrolllistLocal = [{
            _id: new Date().getTime,
            _name: "Narayan Mahadevan",
            _gender: 'Male',
            _department: [
                'Engineer',
                'Finance'
            ],
            _salary: 500000,
            _startDate: '29 Oct 2019',
            _note: '',
            _profilePic: '../assets/profile-images/Ellipse -2.png'
        },
        {
            _id: new Date().getTime,
            _name: "Neha Sharma",
            _gender: 'Female',
            _department: [
                'Sales',
                'Finance'
            ],
            _salary: 500000,
            _startDate: '19 Oct 2019',
            _note: '',
            _profilePic: "../assets/profile-images/Ellipse -7.png"
        }
    ]
    return empPayrolllistLocal;
}

//(Day-45) UC-6 To display data from Local Storage
const getDataFromLocalStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ?
        JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}