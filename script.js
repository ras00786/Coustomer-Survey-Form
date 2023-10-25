// Selecting form and input elements
const form = document.querySelector("form");

const passToggleBtn = document.getElementById("pass-toggle-btn");

// Function to display error messages
const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
}

// Function to handle form submission
const handleFormData = (e) => {
    e.preventDefault();

    // Retrieving input elements
    const firstnameInput = document.getElementById("firstname");
    const lastnameInput = document.getElementById("lastname");
    const emailInput = document.getElementById("email");
    const dateInput = document.getElementById("date");
    const countryInput = document.getElementById("country");
    const phoneInput = document.getElementById("phone");

    // Getting trimmed values from input fields
    const firstname = firstnameInput.value.trim();
    const lastname = lastnameInput.value.trim();
    
    const email = emailInput.value.trim();
    
    const date = dateInput.value;
    const country = countryInput.value;
    const phone = phoneInput.value;
    // Regular expression pattern for email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const phonePattern = /^\d{10}$/;

    // Clearing previous error messages
    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

    // Performing validation checks
    if (firstname === "") {
        showError(firstnameInput, "Enter your first name");
    }
    if (lastname === "") {
        showError(lastnameInput, "Enter your last name");
    }
    if (!emailPattern.test(email)) {
        showError(emailInput, "Enter a valid email address");
    }
    if (date === "") {
        showError(dateInput, "Select your date of birth");
    }
    if (phone.length !== 10 || isNaN(phone)) {
        showError(phoneInput, "Phone number should be 10 digits");
    }
    

    // Checking for any remaining errors before form submission
    const errorInputs = document.querySelectorAll(".form-group .error");
    if (errorInputs.length > 0) return;

    // Submitting the form
    form.submit();
}

// phoneInput.addEventListener('input', (e) => {
//     if (phoneInput.value.length > 10) {
//         phonerInput.value = phoneInput.value.slice(0, 10);
//     }
// });

// Toggling password visibility


// Handling form submission event
form.addEventListener("submit", handleFormData);



const phoneInputforwords = document.getElementById("phone");
phoneInputforwords.addEventListener('input', (e) => {
    phoneInputforwords.value = phoneInputforwords.value.replace(/\D/g, '').slice(0, 10);
});


const phoneInput = document.getElementById("phone");
phoneInput.addEventListener('input', (e) => {
    if (phoneInput.value.length > 10) {
        phoneInput.value = phoneInput.value.slice(0, 10);
    }
});



const fullnameInput = document.getElementById("firstname");
fullnameInput.addEventListener('input', (e) => {
    fullnameInput.value = fullnameInput.value.replace(/[0-9]/g, '');
});


const lastnameInput = document.getElementById("lastname");
lastnameInput.addEventListener('input', (e) => {
    lastnameInput.value = lastnameInput.value.replace(/[0-9]/g, '');
});
