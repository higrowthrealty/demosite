document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("fomo-popup");
  const messages = [
    "🏡 John just booked a consultation!",
    "💼 Sarah closed a $1.2M deal!",
    "📅 New client scheduled a call!"
  ];

  let index = 0;

  function showPopup() {
    popup.textContent = messages[index];
    popup.style.display = "block";
    setTimeout(() => popup.style.display = "none", 3000);
    index = (index + 1) % messages.length;
  }

  setInterval(showPopup, 5000);
});
