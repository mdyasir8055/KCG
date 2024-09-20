function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const visibilityIcon = document.querySelector('.visibility-icon');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        visibilityIcon.src = 'http://b.io/ext_7-';
        visibilityIcon.alt = 'Hide password';
    } else {
        passwordInput.type = 'password';
        visibilityIcon.src = 'https://cdn.builder.io/api/v1/image/assets/TEMP/48034c3e990ee0f6bf7715d95ae9b0495afb93260ef4e9074292e8b95c5ed126?placeholderIfAbsent=true&apiKey=0cb4874f90d4433e882ff02a5c63238a';
        visibilityIcon.alt = 'Show password';
    }
}
