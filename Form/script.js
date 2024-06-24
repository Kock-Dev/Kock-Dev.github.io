const number = document.getElementById("number");
const pwd = document.getElementById("pwd");
const pwd2 = document.getElementById("pwd2");

function validate(item) {
    item.setCustomValidity('');
    item.checkValidity();

    if (item === pwd2){
        if (item.value === pwd.value) item.setCustomValidity('');
        else item.setCustomValidity('As senhas digitadas não são iguais. Verifique e corrija.');
    }
}

function maskTel() {
    let strnumber = number.value;
    if (strnumber.length == 2) {
        number.value += ") ";
        number.value = "(" + number.value;
    }
    if (strnumber.length == 10) number.value += "-";
}

number.addEventListener('input',  function () { maskTel() });
pwd.addEventListener('input',  function () { validate(pwd) });
pwd2.addEventListener('input',  function () { validate(pwd2) });