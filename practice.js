document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('contactForm');
    const feedbackDiv = document.getElementById('formFeedback');

    const validateForm = () => {
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            return 'All fields are required.';
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            return 'Please enter a valid email address.';
        }

        return null;
    };

    form?.addEventListener('submit', (event) => {
        event.preventDefault();
        const errorMessage = validateForm();

        if (errorMessage) {
            feedbackDiv.textContent = errorMessage;
            feedbackDiv.style.color = 'red';
        } else {
            feedbackDiv.textContent = 'Thank you for your message!';
            feedbackDiv.style.color = 'green';
            form.reset();
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById('registerForm');
    const registerFeedback = document.getElementById('registerFeedback');
    const loginForm = document.getElementById('loginForm');
    const loginFeedback = document.getElementById('loginFeedback');
    const toggleForm = document.getElementById('toggleForm');

    // Function to handle registration
    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = registerForm.name.value.trim();
            const email = registerForm.email.value.trim();
            const password = registerForm.password.value.trim();
            const confirmPassword = registerForm.confirmPassword.value.trim();

            if (!name || !email || !password || !confirmPassword) {
                registerFeedback.textContent = 'All fields are required.';
                registerFeedback.style.color = 'red';
            } else if (password !== confirmPassword) {
                registerFeedback.textContent = 'Passwords do not match.';
                registerFeedback.style.color = 'red';
            } else {
                registerFeedback.textContent = 'Registration successful! Logging you in...';
                registerFeedback.style.color = 'green';
                // Simulate successful registration and automatic login
                setTimeout(() => {
                    loginFeedback.textContent = 'Login successful!';
                    loginFeedback.style.color = 'green';
                    registerForm.reset();
                    loginForm.reset();
                    loginForm.style.display = 'block';
                    registerForm.style.display = 'none';
                }, 1000); // Simulate a delay for login
            }
        });
    }

    // Function to handle login
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = loginForm.username.value.trim();
            const password = loginForm.loginPassword.value.trim();

            if (!username || !password) {
                loginFeedback.textContent = 'Both fields are required.';
                loginFeedback.style.color = 'red';
            } else {
                loginFeedback.textContent = 'Login successful!'; // Replace with actual login logic
                loginFeedback.style.color = 'green';
            }
        });
    }

    // Toggle between login and register forms
    toggleForm.addEventListener('click', (event) => {
        event.preventDefault();
        if (loginForm.style.display === 'none') {
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
        } else {
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
        }
    });
});
