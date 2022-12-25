// Get the slider element
const slider = document.querySelector('.slider');

// Add the left button
const leftButton = document.createElement('button');
leftButton.innerHTML = '<';
leftButton.classList.add('slider-button', 'slider-button-left');
slider.appendChild(leftButton);

// Add the right button
const rightButton = document.createElement('button');
rightButton.innerHTML = '>';
rightButton.classList.add('slider-button', 'slider-button-right');
slider.appendChild(rightButton);

// Get the list of categories
const categoriesList = document.querySelector('.slider ul');

// Slide the categories to the left when the left button is clicked
leftButton.addEventListener('click', () => {
  categoriesList.style.transform = 'translateX(-100%)';
});

// Slide the categories back to their original position when the right button is clicked
rightButton.addEventListener('click', () => {
  categoriesList.style.transform = 'translateX(0)';
});
