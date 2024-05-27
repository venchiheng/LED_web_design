const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Firework {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sparks = [];
        this.initSparks();
    }

    initSparks() {
        const numSparks = 100;
        for (let i = 0; i < numSparks; i++) {
            this.sparks.push({
                x: this.x,
                y: this.y,
                angle: Math.random() * 2 * Math.PI,
                speed: Math.random() * 3 + 1,
                opacity: 1
            });
        }
    }

    update() {
        this.sparks.forEach(spark => {
            spark.x += Math.cos(spark.angle) * spark.speed;
            spark.y += Math.sin(spark.angle) * spark.speed;
            spark.opacity -= 0.02;
        });

        this.sparks = this.sparks.filter(spark => spark.opacity > 0);
    }

    draw() {
        this.sparks.forEach(spark => {
            ctx.beginPath();
            ctx.arc(spark.x, spark.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${spark.opacity})`;
            ctx.fill();
        });
    }
}

const fireworks = [];

canvas.addEventListener('click', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    fireworks.push(new Firework(x, y));
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fireworks.forEach(firework => {
        firework.update();
        firework.draw();
    });

    requestAnimationFrame(animate);
}

animate();
