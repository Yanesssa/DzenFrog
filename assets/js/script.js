const headerButton = document.querySelector('.header_button');
const header = document.querySelector('.header');

headerButton.addEventListener('click', function(){
  header.classList.toggle('nav_opened');
});
