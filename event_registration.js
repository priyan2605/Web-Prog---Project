const form = document.getElementById('registrationForm');
        const successMessage = document.getElementById('successMessage');

        // Add an event listener for form submission
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the form from submitting the traditional way

            // Show the success message
            successMessage.style.display = 'block';

            // Redirect to another webpage after 2 seconds
            setTimeout(function () {
                window.location.href = 'event_payment.html'; // Change the URL to your desired webpage
            }, 2000); // Redirect after 2 seconds
        });
        function toggleDropdown() {
         var dropdown = document.getElementById("dropdownContent");
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        } else {
            dropdown.style.display = "block";
        }
    }