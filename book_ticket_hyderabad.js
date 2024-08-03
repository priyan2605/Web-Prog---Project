var cityName = sessionStorage.getItem('cityName');
        if (cityName) {
            document.getElementById('cityName').innerText = cityName;
        }

        document.querySelectorAll('nav a').forEach(function(el) {
            el.addEventListener('click', function() {
                var lang = this.getAttribute('href').substring(1);
                document.querySelectorAll('.container').forEach(function(container) {
                    container.style.display = 'none';
                });
                document.getElementById(lang).style.display = 'block';
            });
        });

        function toggleDropdown() {
        var dropdown = document.getElementById("dropdownContent");
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        } else {
            dropdown.style.display = "block";
        }
        }