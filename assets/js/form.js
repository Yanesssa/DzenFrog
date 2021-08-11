const searchInputs = document.querySelectorAll('.form_input');
const buttonClear = document.querySelector('.form_clear');
const searchPlaceholders = document.querySelectorAll('.form_item_placeholder');



searchInputs.forEach(function(element) {
  element.addEventListener('input', function(event){
    let searchPlaceholder = element.nextElementSibling;
    if (event.target.value && !searchPlaceholder.classList.contains('active')) {
      searchPlaceholder.classList.add('active');
    } else if (!event.target.value && searchPlaceholder.classList.contains('active')) {
      searchPlaceholder.classList.remove('active');
    }
  });
});

buttonClear.addEventListener('click', function(event){
  event.preventDefault();
  searchInputs.forEach(function(element) {
    element.value = '';
  });
  searchPlaceholders.forEach(function(element) {
    element.classList.remove('active');
  });
});

