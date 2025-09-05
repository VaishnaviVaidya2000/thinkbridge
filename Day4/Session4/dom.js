document.addEventListener('DOMContentLoaded', () => {
  const studentForm = document.getElementById('studentForm');
  const rollInput = document.getElementById('rollInput');
  const nameInput = document.getElementById('nameInput');
  const studentList = document.getElementById('studentList');
  const totalEl = document.getElementById('total');
  const presentEl = document.getElementById('present');
  const absentEl = document.getElementById('absent');

  let students = [];

  // Add new student
  studentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const roll = rollInput.value.trim();
    const name = nameInput.value.trim();

    if (!roll || !name) return;

    // Avoid duplicate roll numbers
    if (students.some(s => s.roll == roll)) {
      alert("⚠️ Roll number already exists!");
      return;
    }

    const student = { roll, name, status: "Absent" };
    students.push(student);

    renderStudents();
    studentForm.reset();
  });

  // Render student list
  function renderStudents() {
    studentList.innerHTML = "";
    students.forEach((student, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${student.roll}</td>
        <td>${student.name}</td>
        <td>
          <span class="status">${student.status}</span><br>
          <button class="present">Present</button>
          <button class="absent">Absent</button>
        </td>
      `;

      // Present button
      tr.querySelector(".present").addEventListener("click", () => {
        students[index].status = "Present";
        renderStudents();
      });

      // Absent button
      tr.querySelector(".absent").addEventListener("click", () => {
        students[index].status = "Absent";
        renderStudents();
      });

      studentList.appendChild(tr);
    });

    updateSummary();
  }

  // Update summary counts
  function updateSummary() {
    const total = students.length;
    const presentCount = students.filter(s => s.status === "Present").length;
    const absentCount = total - presentCount;

    totalEl.textContent = total;
    presentEl.textContent = presentCount;
    absentEl.textContent = absentCount;
  }
});
