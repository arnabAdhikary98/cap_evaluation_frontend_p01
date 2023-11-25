document.getElementById("doctorForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value
  const doctorId = document.getElementById("doctor_id").value
  const specialization = document.getElementById("specialization").value
  const experience = parseInt(document.getElementById("experience").value, 10)
  const email = document.getElementById("email").value
  const mobile = document.getElementById("mobile").value

  let role;
  if (experience > 5) 
  {
    role = "Senior"
  } 
  else if (experience >= 2 && experience <= 5) 
  {
    role = "Junior"
  } 
  else 
  {
    role = "Trainee"
  }

  const table = document.getElementById("doctorTable").getElementsByTagName("tbody")[0]
  const newRow = table.insertRow(table.rows.length)

  const cells = [name, doctorId, specialization, experience, email, mobile, role]

  for (let i = 0; i < cells.length; i++) 
  {
    const cell = newRow.insertCell(i)
    cell.innerHTML = cells[i]
  }

  const deleteCell = newRow.insertCell(cells.length)
  const deleteButton = document.createElement("button")
  deleteButton.setAttribute('id','delete__button')
  deleteButton.innerHTML = "Delete"
  deleteButton.addEventListener("click", function () 
  {
    const table = document.getElementById("doctorTable");
    table.deleteRow(deleteButton.closest('tr').rowIndex);
  })
  deleteCell.appendChild(deleteButton)

  document.getElementById("doctorForm").reset()
})

document.getElementById("filter").addEventListener("change", function () {
  const filterValue = this.value
  const rows = document.getElementById("doctorTable").getElementsByTagName("tbody")[0].getElementsByTagName("tr")

  for (let i = 0; i < rows.length; i++) {
    const specializationCell = rows[i].getElementsByTagName("td")[2]

    if (filterValue === "" || specializationCell.innerHTML === filterValue) {
      rows[i].style.display = ""
    } else {
      rows[i].style.display = "none"
    }
  }
})