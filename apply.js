document.addEventListener("DOMContentLoaded", function() {
        const form = document.querySelector('form');
        const nameField = document.querySelector('input[name="name"]');
        const emailField = document.querySelector('input[name="email"]');
        const experienceField = document.querySelector('input[type="number"]');
        const cvField = document.querySelector('input[name="cv"]');
        const resumeField = document.querySelector('input[name="resume"]');
        const reasonField = document.querySelector('input[type="text"]');
        const termsCheckbox = document.querySelector('input[type="checkbox"]');
        const submitButton = document.querySelector('button');
    
        // Function to validate email
        function validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    
        // Event listener for form submission
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevewnts the form from submitting
    
            // Validate name
            if (nameField.value.trim() === "") {
                alert("Please enter your full name.");
                nameField.focus();
                return;
            }
    
            // Validate email
            if (!validateEmail(emailField.value)) {
                alert("Please enter a valid email address.");
                emailField.focus();
                return;
            }
    
            // Validate experience
            if (experienceField.value === "" || experienceField.value <= 0 || experienceField.value > 20) {
                alert("Please enter a valid number of years of experience (1-20).");
                experienceField.focus();
                return;
            }
    
            // Validate CV upload
            if (cvField.value === "") {
                alert("Please upload your CV.");
                cvField.focus();
                return;
            }
    
            // Validate resume upload
            if (resumeField.value === "") {
                alert("Please upload your resume.");
                resumeField.focus();
                return;
            }
    
            // Validate reason for leaving last job
            if (reasonField.value.trim() === "") {
                alert("Please provide a reason for leaving your last job.");
                reasonField.focus();
                return;
            }
    
            // Validate terms and conditions checkbox
            if (!termsCheckbox.checked) {
                alert("Please accept the terms and conditions.");
                termsCheckbox.focus();
                return;
            }
    
            // If all validations pass
            alert("Your application has been successfully submitted!");
            form.submit();  // Submits the form
        });
    });