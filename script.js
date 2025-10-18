const timeEl = document.getElementById("time");

function updateTime() {
  timeEl.textContent = Date.now();
}

updateTime(); // Show time when page loads

// Optional: Update every second
setInterval(updateTime, 1000);
