// blink.js
setInterval(() => {
    const blinkingText = document.getElementById('blinkingText');
    blinkingText.style.visibility = (blinkingText.style.visibility === 'hidden') ? 'visible' : 'hidden';
}, 500);
