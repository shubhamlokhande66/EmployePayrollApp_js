document.getElementById("submit").onclick = function() {
    let employee = new EmployeePayroll();
    employee.name = document.getElementById("name").value;
    employee.profilePic = document.querySelector('input[name = profile]:checked').value;
    employee.gender = document.querySelector('input[name = gender]:checked').value;
    employee.department = document.querySelector('input[name = department]:checked').value;
    employee.salary = document.getElementById("salary").value;
    employee.note = document.getElementById("notes").value;
    employee.startDate = new Date(parseInt(document.getElementById("year").value), parseInt(document.getElementById("month").value), parseInt(document.getElementById("day").value));
};