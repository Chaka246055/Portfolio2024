document.addEventListener("DOMContentLoaded", function() {
 let menuIcon = document.getElementById('menu-icon');
 let navbar = document.querySelector('.navbar');

 menuIcon.addEventListener('click', function() {
     menuIcon.classList.toggle('bx-x');
     navbar.classList.toggle('active');
 });
});


document.addEventListener("DOMContentLoaded", function() {
 const form = document.getElementById('contact-form');

 form.addEventListener('submit', function(event) {
     event.preventDefault(); // Prevent default form submission

     // Perform form validation
     if (validateForm()) {
         // Form is valid, proceed with form submission
         
         console.log('Form submitted successfully');
         form.reset(); // Reset the form after successful submission
     } else {
         // Form is not valid, display error messages or handle validation errors
         console.log('Form validation failed');
     }
 });

 function validateForm() {
     const fullName = document.getElementById('fullName').value.trim();
     const email = document.getElementById('email').value.trim();
     const subject = document.getElementById('subject').value.trim();
     const message = document.getElementById('message').value.trim();

     // Basic validation checks
     if (fullName === '' || email === '' || subject === '' || message === '') {
         "Please enter a proper email address"
         alert('All fields are required');
         return false; // Form is not valid
     }

     // Additional validation checks for email format
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailRegex.test(email)) {
         alert('Invalid email address');
         return false; // Form is not valid
     }

     return true; // Form is valid
 }
});
