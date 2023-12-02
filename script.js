const countdownDisplay = document.getElementById("countdown-display");

function renderCountdown() {
  const christmas = 24;

  const today = new Date();
  const dayOfMonth = today.getDate();
  const daysTillChristmas = christmas - dayOfMonth;

  countdownDisplay.innerHTML = daysTillChristmas;
}

renderCountdown();
