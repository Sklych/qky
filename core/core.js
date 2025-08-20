const telegramWA = window.Telegram && window.Telegram.WebApp;
if (telegramWA) {
  telegramWA.ready();
}

const appConfig = {
  enableLogs: true,
  telegramWebApp: telegramWA
};

console.log(`core.js init tg=${JSON.stringify(telegramWA)}`)

if (!appConfig.enableLogs) {
  console.log = function () { };
  console.error = function () { };
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

function versionCompare(v1, v2) {
  if (typeof v1 !== 'string') v1 = '';
  if (typeof v2 !== 'string') v2 = '';
  v1 = v1.replace(/^\s+|\s+$/g, '').split('.');
  v2 = v2.replace(/^\s+|\s+$/g, '').split('.');
  var a = Math.max(v1.length, v2.length), i, p1, p2;
  for (i = 0; i < a; i++) {
    p1 = parseInt(v1[i]) || 0;
    p2 = parseInt(v2[i]) || 0;
    if (p1 == p2) continue;
    if (p1 > p2) return 1;
    return -1;
  }
  return 0;
}

function versionAtLeast(webAppVersion, ver) {
  return versionCompare(webAppVersion, ver) >= 0;
}

function playHapticNavigation() {
  if (versionAtLeast(appConfig.telegramWebApp.version, '6.1')) {
    appConfig.telegramWebApp.HapticFeedback.impactOccurred('soft')
  }
}

function playHapticSuccess() {
  if (versionAtLeast(appConfig.telegramWebApp.version, '6.1')) {
    appConfig.telegramWebApp.HapticFeedback.notificationOccurred('success')
  }
}

function playHapticError() {
  if (versionAtLeast(appConfig.telegramWebApp.version, '6.1')) {
    appConfig.telegramWebApp.HapticFeedback.notificationOccurred('error')
  }
}


// define global functions
window.showSnackbar = showSnackbar;
window.showDialog = showDialog;
window.appConfig = appConfig;
window.versionAtLeast = versionAtLeast;
window.playHapticNavigation = playHapticNavigation;
window.playHapticSuccess = playHapticSuccess;
window.playHapticError = playHapticError;
