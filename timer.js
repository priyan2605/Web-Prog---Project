window.onload = function() {
    var countdownDisplay = document.getElementById('countdown');
    var paymentProcessDisplay = document.getElementById('payment-process');
    var paymentCompletedDisplay = document.getElementById('payment-completed');
    var gifContainer = document.getElementById('gif-container');
    var body = document.body;

    function countdown() {
      var count = 3;
      var countdownInterval = setInterval(function() {
        count--;
        countdownDisplay.textContent = count;

        if (count === 0) {
          clearInterval(countdownInterval);
          countdownDisplay.style.display = 'none';
          paymentProcessDisplay.style.display = 'none';
          gifContainer.style.display = 'block';
          paymentCompletedDisplay.style.display = 'block';
          body.style.backgroundImage = "url('https://www.shutterstock.com/image-photo/mobile-banking-network-online-payment-260nw-1431394361.jpg')";
          
          setTimeout(function() {
            window.location.href = "index.html"; 
          }, 3000);
        }
      }, 1000);
    }

    countdown();
  };