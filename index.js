document.addEventListener("DOMContentLoaded", () => {
  const currentTimeElement = document.querySelector(
    '[data-testid="currentTimeUTC"]'
  );
  const currentDayElement = document.querySelector(
    '[data-testid="currentDay"]'
  );

  function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().slice(-12, -4);
    currentTimeElement.textContent = `Current Time (UTC): ${utcTime}`;
  }

  function updateDay() {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const now = new Date();
    const day = daysOfWeek[now.getUTCDay()];
    currentDayElement.textContent = `Current Day: ${day}`;
  }

  updateTime();
  updateDay();
  setInterval(updateTime, 60000); // Update time every minute
});
