const events = [{
                name: "Sunburn",
                venue: "Pragati Maidan",
                timings: "6:00 PM - 9:00 PM",
                date: "2024-04-20",
                description: "Join us for an evening of music and fun at Central Park. Enjoy live performances by local artists.",
                image: "https://i.pinimg.com/736x/19/4a/50/194a50900dde2849c8fc5e7457219344.jpg",
                url: "event_registration.html"
            },
            {
                name: "Art Exhibition",
                venue: "Art Gallery",
                timings: "10:00 AM - 5:00 PM",
                date: "2024-04-18",
                description: "Explore the art of emerging and established artists in this stunning exhibition at the Art Gallery.",
                image: "https://png.pngtree.com/thumb_back/fh260/background/20230523/pngtree-an-art-exhibit-with-multiple-colorful-paintings-image_2672157.jpg",
                url: "event_registration.html"
            },
            {
                name: "Art Auction",
                venue: "Central Park",
                timings: "6:00 PM - 9:00 PM",
                date: "2024-04-20",
                description: "Join us for an evening of music and fun at Central Park. Enjoy live performances by local artists.",
                image: "https://c1.wallpaperflare.com/preview/458/874/460/art-exhibition-art-auction-painting.jpg",
                url: "event_registration.html"
            },
            {
                name: "Stand up Comedy",
                venue: "DLF Mall, New Delhi",
                timings: "10:00 AM - 5:00 PM",
                date: "2024-04-18",
                description: "Explore the art of emerging and established artists in this stunning exhibition at the Art Gallery.",
                image: "https://www.shutterstock.com/image-vector/comedy-show-theater-scene-red-600nw-1069556927.jpg",
                url: "event_registration.html"
            },
        ];

        // Function to display events in the webpage
        function displayEvents(events) {
            const eventContainer = document.getElementById('eventContainer');
            eventContainer.innerHTML = ''; // Clear previous content

            events.forEach(event => {
                // Create a link element for each event
                const eventLink = document.createElement('a');
                eventLink.href = event.url; // Set the URL for the link

                const eventSection = document.createElement('div');
                eventSection.className = 'event-section';

                // Append the event section to the link
                eventLink.appendChild(eventSection);

                // Create event details div
                const eventDetails = document.createElement('div');
                eventDetails.className = 'event-details';

                // Add event details
                const eventName = document.createElement('h2');
                eventName.className = 'event-name';
                eventName.textContent = event.name;
                eventDetails.appendChild(eventName);

                const venue = document.createElement('p');
                venue.className = 'venue';
                venue.textContent = `Venue: ${event.venue}`;
                eventDetails.appendChild(venue);

                const timings = document.createElement('p');
                timings.className = 'timings';
                timings.textContent = `Timings: ${event.timings}`;
                eventDetails.appendChild(timings);

                const description = document.createElement('p');
                description.className = 'description';
                description.textContent = event.description;
                eventDetails.appendChild(description);

                // Append event details to the event section
                eventSection.appendChild(eventDetails);

                // Create event image div
                const eventImage = document.createElement('div');
                eventImage.className = 'event-image';

                // Add event image
                const img = document.createElement('img');
                img.src = event.image;
                img.alt = event.name;
                eventImage.appendChild(img);

                // Append event image to the event section
                eventSection.appendChild(eventImage);

                // Append the link with the event section to the event container
                eventContainer.appendChild(eventLink);
            });
        }

        // Function to filter and sort events
        function filterEvents() {
            const filterOption = document.getElementById('filterOptions').value;

            let filteredEvents = events;

            // Sort based on the selected option
            if (filterOption === 'alphabetical') {
                // Sort events alphabetically by name
                filteredEvents = filteredEvents.sort((a, b) => a.name.localeCompare(b.name));
            } else if (filterOption === 'nearest-date') {
                // Sort events by nearest date
                filteredEvents = filteredEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
            }

            // Display the filtered and sorted events
            displayEvents(filteredEvents);
        }

        // Add event listener to the filter options
        document.getElementById('filterOptions').addEventListener('change', filterEvents);

        // Initial display of events
        displayEvents(events);

        function toggleDropdown() {
            var dropdown = document.getElementById("dropdownContent");
            if (dropdown.style.display === "block") {
                dropdown.style.display = "none";
            } else {
                dropdown.style.display = "block";
            }
        }