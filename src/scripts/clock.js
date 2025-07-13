// src/scripts/clock.js

function updateClock() {
    const now = new Date();
    const clockDiv = document.getElementById('clock');
    
    // Format time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Format date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = now.toLocaleDateString('en-US', options);

    // Update DOM
    clockDiv.innerHTML = `
        <div class="time">${hours}:${minutes}:${seconds}</div>
        <div class="date">${date}</div>
    `;
}

// Update clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);

// Add click animation
document.getElementById('clock').addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 100);
});