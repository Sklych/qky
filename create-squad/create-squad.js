window.onload = function () {
  if (window.appConfig.telegramWebApp) {
    window.appConfig.telegramWebApp.BackButton.show();
    window.appConfig.telegramWebApp.BackButton.onClick(() => {
      if (navigator.vibrate) {
        navigator.vibrate(50);
      }
      window.appConfig.telegramWebApp.BackButton.hide();
      window.history.back();
    });
  }

  const input = document.querySelector(".create-squad-input");

  document.getElementById("create-squad-btn").addEventListener("click", () => {
    const squadTitle = input.value.trim()
    if (!squadTitle || squadTitle.length < 3) {
      const message = "Squad title must be at least 3 characters";
      const icon = "../img/error.svg"
      const duration = 1200;
      showSnackbar(message, icon, duration);
    } else if (squadTitle.length > 30) {
      const message = "Squad title cannot exceed 30 characters";
      const icon = "../img/error.svg"
      const duration = 1200;
      showSnackbar(message, icon, duration);
    } else {
      // success
    }
  })
}