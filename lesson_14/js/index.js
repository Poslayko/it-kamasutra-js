
function addErrorClass(elementId){
    var firstName = document.getElementById('first-name');
    var lastName = document.getElementById('last-name');
    var address = document.getElementById('address');
}

function addErrorClass(elementId){
    var element = document.getElementById(elementId);
    element.className = 'error-input';
}

function addErrorClassToAllInputs(){
    addErrorClass('first-name');
    addErrorClass('last-name');
    addErrorClass('address');
}

var sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', onSendButtonClick);

function onSendButtonClick(){
    addErrorClass('last-name');
}

function onFirstNameKeyup(){
    addErrorClass('first-name');
}

var firstNameEl = document.getElementById('first-name');

firstNameEl.addEventListener('keyup', onFirstNameKeyup);