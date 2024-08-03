    document.getElementById("signup-form").addEventListener("submit", function(event) {
        event.preventDefault(); 

        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        document.getElementById("success-message").style.display = "block";

        setTimeout(function() {
            document.getElementById("signup-form").reset();
            document.getElementById("success-message").style.display = "none";
            window.location.href = "index.html"; 
        }, 2000);
    });

    var images = document.querySelectorAll('.scrolling-images img');
    var index = 0;

    setInterval(function() {
        images[index].classList.remove('active');
        index = (index + 1) % images.length;
        images[index].classList.add('active');
    }, 1000);