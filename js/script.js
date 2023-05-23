const pw = document.getElementById('pw');
const pwConfirm = document.getElementById('pw-confirm');
// pw.addEventListener('keypress', checkError());
// pwConfirm.addEventListener('keypress', checkError());

pw.onkeyup = function() {
    console.log(pw.value);
    console.log(pwConfirm.value);
    if (pw.value === '' || pwConfirm.value === '') {
        pw.classList.remove('error');
        pwConfirm.classList.remove('error');
    } else if (pw.value != pwConfirm.value) {
        pw.classList.add('error');
        pwConfirm.classList.add('error');
    } else {
        pw.classList.remove('error');
        pwConfirm.classList.remove('error');
    }   
}

pwConfirm.onkeyup = function() {
    console.log(pw.value);
    console.log(pwConfirm.value);
    if (pw.value === '' || pwConfirm.value === '') {
        pw.classList.remove('error');
        pwConfirm.classList.remove('error');
    } else if (pw.value != pwConfirm.value) {
        pw.classList.add('error');
        pwConfirm.classList.add('error');
    } else {
        pw.classList.remove('error');
        pwConfirm.classList.remove('error');
    }   
}