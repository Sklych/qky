function setKeyLightColor(color) {
    document.querySelectorAll('.key').forEach(key => {
      key.style.boxShadow = `0 0 20px ${color}, 0 10px 30px rgba(0,0,0,.35)`;
    });
  }
  
window.onload = function () {
  setTimeout(() => {
    setKeyLightColor('rgba(255, 0, 0, 0.6)');
  }, 2000);

  // Example usage: change to green after 4 seconds
  setTimeout(() => {
    setKeyLightColor('rgba(0, 255, 0, 0.6)');
  }, 4000);
};