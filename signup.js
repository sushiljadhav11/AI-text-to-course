document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.querySelector('.auth-form');

    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            // Prevent the form from submitting in the traditional way
            event.preventDefault();

            // Redirect to the login page after "signing up"
            console.log('Signup successful! Redirecting to login...');
            window.location.href = 'login.html';
        });
    }
});