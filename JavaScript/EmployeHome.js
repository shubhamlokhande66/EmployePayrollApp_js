
let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
});

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ? 
            JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

//Template literal ES6 feature
const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    if(empPayrollList.length == 0) return;
    let innerHtml = `${headerHtml}`;
    for ( const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
        <tr>
            <td><img class="profile" alt="" src="${empPayrollData._picture}"></td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>${getDeptHtml(empPayrollData._department)}</td>
            <td>${empPayrollData._salary}</td>
            <td>${stringifyDate(empPayrollData._startDate)}</td>
            <td>
                <img id="${empPayrollData._name}" onclick="remove(this)" alt="delete" src="../Assets/icons/delete-black-18dp.svg">
                <img id="${empPayrollData._id}" onclick="update(this)" alt="edit" src="../Assets/icons/create-black-18dp.svg">
            </td>
        </tr>
    `;
    }
        document.querySelector('#table-display').innerHTML = innerHtml;
};

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
};

const remove = (node) => {
    let empPayrollData = empPayrollList.find(empData => empData._name == node.id);
    if (!empPayrollData) return;
    const index = empPayrollList.map(empData => empData._name).indexOf(empPayrollData._name);
    empPayrollList.splice(index, 1);
    localStorage.setItem("EmployeePayrollList", JSON.stringify(empPayrollList));
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
} 