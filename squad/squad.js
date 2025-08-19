window.onload = function () {
    if (window.appConfig.insideMiniApp) {
        Telegram.WebApp.BackButton.show();
        Telegram.WebApp.BackButton.onClick(() => {
            if (navigator.vibrate) {
                navigator.vibrate(50);
            }
            Telegram.WebApp.BackButton.hide();
            window.history.back();
        });
    }

    document.getElementById('delete-user-btn').addEventListener("click", () => {
        console.log('click')
        showDialog({
            title: "Delete Squad",
            description: "Are you sure you want to remove User from the SQUAD?",
            primaryText: "Remove",
            primaryStyle: "negative",
            onPrimary: (dialog) => {
                console.log("Squad deleted"),
                    dialog.style.display = "none";
            },
            secondaryStyle: "neutral",
            secondaryText: "Cancel",
            onSecondary: (dialog) => {
                console.log("Canceled")
                dialog.style.display = "none";
            }
        });
    })
}