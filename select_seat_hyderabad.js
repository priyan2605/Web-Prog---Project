const seatPrices = {
        A1: 10,
        A2: 10,
        A3: 15,
        A4: 15,
        A5: 20,
        A6: 20,
        A7: 25,
        A8: 25,
        A9: 15,
        A10: 15,
        A11: 20,
        A12: 20,
        A13: 10,
        B1: 10,
        B2: 10
        // Add more seats and prices as needed
    };

    // Initialize an array to store selected seats
    let selectedSeats = [];

    // Function to toggle seat selection
    function toggleSeatSelection(seatId) {
        const seat = document.getElementById(seatId);
        if (seat.classList.contains('booked')) {
            alert("Seat already booked");
            return;
        }
        if (seat.classList.contains('selected')) {
            seat.classList.remove('selected');
            removeSelectedSeat(seatId);
        } else {
            seat.classList.add('selected');
            updateSelectedSeatsList();
        }
    }

    // Function to update selected seats list
    function updateSelectedSeatsList() {
        const selectedSeatsContainer = document.getElementById('selectedSeats');
        selectedSeatsContainer.innerHTML = ''; // Clear existing content
        selectedSeats = []; // Clear selected seats array
        document.querySelectorAll('.seat.selected').forEach(seat => {
            const seatId = seat.id;
            selectedSeats.push(seatId);
            let seatDiv = document.createElement('div');
            seatDiv.className = 'selected-seat';
            seatDiv.textContent = seatId + ' ($' + seatPrices[seatId] + ')';
            seatDiv.addEventListener('click', () => removeSelectedSeat(seatId));
            selectedSeatsContainer.appendChild(seatDiv);
        });
        // Update total price
        updateTotalPrice();
    }

    // Function to remove selected seat
    function removeSelectedSeat(seatId) {
        const seat = document.getElementById(seatId);
        seat.classList.remove('selected');
        updateSelectedSeatsList();
    }

    // Function to update total price
    function updateTotalPrice() {
        const totalPrice = selectedSeats.reduce((acc, seatId) => acc + seatPrices[seatId], 0);
        const totalPriceContainer = document.getElementById('totalPrice');
        totalPriceContainer.textContent = 'Total Price: $' + totalPrice;
    }

    function goToNextPage() {
        window.location.href = 'ticket_bill_hyderabad.html'; 
    }

    function toggleDropdown() {
    var dropdown = document.getElementById("dropdownContent");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
    }
