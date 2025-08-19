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
    document.getElementById("withdraw-tg-btn").addEventListener("click", () => {
        openWithdrawlNotAvailableFlow()
    })

}