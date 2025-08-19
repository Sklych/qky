const telegramWA =  window.Telegram && window.Telegram.WebApp;
console.log(`Telegram webAppVersion telegramWA=${telegramWA}`)
if (telegramWA) {
  telegramWA.ready();
  console.log(`Telegram webAppVersion telegramWA.initDataUnsafe=${telegramWA.initDataUnsafe}`)
  console.log(`Telegram webAppVersion telegramWA.initParams=${telegramWA.initParams}`)
  console.log(`Telegram webAppVersion telegramWA.initParams.tgWebAppVersion=${telegramWA.initParams && telegramWA.initParams.tgWebAppVersion}`)
  console.log(`Telegram webAppVersion telegramWA.version=${telegramWA.version}`)
}

const appConfig = {
    enableLogs: true,
    telegramWebApp: telegramWA
};

if (!appConfig.enableLogs) {
    console.log = function () {};
    console.error = function() {};
}

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

function showDialog({ 
  title, 
  description, 
  primaryText, 
  primaryStyle = "accent", // "accent" | "negative" | "neutral"
  onPrimary = null, 
  secondaryStyle = null, // "accent" | "negative" | "neutral"
  secondaryText = null, 
  onSecondary = null 
}) {
  const dialog = document.getElementById("confirmationDialog");
  const titleEl = document.getElementById("dialogTitle");
  const descEl = document.getElementById("dialogDescription");
  const primaryBtn = document.getElementById("dialogPrimaryBtn");
  const secondaryBtn = document.getElementById("dialogSecondaryBtn");

  titleEl.textContent = title;
  descEl.textContent = description;

  const styleMap = {
    accent: { bg: "var(--accent)", text: "var(--accent-text)" },
    negative: { bg: "var(--negative)", text: "var(--accent-text)" },
    neutral: { bg: "white", text: "black" }
  };

  primaryBtn.textContent = primaryText;
  primaryBtn.style.background = styleMap[primaryStyle].bg;
  primaryBtn.style.color = styleMap[primaryStyle].text;
  primaryBtn.onclick = () => {
    if (onPrimary) onPrimary(dialog);
  };

  if (secondaryText) {
    secondaryBtn.style.display = "block";
    secondaryBtn.textContent = secondaryText;
    secondaryBtn.style.background = styleMap[secondaryStyle].bg;
    secondaryBtn.style.color = styleMap[secondaryStyle].text;
    secondaryBtn.onclick = () => {
      if (onSecondary) onSecondary(dialog);
    };
  } else {
    secondaryBtn.style.display = "none";
  }

  dialog.style.display = "flex";
}

// define global functions
window.showSnackbar = showSnackbar;
window.showDialog = showDialog;
window.appConfig = appConfig;
