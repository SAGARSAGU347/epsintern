document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("signup-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        
        let firstName = document.getElementById("first-name").value.trim();
        let lastName = document.getElementById("last-name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phoneNumber = document.getElementById("phone-number").value.trim();
        let password = document.getElementById("password").value;

        let errors = [];
        
        if (!firstName) {
            errors.push("First Name is required.");
        }
        if (!lastName) {
            errors.push("Last Name is required.");
        }
        if (!validateEmail(email)) {
            errors.push("Please enter a valid email address.");
        }
        if (!validatePhoneNumber(phoneNumber)) {
            errors.push("Please enter a valid phone number (at least 10 digits).");
        }
        if (password.length < 8) {
            errors.push("Password must be at least 8 characters.");
        }

        if (errors.length > 0) {
            document.getElementById("error-messages").innerText = errors.join("\n");
        } else {
            document.getElementById("error-messages").innerText = "";
            let formData = {
                first_name: firstName,
                last_name: lastName,
                email: email,
                phone_number: phoneNumber,
                password: password
            };
            console.log(formData);
        }
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }

    function validatePhoneNumber(phoneNumber) {
        return phoneNumber.length >= 10 && !isNaN(phoneNumber);
    }
});
