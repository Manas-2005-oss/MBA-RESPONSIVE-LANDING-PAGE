document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const country = document.getElementById("country").value;

        if (name === "" || email === "" || phone === "" || country === "") {
            alert("Please fill in all fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!validatePhone(phone)) {
            alert("Please enter a valid phone number.");
            return;
        }

        alert("Form submitted successfully!");
        form.reset();
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function validatePhone(phone) {
        const phonePattern = /^[0-9]{10,15}$/;
        return phonePattern.test(phone);
    }
});
