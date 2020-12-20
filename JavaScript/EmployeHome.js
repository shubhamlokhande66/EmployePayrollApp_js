window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

//Template literal ES6 feature
const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
    for ( const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
        <tr>
            <td><img class="profile" alt="" src="${empPayrollData._profilePic}"></td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>${getDeptHtml(empPayrollData._department)}</td>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._startDate}</td>
            <td>
                <img id="1" onclick="remove(this)" alt="delete" src="../Assets/icons/delete-black-18dp.svg">
                <img id="1" alt="edit" onclick="update(this)" src="../Assets/icons/create-black-18dp.svg">
            </td>
        </tr>
    `;
    }
        document.querySelector('#table-display').innerHTML = innerHtml;
}

const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Shubham Lokhande',
            _gender: 'male',
            _department: [
                'Engineering',
                'Finance'
            ],
            _salary: '6000000',
            _startDate: '21 Aug 2019',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../Assets/profile-images/Ellipse -3.png'
        },
        {
            _name: 'Prajwal Lokahnde',
            _gender: 'male',
            _department: [
                'Engineering',
                'Sales'
            ],
            _salary: '5000000',
            _startDate: '18 May 2020',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: '../Assets/profile-images/Ellipse -2.png'
        },
        {
            _name: 'Namrata Lokhande',
            _gender: 'female',
            _department: [
                'Engineering',
                'Hr'
            ],
            _salary: '10000000',
            _startDate: '05 Oct 2020',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: '../Assets/profile-images/Ellipse -1.png'
        }
    ];
    return empPayrollListLocal;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}