    // Sample booked seats data (you can replace this with actual data from previous page)
    let bookedSeats = [
        { seat: 'A1', price: 10 },
        { seat: 'B5', price: 15 }
        // Add more booked seats as needed
    ];

    // Sample beverage options data
    const beverageOptions = [
        { name: 'Pepsi', price: 150, image:'https://i.pinimg.com/originals/0f/63/94/0f639447141945b7f65a646e50203f79.jpg'},
        { name: 'Popcorn(Small)', price: 250, image: 'https://media.istockphoto.com/id/497857462/photo/popcorn-in-bucket.jpg?s=612x612&w=0&k=20&c=16mUWDBsQt4EpO-k3C-OqLiDfuigkawrxS1C6Y0cQuM=' },
        { name: 'Popcorn(Medium)', price: 350, image: 'https://media.s-bol.com/nglDZ0opY1GW/482x840.jpg' },
        { name: 'Popcorn(Large)', price: 500, image: 'https://www.100daysofrealfood.com/wp-content/uploads/2011/06/popcorn1.jpg' },
        { name: 'Cheese Popcorn', price: 650, image: 'https://www.sharmispassions.com/wp-content/uploads/2022/09/CheesePopcorn2.jpg' },
        { name: 'Nachos', price: 450, image: 'https://www.seriouseats.com/thmb/YBUAG17xy1nWYGPmFcJKeoODTzk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cheese-sauce-for-cheese-fries-and-nachos-hero-01-e6ccf966688c43ec8025cf9a19678423.jpg' },
        { name: 'Paneer Cheese Sandwich', price: 550, image: 'https://madscookhouse.com/wp-content/uploads/2022/06/Grilled-Paneer-Sandwich.jpg' },
        { name: 'Chicken Tikka Sandwich', price: 650, image: 'https://i.ytimg.com/vi/0Vj0Bl8QNjk/maxresdefault.jpg' },
        { name: 'Grilled Chicken Burger', price: 700, image: 'https://saltedmint.com/wp-content/uploads/2024/01/Grilled-Chicken-Burgers-2.jpg' },
        { name: 'Grilled Veg Burger', price: 600, image: 'https://juicenmore.in/wp-content/uploads/2020/09/Veg-Grilled-Burger_2.jpg' },
        { name: 'Peri-Peri Chicken Pizza', price: 900, image: 'https://www.highonchicken.com/wp-content/uploads/2023/07/image52-1.png' },
        { name: 'Paneer Tikka Pizza', price: 750, image: 'https://www.hotelnewsme.com/wp-content/uploads/2020/07/Dominos-Pizza-Tikka.jpg' },

    ];

    const bookingTableBody = document.getElementById('booking-table-body');
    const beverageContainer = document.getElementById('beverage-container');
    const totalPriceElement = document.getElementById('total-price');

    // Function to display booked seats in the table
    function displayBookedSeats() {
        bookingTableBody.innerHTML = '';
        bookedSeats.forEach((item, index) => {
            const row = `<tr>
                            <td>${index + 1}</td>
                            <td>${item.seat}</td>
                            <td>Rs.${item.price}</td>
                            <td><button onclick="removeBooking(${index})">Remove</button></td>
                        </tr>`;
            bookingTableBody.innerHTML += row;
        });
        updateTotalPrice();
    }

    // Function to display beverage options
    function displayBeverageOptions() {
        beverageContainer.innerHTML = '';
        beverageOptions.forEach(item => {
            const beverageItem = document.createElement('div');
            beverageItem.classList.add('beverage-item');
            beverageItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" onclick="addBeverage('${item.name}', ${item.price})">
                <p>${item.name}</p>
                <p>Rs.${item.price}</p>
            `;
            beverageContainer.appendChild(beverageItem);
        });
    }

    // Function to add beverage to the table
    function addBeverage(name, price) {
        const index = bookedSeats.length + 1;
        bookedSeats.push({ seat: name, price: price });
        displayBookedSeats();
    }

    // Function to remove booking from the table
    function removeBooking(index) {
        bookedSeats.splice(index, 1);
        displayBookedSeats();
    }

    // Function to continue to payment
    function continueToPayment() {
        window.location.href = 'payment_mode_chennai.html';
    }

    // Function to update total price
    function updateTotalPrice() {
        const totalPrice = bookedSeats.reduce((acc, current) => acc + current.price, 0);
        totalPriceElement.textContent = `Total Price: Rs.${totalPrice}`;
    }

    // Initial display
    displayBookedSeats();
    displayBeverageOptions();

    function toggleDropdown() {
    var dropdown = document.getElementById("dropdownContent");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

