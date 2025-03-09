// fetchSlots.js

const getSlotsList = async () => {
    try {
        const response = await fetch(`http://localhost:9098/api/v1/token/EPASS3003/slots`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        displaySlots(data.slotList); // Now using data.slotList to get the list of slots
    } catch (error) {
        console.error('Error fetching slots list:', error);
        document.getElementById('slots').innerText = 'Error fetching data. Please check the console for details.';
    }
};

const displaySlots = (slots) => {
    const slotsDiv = document.getElementById('slots');
    slotsDiv.innerHTML = ''; // Clear previous data

    if (Array.isArray(slots) && slots.length > 0) {
        slots.forEach(slot => {
            const slotItem = document.createElement('div');
            slotItem.textContent = `Slot ID: ${slot.slotId}, Name: ${slot.name}`; // Display slot ID and name
            slotsDiv.appendChild(slotItem);
        });
    } else {
        slotsDiv.innerText = 'No slots available.';
    }
};

// Add event listener to button
document.getElementById('fetchSlotsButton').addEventListener('click', getSlotsList);