// grab DOM elements

// set event listeners
const nameDisplay = document.getElementById('name-display');
const nameInput = document.getElementById('name-input');
const button = document.getElementById('update-button');
button.addEventListener('click', () => {
    console.log('i am clicking the button');
    console.log(nameDisplay);
    // nameDisplay.textContent = 'Julie';
    nameDisplay.textContent = nameInput.value;
    nameDisplay.style.color = 'red';
});
const pronounDisplay = document.getElementById('pronoun-display');
const pronounInput = document.getElementById('pronoun-input');
const updatePb = document.getElementById('update-pb');
updatePb.addEventListener('click', () => {
    console.log('i am clicking the button');
    console.log(pronounDisplay);
    pronounDisplay.textContent = pronounInput.value;
    pronounDisplay.style.color = 'black';
});
nameDisplay.addEventListener('keydown', () => {
    console.log('i am typing');
    console.log(nameDisplay);
    nameDisplay.textContent = nameInput.value;
});



