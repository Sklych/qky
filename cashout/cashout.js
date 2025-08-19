function setupNavigationClickListeners() {
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const id = item.id;

      if (id === 'navTyping') {
        if (navigator.vibrate) {
          navigator.vibrate(50);
        }
        window.location.href = '../index.html';
      } else if (id === 'navUpgrade') {
        if (navigator.vibrate) {
          navigator.vibrate(50);
        }
        window.location.href = '../upgrade/upgrade.html';
      } else if (id === 'navFriends') {
        if (navigator.vibrate) {
          navigator.vibrate(50);
        }
        window.location.href = '../friends/friends.html';
      } else if (id === 'navRewards') {
        if (navigator.vibrate) {
          navigator.vibrate(50);
        }
        window.location.href = '../rewards/rewards.html';
      } else if (id === 'navCashout') {
        // ignore
      }
    });
  });
}

function openConfirmWithdrawlFlow() {
  const container = document.getElementById("withdrawContainer");
  const withdrawSheet = document.getElementById("withdrawSheet");
  const withdrawOverlay = document.getElementById("withdrawOverlay");
  const closeBtn = document.getElementById("withdrawClose")
  const withdrawBtn = document.getElementById("withdrawBtn")

  function open() {
    container.classList.add("active");
    withdrawSheet.classList.add("active");
    withdrawOverlay.classList.add("active");
  }

  function close() {
    container.classList.remove("active");
    withdrawSheet.classList.remove("active");
    withdrawOverlay.classList.remove("active");
  }

  open();

  withdrawOverlay.addEventListener("click", () => {
    close();
  })

  closeBtn.addEventListener("click", () => {
    close();
  })

  withdrawBtn.addEventListener("click", () => {
    close();
  })
}

function openWithdrawlNotAvailableFlow() {
  const container = document.getElementById("withdrawNotAvailableContainer");
  const withdrawSheet = document.getElementById("withdrawNotAvailableSheet");
  const withdrawOverlay = document.getElementById("withdrawNotAvailableOverlay");
  const closeBtn = document.getElementById("withdrawNotAvailableClose")
  const withdrawBtn = document.getElementById("withdrawNotAvailableBtn")
  const levelText = document.getElementById("withdrawNotAvailableLevel")
  const progress = document.getElementById("withdrawNotAvailableProgress");

  function open() {
    container.classList.add("active");
    withdrawSheet.classList.add("active");
    withdrawOverlay.classList.add("active");
    progress.style.width = `80%`
    levelText.textContent = ` Level loyalty: 5`;
  }

  function close() {
    container.classList.remove("active");
    withdrawSheet.classList.remove("active");
    withdrawOverlay.classList.remove("active");
    progress.style.width = `0%`
  }

  open();

  withdrawOverlay.addEventListener("click", () => {
    close();
  })

  closeBtn.addEventListener("click", () => {
    close();
  })

  withdrawBtn.addEventListener("click", () => {
    close();
  })
}

window.onload = function () {
  setupNavigationClickListeners();

  document.getElementById("withdraw-tg-btn").addEventListener("click", () => {
    openWithdrawlNotAvailableFlow()
  })

  document.getElementById("withdraw-external-btn").addEventListener("click", () => {
    if (window.appConfig.insideMiniApp && navigator.vibrate) {
      navigator.vibrate(50);
    }
    window.location.href = "../connect-external-wallet/connect-external-wallet.html";
  })

  document.getElementById("viewInBlockChainText").addEventListener("click", () => {
    if (window.appConfig.insideMiniApp) {
      Telegram.WebApp.openLink("https://tonviewer.com/EQDde3w4YGvwyLci1IWtC2COwFj63dnI-b7QbPolGD7_oO6S", true);
    } else {
      window.open('https://tonviewer.com/EQDde3w4YGvwyLci1IWtC2COwFj63dnI-b7QbPolGD7_oO6S', '_blank');
    }
  })
}