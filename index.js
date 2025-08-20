function setupNavigationClickListeners() {
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const id = item.id;

      if (id === 'navTyping') {
        // ignore
      } else if (id === 'navUpgrade') {
        window.playHapticNavigation();
        window.location.href = 'upgrade/upgrade.html';
      } else if (id === 'navFriends') {
        window.playHapticNavigation();
        window.location.href = 'friends/friends.html';
      } else if (id === 'navRewards') {
        window.playHapticNavigation();
        window.location.href = 'rewards/rewards.html';
      } else if (id === 'navCashout') {
        window.playHapticNavigation();
        window.location.href = 'cashout/cashout.html';
      }
    });
  });
}

setupNavigationClickListeners();

function setKeyLightColor(color) {
  document.querySelectorAll('.key').forEach(key => {
    key.style.boxShadow = `0 0 20px ${color}, 0 10px 30px rgba(0,0,0,.35)`;
  });
}

window.onload = function () {

  setupNavigationClickListeners()
  setTimeout(() => {
    setKeyLightColor('rgba(255, 0, 0, 0.6)');
  }, 2000);

  // Example usage: change to green after 4 seconds
  setTimeout(() => {
    setKeyLightColor('rgba(0, 255, 0, 0.6)');
  }, 4000);
};
