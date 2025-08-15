let currentSnackbar = null;

function showSnackbar(message, iconSrc = null, duration = 3000) {
  if (currentSnackbar) {
    currentSnackbar.classList.remove('show');
    currentSnackbar.remove();
    currentSnackbar = null;
  }

  const snackbar = document.createElement('div');
  snackbar.className = 'snackbar';
  
  if (iconSrc) {
    const img = document.createElement('img');
    img.src = iconSrc;
    img.alt = 'icon';
    img.style.width = '24px';
    img.style.height = '24px';
    snackbar.appendChild(img);
  }

  const text = document.createElement('span');
  text.textContent = message;
  snackbar.appendChild(text);

  document.body.appendChild(snackbar);
  currentSnackbar = snackbar;

  requestAnimationFrame(() => {
    snackbar.classList.add('show');
  });

  setTimeout(() => {
    snackbar.classList.remove('show');
    setTimeout(() => {
      snackbar.remove();
      if (currentSnackbar === snackbar) currentSnackbar = null;
    }, 400);
  }, duration);
}

// define global functions
window.showSnackbar = showSnackbar;