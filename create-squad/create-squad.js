window.onload = function () {
  console.log(`telegram version ${window.appConfig.telegramWebApp.version}, versionAtLeast ${window.versionAtLeast(window.appConfig.telegramWebApp.version, '6.1')}`)
  if (window.appConfig.telegramWebApp && window.versionAtLeast(window.appConfig.telegramWebApp.version, '6.1')) {
    window.appConfig.telegramWebApp.BackButton.show();
    window.appConfig.telegramWebApp.BackButton.onClick(() => {
      window.appConfig.telegramWebApp.BackButton.hide();
      window.history.back();
    });
  } else {
    const backBtn = document.getElementById("backBtn");
    backBtn.style.display = 'flex'
    backBtn.addEventListener("click", () => {
      window.history.back();
    })
  }

  const input = document.querySelector(".create-squad-input");

  document.getElementById("create-squad-btn").addEventListener("click", () => {
    const squadTitle = input.value.trim()
    if (!squadTitle || squadTitle.length < 3) {
      const message = "Squad title must be at least 3 characters";
      const icon = "../img/error.svg"
      const duration = 1200;
      window.playHapticError();
      showSnackbar(message, icon, duration);
    } else if (squadTitle.length > 30) {
      const message = "Squad title cannot exceed 30 characters";
      const icon = "../img/error.svg"
      const duration = 1200;
      window.playHapticError();
      showSnackbar(message, icon, duration);
    } else {
      // success
    }
  })
}