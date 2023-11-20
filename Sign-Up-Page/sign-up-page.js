const formElement = document.querySelector(".form-container")
const signUp = document.querySelector(".submit");

function validateEmail(email) {
    // Add email validation logic here
    return email !== "";
}

function validateUsername(username) {
    return username !== "";
}

function validatePassword(password) {
    return password !== "";
}

// Add similar functions for other fields

signUp.addEventListener("click", (event) => {
    event.preventDefault();

    const email = formElement.email.value;
    const username = formElement.username.value;
    const password = formElement.password.value;
    const confirmPassword = formElement.confirmPassword.value;

    if (!validateEmail(email)) {
        alert("Please fill out the required Email field!");
    } else if (!validateUsername(username)) {
        alert("Please fill out the required Username field!");
    } else if (!validatePassword(password)) {
        alert("Please fill out the required Password field!");
    } else if (password !== confirmPassword) {
        alert("Passwords do not match!");
    } else {
        formElement.reset();
    }
});
