function enhanceImage(img) {
    var images = document.querySelectorAll('.credit-card-images img');
    images.forEach(function(image) {
      image.style.transform = 'scale(1)';
    });
    img.style.transform = 'scale(1.1)';
  }

  function validateAndRedirect() {
    const cardNumber = document.getElementById('cardNumber').value.trim();
    const expiryDate = document.getElementById('expiryDate').value.trim();
    const cvv = document.getElementById('cvv').value.trim();
    const cardHolderName = document.getElementById('cardHolderName').value.trim();
    const amount = document.getElementById('amount').value.trim();

    const cardNumberPattern = /^\d{16}$/;
    const expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const cvvPattern = /^\d{3}$/;
    const cardHolderNamePattern = /^[a-zA-Z\s]+$/;
    const amountPattern = /^Rs\d+$/;

    if (!cardNumberPattern.test(cardNumber)) {
      alert('Please enter a valid credit card number (16 digits).');
    } else if (!expiryDatePattern.test(expiryDate)) {
      alert('Please enter a valid expiry date (MM/YY).');
    } else if (!cvvPattern.test(cvv)) {
      alert('Please enter a valid CVV (3 digits).');
    } else if (!cardHolderNamePattern.test(cardHolderName)) {
      alert('Please enter a valid card holder\'s name (letters and spaces only).');
    } else if (!amountPattern.test(amount)) {
      alert('Please enter a valid amount (e.g., Rs1000).');
    } else {
      window.location.href="timer.html"; 
    }
  }

  const cvvInput = document.getElementById('cvv');

  cvvInput.addEventListener('input', function() {
    const cvvValue = this.value.trim();
    const cvvPattern = /^\d{3}$/;
    if (!cvvPattern.test(cvvValue)) {
      this.classList.add('error');
    } else {
      this.classList.remove('error');
    }
  });
  function toggleDropdown() {
    var dropdown = document.getElementById("dropdownContent");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
  }

