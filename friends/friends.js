window.onload = function () {
    document.getElementById('copy-btn').addEventListener('click', () => {
        const message = "Link copied";
        const icon = "../img/completed.svg"
        showSnackbar(message, icon);
    });
};


