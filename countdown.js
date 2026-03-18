document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("countdown-section");
  if (!container) return;

  container.innerHTML = `
    <section class="countdown-section">
    <div class="countdown-wrapper">
      <h2 class="countdown-title">Conference starts in</h2>
      <div class="countdown">
        <div class="time-box">
          <span id="days">0</span>
          <p>DAYS</p>
        </div>
        <div class="time-box">
          <span id="hours">0</span>
          <p>HOURS</p>
        </div>
        <div class="time-box">
          <span id="minutes">0</span>
          <p>MINUTES</p>
        </div>
        <div class="time-box">
          <span id="seconds">0</span>
          <p>SECONDS</p>
        </div>
      </div>
    </section>
  `;

  const targetDate = new Date("2026-09-13T09:00:00").getTime();

  function pad(n) {
    return n.toString().padStart(2, "0");
  }

  function updateCountdown() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    const countdown = document.querySelector(".countdown");
    if (!countdown) return;

    if (diff <= 0) {
      countdown.innerHTML = `<p style="color:white;font-size:1.4rem;">Conference has started</p>`;
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = pad(hours);
    document.getElementById("minutes").textContent = pad(minutes);
    document.getElementById("seconds").textContent = pad(seconds);
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});