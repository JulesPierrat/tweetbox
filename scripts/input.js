/**
 * Function that count and verivy the length of the input
 * @param {DOM Element} e 
 */
function countNumberOfLetter(e){
    // get the length of the input
    var length = e.value.length;

    // set the text
    document.getElementById('message_length').innerHTML = length+"/"+LENGTH_MESSAGE;

    // if 10/10
    if (length > LENGTH_MESSAGE) {
        document.getElementById('message_length').style.color = "red";
        document.getElementById('submit').style.display = "none";
    } else {
        document.getElementById('message_length').style.color = "black";
        document.getElementById('submit').style.display = "block";
    }
}

/**
 * Function that check if a photo is added
 * @param {Event} e 
 */
function isPhotoAdded(e) {
    if (e.currentTarget.checked) {
        LENGTH_MESSAGE = 5;
        document.getElementById('label-checkbox').innerHTML = "Photo ajoutée !"
        countNumberOfLetter(document.getElementById('message-input'));
    } else {
        LENGTH_MESSAGE = 10;
        document.getElementById('label-checkbox').innerHTML = "Ajouter une photo ?"
        countNumberOfLetter(document.getElementById('message-input'));
    }
}