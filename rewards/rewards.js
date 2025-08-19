function setupNavigationClickListeners() {
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const id = item.id;

      if (id === 'navTyping') {
        window.location.href = '../main/index.html';
      } else if (id === 'navUpgrade') {
        window.location.href = '../upgrade/upgrade.html';
      } else if (id === 'navFriends') {
        window.location.href = '../friends/friends.html';
      } else if (id === 'navRewards') {
        // ignore
      } else if (id === 'navCashout') {
        window.location.href = '../cashout/cashout.html';
      }
    });
  });
}

function countDownTimer(timerElement) {
  const raceEndUTC = 1755349642000 + 10_00_000_000;

  function updateTimer() {
    const now = Date.now();
    const diff = raceEndUTC - now;
    console.log(diff)

    if (diff <= 0) {
      location.reload();
      return;
    }

    let seconds = Math.floor(diff / 1000);
    let days = Math.floor(seconds / (3600 * 24));
    seconds %= 3600 * 24;

    let hours = Math.floor(seconds / 3600);
    seconds %= 3600;

    let minutes = Math.floor(seconds / 60);
    seconds %= 60;

    let parts = [];
    if (days > 0) parts.push(days + "d");
    if (hours > 0) parts.push(hours + "h");
    if (minutes > 0) parts.push(minutes + "m");
    if (seconds >= 0) parts.push(seconds + "s");

    timerElement.textContent = parts.join(" ");
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

window.onload = function () {
  setupNavigationClickListeners();

  document.getElementById("openSquadBtn").addEventListener("click", () => {
    if (window.appConfig.insideMiniApp && navigator.vibrate) {
        navigator.vibrate(50);
    }
    window.location.href = "../squad/squad.html";
  })

  document.getElementById("createSquadBtn").addEventListener("click", () => {
    if (window.appConfig.insideMiniApp && navigator.vibrate) {
        navigator.vibrate(50);
    }
    window.location.href = "../create-squad/create-squad.html";
  })

  // squad
  countDownTimer(document.getElementById("squad-down-timer-text"));
  // referral
  countDownTimer(document.getElementById("referrals-down-timer-text"));
  // users
  countDownTimer(document.getElementById("users-down-timer-text"));
}