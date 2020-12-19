window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

//Template literal ES6 feature
const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>"
    const innerHtml = `${headerHtml}
    <tr>
        <td><img class="profile" alt="" src="../Assets//profile-images/Ellipse -3.png"></td>
        <td>Shubham lokhande</td>
        <td>Male</td>
        <td><div class='dept-label'>HR</div>
            <div class='dept-label'>Finance</div></td>
        <td>3000000</td>
        <td>1 Nov 2020</td>
        <td>
            <img id="1" onclick="remove(this)" alt="delete" src="../Assets/icons/delete-black-18dp.svg">
            <img id="1" alt="edit" onclick="update(this)" src="../Assets/icons/create-black-18dp.svg">
        </td>
    </tr>
`;
    document.querySelector('#table-display').innerHTML = innerHtml;
}