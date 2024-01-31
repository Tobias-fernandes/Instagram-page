const togglePassword = document.getElementById('toggle');
const password = document.getElementById('password');

function showHide() {
    if(password.type === 'password') {
        password.setAttribute('type', 'text');
        togglePassword.innerHTML = "Hide";
    } else {
        password.setAttribute('type', 'password');
        togglePassword.innerHTML = "Show";
    }
}

password.addEventListener("keyup", (a) => {
    if(a.target.value) {
        togglePassword.style.display = 'block';
    } else {
        togglePassword.style.display = 'none';
    }
})