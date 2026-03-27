// Create heading
const h1 = document.createElement('h1');
h1.textContent = 'Table Filter';
h1.style.textAlign = 'center';
document.body.appendChild(h1);

// Create search input
const input = document.createElement('input');
input.type = 'text';
input.id = 'searchInput';
input.placeholder = 'Search...';
input.style.cssText = `
  display: block;
  margin: 20px auto;
  padding: 8px;
  width: 200px;
`;
document.body.appendChild(input);

// Create table
const table = document.createElement('table');
table.id = 'myTable';
table.style.cssText = `
  border-collapse: collapse;
  width: 60%;
  margin: 20px auto;
`;

// Create table header
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
['Name', 'Country', 'Age'].forEach(text => {
  const th = document.createElement('th');
  th.textContent = text;
  th.style.cssText = `
    border:1px solid #333;
    padding:8px;
    text-align:center;
  `;
  headerRow.appendChild(th);
});
thead.appendChild(headerRow);
table.appendChild(thead);

// Create table body
const tbody = document.createElement('tbody');
const data = [
  ['Ali', 'Afghanistan', '25'],
  ['Sara', 'Iran', '30'],
  ['John', 'USA', '28'],
  ['Nafisa', 'Afghanistan', '22'],
  ['Maria', 'Spain', '35']
];

// Add rows to table body
data.forEach(rowData => {
  const tr = document.createElement('tr');
  rowData.forEach(cellData => {
    const td = document.createElement('td');
    td.textContent = cellData;
    td.style.cssText = `
      border:1px solid #333;
      padding:8px;
      text-align:center;
    `;
    tr.appendChild(td);
  });
  tbody.appendChild(tr);
});
table.appendChild(tbody);
document.body.appendChild(table);

// Filter logic
input.addEventListener('input', () => {
  const filter = input.value.toLowerCase();
  const rows = tbody.getElementsByTagName('tr');

  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName('td');
    let match = false;

    // Check each cell in the row
    for (let j = 0; j < cells.length; j++) {
      if (cells[j].textContent.toLowerCase().includes(filter)) {
        match = true;
        break;
      }
    }

    // Show row if match found, otherwise hide
    rows[i].style.display = match ? '' : 'none';
  }
});
