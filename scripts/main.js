// VAR
var LENGTH_MESSAGE = 10;

// add event on textbox
document.getElementById('message-input').addEventListener('input', e => {
    countNumberOfLetter(e.currentTarget);
});

// add event on checkbox
document.getElementById('photo-checkbox').addEventListener('change', e => {
    isPhotoAdded(e);
});