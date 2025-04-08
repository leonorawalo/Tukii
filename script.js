document.addEventListener('DOMContentLoaded', function() {
    const rideForm = document.getElementById('rideForm');
    const passengersList = document.getElementById('passengers');

    rideForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const destination = document.getElementById('destination').value;

        if (destination === "") {
            alert("Please select a destination.");
            return;
        }

        const listItem = document.createElement('li');
        listItem.textContent = `${name} - Destination: ${destination}`;
        passengersList.appendChild(listItem);

        // Clear the form
        document.getElementById('name').value = '';
        document.getElementById('destination').value = '';
    });
});
