function openConfirmWithdrawlFlow() {
    const container = document.getElementById("withdrawContainer");
    const withdrawSheet = document.getElementById("withdrawSheet");
    const withdrawOverlay = document.getElementById("withdrawOverlay");
    const closeBtn = document.getElementById("withdrawClose")
    const withdrawBtn = document.getElementById("withdrawBtn")

    function openWithdrawSheet() {
        container.classList.add("active");
        withdrawSheet.classList.add("active");
        withdrawOverlay.classList.add("active");
    }

    function closeWithdrawSheet() {
        container.classList.remove("active");
        withdrawSheet.classList.remove("active");
        withdrawOverlay.classList.remove("active");
    }

    openWithdrawSheet();

    withdrawOverlay.addEventListener("click", () => {
        closeWithdrawSheet();
    })

    closeBtn.addEventListener("click", () => {
        closeWithdrawSheet();
    })

    withdrawBtn.addEventListener("click", () => {
        closeWithdrawSheet();
    })
}

window.onload = function () {
    document.getElementById("withdraw-tg-btn").addEventListener("click", () => {
        openConfirmWithdrawlFlow()
    })
}