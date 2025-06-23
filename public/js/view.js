document.getElementById('fetchForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const date = e.target.date.value;
  const res = await fetch('/fetch', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ date }),
  });
  const data = await res.json();
  const container = document.getElementById('results');
  container.innerHTML = '';

  data.forEach(record => {
    const section = document.createElement('div');
    section.innerHTML = `<h3>${record.godam}</h3>`;
    const table = document.createElement('table');
    table.innerHTML = `
      <tr><th>Vehicle No</th><th>Location</th><th>Status</th></tr>
    `;
    record.entries.forEach(entry => {
      const tr = document.createElement('tr');
      const statusOptions = ['Arrived', 'Not Arrived', 'Offline']
        .map(s => `<option ${s === entry.status ? 'selected' : ''}>${s}</option>`).join('');
      tr.innerHTML = `
        <td>${entry.vehicleNo}</td>
        <td>${entry.location}</td>
        <td>
          <select onchange="updateStatus('${record.date}','${record.godam}','${entry.vehicleNo}', this.value)">
            ${statusOptions}
          </select>
        </td>
      `;
      table.appendChild(tr);
    });
    section.appendChild(table);
    container.appendChild(section);
  });
});

async function updateStatus(date, godam, vehicleNo, status) {
  await fetch('/updateStatus', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ date, godam, vehicleNo, status })
  });
}