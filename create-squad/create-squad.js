window.onload = function () {
    const input = document.querySelector(".create-squad-input");
  const button = document.querySelector(".create-squad-btn");
  const errorEl = document.getElementById("squadError");

  function updateButtonState() {
    const value = input.value.trim();

    if (value.length === 0) {
      // No input
      button.style.background = "var(--accent-disabled)";
      button.disabled = true;
      errorEl.style.display = "none";
    } else if (value.length > 30) {
      // Too long
      button.style.background = "var(--accent-disabled)";
      button.disabled = true;
      errorEl.textContent = "Squad title cannot exceed 30 characters";
      errorEl.style.display = "block";
    } else {
      // Valid input
      button.style.background = "var(--accent)";
      button.disabled = false;
      errorEl.style.display = "none";
    }
  }

  // Initial state
  updateButtonState();

  // Update on input change
  input.addEventListener("input", updateButtonState);
}