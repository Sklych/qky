window.onload = function () {
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