function setupNavigationClickListeners() {
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const id = item.id;

      if (id === 'navTyping') {
        window.playHapticNavigation();
        window.location.href = '../index.html';
      } else if (id === 'navUpgrade') {
        window.playHapticNavigation();
        window.location.href = '../upgrade/upgrade.html';
      } else if (id === 'navFriends') {
        // ignore
      } else if (id === 'navRewards') {
        window.playHapticNavigation();
        window.location.href = '../rewards/rewards.html';
      } else if (id === 'navCashout') {
        window.playHapticNavigation();
        window.location.href = '../cashout/cashout.html';
      }
    });
  });
}

window.onload = function () {
    setupNavigationClickListeners();
    
    document.getElementById('copy-btn').addEventListener('click', () => {
        const message = "Link copied";
        const icon = "../img/completed.svg"
        window.playHapticSuccess();
        showSnackbar(message, icon);
    });
};
