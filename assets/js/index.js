const body = document.querySelector('.body');
const descriptionButton = document.querySelector('.description_button');
const popup = document.querySelector('.popup');

descriptionButton.addEventListener('click', function(){
  popup.classList.add('popup_active');
  body.classList.add('popup_active');
  popup.addEventListener('click', function(){
    popup.classList.remove('popup_active');
    body.classList.remove('popup_active');
  });
});


