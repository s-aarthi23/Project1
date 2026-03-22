let students = [];
let editIndex = null;

const nameInput = document.getElementById('studentName');
const ageInput = document.getElementById('studentage');
const gradeInput = document.getElementById('studentgrade');
const courseInput = document.getElementById('studentcourse');
const tableBody = document.getElementById('studentTableBody');
const submitBtn = document.getElementById('submitBtn');

// Function to Render Table
function renderTable() {
    tableBody.innerHTML = "";
    students.forEach((student, index) => {
        const row = `
            <tr>
                <td>${student.age}</td>
                <td>${student.grade}</td>
                <td>${student.course}</td>
                <td>${student.name}</td>
                <td>
                    <button class="edit-btn" onclick="editStudent(${index})">Edit</button>
                    <button class="delete-btn" onclick="deleteStudent(${index})">Delete</button>
                </td>
            </tr>`;
        tableBody.innerHTML += row;
    });
}

// Add or Update Student
function addOrUpdateStudent() {
    const name = nameInput.value;
    const age = ageInput.value;
    const grade = gradeInput.value;
    const course = courseInput.value;

    if (!name || !age || !grade || !course) return alert("Please fill all fields");

    if (editIndex !== null) {
        // Update existing
        students[editIndex] = { name, age, grade, course };
        editIndex = null;
        submitBtn.innerText = "Add Student";
        submitBtn.style.background = "#2ecc71";
    } else {
        // Add new
        students.push({ name, age, grade, course });
    }

    nameInput.value = "";
    ageInput.value = "";
    gradeInput.value = "";
    courseInput.value = "";
    renderTable();
}

// Delete Student
function deleteStudent(index) {
    students.splice(index, 1);
    renderTable();
}

// Edit Student (Load data back to inputs)
function editStudent(index) {
    const student = students[index];
    nameInput.value = student.name;
    idInput.value = student.id;
    editIndex = index;
    submitBtn.innerText = "Update Student";
    submitBtn.style.background = "#f1c40f";
}