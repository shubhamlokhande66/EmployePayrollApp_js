/*    const createEmployeePayrollJSON = () => { 
    let empPayrollListLocal = [
        {
            _name:'Shubham Dilip Lokhande',
            _gender:'male',
            _department:[
                'Engineering','Hr'
            ],
            _salary:'500000',
            _startDate:'7 July 2020',
            _note:'',
            _id:new Date().getTime(),
            _profilePic:'../assets/c.png'
        },
        {
            _name:'Namrata Lokhande',
            _gender:'female',
            _department:[
                'Engineering','Sale'
            ],
            _salary:'500000',
            _startDate:'25 Aug 2020',
            _note:'',
            _id:new Date().getTime(),
            _profilePic:'../assets/cwp2.png'
        }
    ]
    return empPayrollListLocal
} */
let empPayrollList
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmpPayrollDataFromStorage()
    document.querySelector(".emp-count").textContent = empPayrollList.length
    createInnerHtml()
    localStorage.removeItem('editEmp')
})

function getEmpPayrollDataFromStorage() {
    return localStorage.getItem('EmployeePayrollList') ? 
                JSON.parse(localStorage.getItem('EmployeePayrollList')) : []
}

function createInnerHtml() {
    const headerHtml = `<tr><th></th><th>Name</th><th>Gender</th><th>Department</th>
        <th>Salary</th><th>start Date</th><th>Actions</th></tr>` 
    if(empPayrollList.length == 0) return   
    let innerHtml = `${headerHtml}`
    for(let empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
        <tr>
        <td><img src="${empPayrollData._profilePic}" class="profile" width="30px" alt=""></td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>${getDeptHtml(empPayrollData._departent)}</td>
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData.date}</td>
        <td>
            <img id="1" name="${empPayrollData._id}" onclick="remove(this)" alt="delete" width="30px" src="../assets/delete.webp">
            <img id="1" name="${empPayrollData._id}" onclick="update(this)" alt="edit" width="30px" src="../assets/edit.webp">
        </td>
    </tr>`
    }
    document.querySelector('#display').innerHTML = innerHtml
}
function getDeptHtml(deptList) {
    let deptHtml = ''
    for(const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml
}