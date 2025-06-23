document.getElementById('addRow').addEventListener('click', () => {
  const container = document.getElementById('entries');
  const div = document.createElement('div');
  div.className = 'entry-row';
  div.innerHTML = `
    <input name="vehicleNo" placeholder="Vehicle No" required>
    <input name="location" placeholder="Location" required>
    <label><input type="radio" name="status${Date.now()}" value="Arrived"> Arrived</label>
    <label><input type="radio" name="status${Date.now()}" value="Not Arrived" checked> Not Arrived</label>
    <label><input type="radio" name="status${Date.now()}" value="Offline"> Offline</label>
  `;
  container.appendChild(div);
});

document.getElementById('updateForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const date = form.date.value;
  const godam = form.godam.value;
  const rows = document.querySelectorAll('.entry-row');
  const entries = Array.from(rows).map(row => {
    const vehicleNo = row.querySelector('input[name="vehicleNo"]').value;
    const location = row.querySelector('input[name="location"]').value;
    const status = row.querySelector('input[type="radio"]:checked').value;
    return { vehicleNo, location, status };
  });
  const res = await fetch('/updateData', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ date, godam, entries }),
  });
  alert(await res.text());
});