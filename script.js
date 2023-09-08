// JavaScript to display current day of the week and update the current time in real-time
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dayOfWeekElement = document.getElementById("dayOfWeek");
const utcTimeElement = document.getElementById("utcTime");
const localTimeElement = document.getElementById("localTime");

// Function to format the time as HH:MM:SS
function formatTime(date) {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

function updateDateTime() {
  const today = new Date();
  const dayOfWeek = daysOfWeek[today.getUTCDay()];
  const utcTime = today.getTime();
  const localTime = formatTime(today);

  dayOfWeekElement.textContent = ` ${dayOfWeek}`;
  utcTimeElement.textContent = ` ${utcTime}`;
  localTimeElement.textContent = `Current Local Time: ${localTime}`;
}

// Update the date and time initially
updateDateTime();

// Update the date and time every second (1000 milliseconds)
setInterval(updateDateTime, 1000);
