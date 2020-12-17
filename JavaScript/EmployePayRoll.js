window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });
});

const salary = document.getElementById("salary");
        const output = document.getElementById("salary-output");
        output.innerHTML = salary.value;
        salary.oninput = function () {
            output.innerHTML = this.value;
        }

        