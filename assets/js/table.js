const tableBody = document.querySelector('.table_body');
const searchButton = document.querySelector('.table_search_icon');
const searchInput = document.querySelector('.table_search_input');
const tableHeadRow = document.querySelector('.table_head_row');
const searchPlaceholder = document.querySelector('.table_search_placeholder');
const tableSelect = document.querySelector('.table_select');

function insertTableRow(element) {
  let tableRow = document.createElement('tr');
  tableRow.className = 'table_row';
  tableBody.appendChild(tableRow);

  let rowId = document.createElement('td');
  rowId.className = 'table_id table_cell';
  rowId.setAttribute('data-label', 'id');
  rowId.innerHTML = element.id;

  tableRow.appendChild(rowId)

  let rowName = document.createElement('td');
  rowName.className = 'table_name table_cell';
  rowName.setAttribute('data-label', 'Название');
  rowName.innerHTML = element.name;

  tableRow.appendChild(rowName);

  let rowHabitat = document.createElement('td');
  rowHabitat.className = 'table_habitat table_cell';
  rowHabitat.setAttribute('data-label', 'Описание');
  rowHabitat.innerHTML = element.habitat;

  tableRow.appendChild(rowHabitat);

  let rowDescriptionText = document.createElement('p');
  rowDescriptionText.className = 'table_description_text';
  rowDescriptionText.innerHTML = element.description;

  let rowDescription = document.createElement('td');
  rowDescription.className = 'table_description table_cell';
  rowDescription.setAttribute('data-label', 'Описание');

  rowDescription.appendChild(rowDescriptionText);
  tableRow.appendChild(rowDescription);

  tableBody.appendChild(tableRow);
}

tableData.forEach(insertTableRow);

searchButton.addEventListener('click', function(){
  let searchValue = searchInput.value;
  let filteredTableData = tableData.filter(function(element){
    if (element.name.indexOf(searchValue) > -1) {
      return true;
    } else {
      return false;
    }
  });
  showTableRow(filteredTableData);
  if (filteredTableData == 0) {
    tableBody.innerHTML = `<br>По Вашему запросу такой лягушки не найдено (︶︹︺)`;
  }
});

tableSelect.addEventListener('change', function(){
  // console.log(tableSelect.value);
  if (tableSelect.value == 'Все регионы') {
    showTableRow(tableData);
    return;
  }

  let filteredTable = tableData.filter(function(element) {
    return element.habitat == tableSelect.value;
  });
  // console.log(filteredTable);
  showTableRow(filteredTable);
})

function showTableRow(array) {
  tableBody.innerHTML = '';
  array.forEach(insertTableRow);
}

searchInput.addEventListener('input', function(event){
  console.log(event.target.value);
  if (event.target.value && !searchPlaceholder.classList.contains('active')) {
    searchPlaceholder.classList.add('active');
  } else if (!event.target.value && searchPlaceholder.classList.contains('active')) {
    searchPlaceholder.classList.remove('active');
  }
});


