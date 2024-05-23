function createFirework() {
    ctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
    // Example firework drawing
    ctx.beginPath();
    ctx.arc(400, 300, 10, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}

setInterval(createFirework, 1000);