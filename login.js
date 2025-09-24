document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.auth-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            // Prevent the form from submitting in the traditional way
            event.preventDefault();

            // Redirect to the main chat page after "logging in"
            console.log('Login successful! Redirecting to chat...');
            window.location.href = 'index.html';
        });
    }
});