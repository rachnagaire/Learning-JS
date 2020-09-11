function validate() {
    var textboxName = document.getElementById('Name');
    var color = document.getElementById('color');
    var gender = document.getElementsByName('gender');
    var agree = document.getElementById('iAgree');
    var disagree = document.getElementById('disagree');
    var password = document.getElementById('password');
    var span = document.createElement("span");
    span.classList.add('text-danger');

    // span.innerHtml = "[your validation message]";
    // document.getElementById('validation-summary').appendChild(span);

    if (textboxName.value === "") {
        textboxName.parentElement.querySelector('.text-danger').hidden = false;


        appendSpan(span, 'Enter your Name');



    }
    if (color.value === "") {
        color.parentElement.querySelector('.text-danger').hidden = false;
        appendSpan(span, 'select your color');


    }
    if (gender[0].checked === false && gender[1].checked === false) {
        gender[0].parentElement.parentElement.parentElement.querySelector('.text-danger').hidden = false;
        appendSpan(span, 'select your gender');

    }
    if (agree.checked === false) {
        agree.parentElement.parentElement.parentElement.querySelector('.text-danger').hidden = false;
        appendSpan(span, 'check agree')

    }
    else
        agree.parentElement.querySelector('.text-danger').hidden = true;


    if (password.value === "") {
        password.parentElement.querySelector('.text-danger').hidden = false;
        appendSpan(span, 'Enter your password');

    }


}
function appendSpan(span, text) {
    var dupSpan = span.cloneNode(true);
    document.getElementById('validation-summary').appendChild(dupSpan);
    dupSpan.classList.add('d-block');
    dupSpan.innerHTML = text;

}

document.getElementById('submit').addEventListener('click', validate);
document.getElementById('Name').addEventListener('keyup', keyUp);
function keyUp() {
    var value = document.getElementById('Name').value;
    if (value === "") {
        document.getElementById("Name").parentElement.querySelector('.text-danger').hidden = false;
    }
    else
        document.getElementById("Name").parentElement.querySelector('.text-danger').hidden = true;

}
document.getElementById('color').addEventListener('change', color);

function color() {

    var value = document.getElementById('color').value;

    if (value === "1") {
        document.getElementById("color").parentElement.querySelector('.value').innerHTML = "Yellow";
    }
    else
        document.getElementById("color").parentElement.querySelector('.value').innerHTML = "green";


}
document.getElementsByName('gender')[0].addEventListener('change', function () {
    gender('m');
});
document.getElementsByName('gender')[1].addEventListener('change', function () {
    gender('f');
});

function gender(mOrF) {
    var gender = document.getElementsByName('gender');
    if (mOrF === 'm') {
        gender[0].parentElement.parentElement.parentElement.querySelector('.text-danger').hidden = true;
    }
    else {
        gender[1].parentElement.parentElement.parentElement.querySelector('.text-danger').hidden = true;

    }

}
document.getElementById('iAgree').addEventListener('change', function () {
    choice();
});
function choice() {
    var iAgree = document.getElementById('iAgree');
    if (iAgree.checked === true) {
        iAgree.parentElement.parentElement.parentElement.querySelector('.text-danger').hidden = true;

    }
    else {
        iAgree.parentElement.parentElement.parentElement.querySelector('.text-danger').hidden = false;

    }
}

document.getElementById('password').addEventListener('keyup', function () {
    password();
});
function password() {

    var password = document.getElementById('password');
    if (password.value === "") {
        password.parentElement.querySelector('.text-danger').hidden = false;
    }
    else {
        password.parentElement.querySelector('.text-danger').hidden = true;

    }
}


var textDanger = document.getElementsByClassName('text-danger');
for (var i = 0; i < textDanger.length; i++) {
    textDanger[i].hidden = true;
}


