const apiUrl = 'http://localhost:3000/admissions';

async function fetchAdmissions() {
  const res = await fetch(apiUrl);
  const data = await res.json();
  document.getElementById('admissions').innerHTML = data.map(d => `
    <div class="record">
      <strong>Name:</strong> ${d.studentName}<br/>
      <strong>Address:</strong> ${d.address}<br/>
      <strong>Mob NO:</strong> ${d.phoneno}<br/>
      <strong>Course:</strong> ${d.course}<br/>
      <strong>Date:</strong> ${d.admissionDate}
    </div>
  `).join('');
}

async function addAdmission() {
  const body = getFormData();
  await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  fetchAdmissions();
}

async function updateAdmission() {
  const body = getFormData();
  await fetch(`${apiUrl}/${body.studentName}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  fetchAdmissions();
}

async function deleteAdmission() {
  const name = document.getElementById('studentName').value;
  await fetch(`${apiUrl}/${name}`, {
    method: 'DELETE'
  });
  fetchAdmissions();
}

function getFormData() {
  return {
    studentName: document.getElementById('studentName').value,
    address: document.getElementById('address').value,
    phoneno: document.getElementById('phoneno').value,
    course: document.getElementById('course').value,
    
    admissionDate: document.getElementById('admissionDate').value
  };
}

fetchAdmissions();
