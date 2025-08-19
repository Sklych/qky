function setupNavigationClickListeners() {
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const id = item.id;

      if (id === 'navTyping') {
        window.location.href = '../main/index.html';
      } else if (id === 'navUpgrade') {
        // ignore
      } else if (id === 'navFriends') {
        window.location.href = '../friends/friends.html';
      } else if (id === 'navRewards') {
        window.location.href = '../rewards/rewards.html';
      } else if (id === 'navCashout') {
        window.location.href = '../cashout/cashout.html';
      }
    });
  });
}


window.onload = function() {
    setupNavigationClickListeners();
}