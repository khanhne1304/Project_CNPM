document.querySelector('.register-link a').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = "login.html"; 
});

const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const passwordHints = document.getElementById('password-hints');

passwordInput.addEventListener('focus', function() {
    passwordHints.style.display = 'block'; 
});

passwordInput.addEventListener('blur', function() {
    passwordHints.style.display = 'none'; 
});

confirmPasswordInput.addEventListener('input', function() {
    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordInput.setCustomValidity("Not match!"); 
        confirmPasswordInput.setCustomValidity(""); 
    }
});
