document.querySelector('.password-toggle').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const passwordToggleIcon = this.querySelector('img');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggleIcon.src = 'hide-password-icon.png'; // Add the correct path for the icon
        passwordToggleIcon.alt = 'Hide password';
    } else {
        passwordInput.type = 'password';
        passwordToggleIcon.src = 'show-password-icon.png'; // Add the correct path for the icon
        passwordToggleIcon.alt = 'Show password';
    }
});
