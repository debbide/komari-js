function updateTime() {
    const now = new Date();
    const timeDisplay = document.getElementById('clock');
    const dateDisplay = document.getElementById('date');

    // Format time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    timeDisplay.textContent = `${hours}:${minutes}`;

    // Format date
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    dateDisplay.textContent = now.toLocaleDateString('en-US', options);
}

// Update time immediately and then every second
updateTime();
setInterval(updateTime, 1000);

// Add a secret way to access the subscription link via console
console.log("%c Looking for something? Try fetching '/api/config'", "color: #38bdf8; font-size: 12px;");
