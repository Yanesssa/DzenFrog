const carouselItems = document.querySelectorAll('.carousel_item');
const buttonLeft = document.querySelector('.carousel_button_left');
const buttonRight = document.querySelector('.carousel_button_right');
const carouselDots = document.querySelectorAll('.carousel_dot');
const accordionItems = document.querySelectorAll('.accordion_item');
const accordionButtons = document.querySelectorAll('.accordion_item_button');
let carouselIndex = 0;

showCarouselItem(0);


buttonLeft.addEventListener('click', function() {
  if (carouselIndex == 0) {
    return;
  } 

  carouselIndex -= 1;
  showCarouselItem(carouselIndex);
});

buttonRight.addEventListener('click', function() {
  if (carouselIndex == carouselItems.length - 1) {
    return;
  } 

  carouselIndex += 1;
  showCarouselItem(carouselIndex);
});

carouselDots.forEach(function(element, index) {
  element.addEventListener('click', function() {
    showCarouselItem(index);
    carouselIndex = index;
  })
});

accordionButtons.forEach(function(element) {
  element.addEventListener('click', function() {
    element.parentElement.classList.toggle('active');
  });
})

function showCarouselItem(index) {
  carouselItems.forEach(function(element) {
    element.classList.remove('active');
  });
  carouselDots.forEach(function(element) {
    element.classList.remove('active');
  })
  carouselItems[index].classList.add('active');
  carouselDots[index].classList.add('active');
}




