
const occupancyData = {
    "time-slot-1": 80,
    "time-slot-2": 50,
    "time-slot-3": 30,
    "time-slot-4": 60,
    "time-slot-5": 40,
    "time-slot-6": 20,
    "time-slot-7": 70,
    "time-slot-8": 45,
    "time-slot-9": 35
};

function showOccupancy(id) {
    const occupancyElement = document.getElementById(id);
    occupancyElement.querySelector('.occupancy').classList.add('active');
    const percentageElement = occupancyElement.querySelector('.percentage');
    const occupancyPercentage = occupancyData[id];
    percentageElement.textContent = occupancyPercentage + "% filled";
    if (occupancyPercentage >= 75) {
        percentageElement.classList.add('green');
    } else if (occupancyPercentage >= 40 && occupancyPercentage < 75) {
        percentageElement.classList.add('orange');
    } else {
        percentageElement.classList.add('red');
    }
}

function hideOccupancy(id) {
    document.getElementById(id).querySelector('.occupancy').classList.remove('active');
}

function toggleDropdown() {
        var dropdown = document.getElementById("dropdownContent");
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        } else {
            dropdown.style.display = "block";
        }
    }


