// bubble.js
const bubbleContainer = document.getElementById('bubbleContainer');
for (let i = 0; i < 10; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.textContent = '🔵';
    bubbleContainer.appendChild(bubble);
}
