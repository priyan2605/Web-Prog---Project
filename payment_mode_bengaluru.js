function calculateTotalAmount() {
    var totalAmount = 0;
    var table = document.querySelector('table');
    var rows = table.querySelectorAll('tbody tr');

    rows.forEach(function(row) {
      var price = parseInt(row.cells[2].textContent);
      totalAmount += price;
    });

    var sgstAmount = (5 / 100) * totalAmount;
    var cgstAmount = (5 / 100) * totalAmount;
    var totalAmountWithTax = totalAmount + sgstAmount + cgstAmount;

    document.getElementById('sgst').textContent = 'SGST: 5% (' + sgstAmount.toFixed(2) + ' INR)';
    document.getElementById('cgst').textContent = 'CGST: 5% (' + cgstAmount.toFixed(2) + ' INR)';
    document.getElementById('totalAmount').textContent = totalAmountWithTax.toFixed(2);
  }

  calculateTotalAmount();

  function toggleDropdown() {
    var dropdown = document.getElementById("dropdownContent");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
  }
