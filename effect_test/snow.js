const c = document.getElementById('snowCanvas');
const ctx = c.getContext('2d');

let totalSnow = 90;
let listSnow = [];

const Snow = function () {
    this.x = Math.random()*c.width;
    this.y = Math.random()*c.height;
    this.radius = Math.random()*3 + 1;
    this.speedX = random(-2, 2);
    this.speedY = random(2, 5);

    this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, Math.PI*2, false);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();

        // update
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.y > c.height) {
            this.y = -10;
            this.x = Math.random() * c.width * 1.5;
        }
    }
}

const random = (min, max) => {
    return min + Math.random() * (max - min + 1);
}

const init = () => {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    createSnow();
}

const resizeCanvas = () => {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
}

const createSnow = () => {
    for(let i = 0; i < totalSnow; i++ ) {
        listSnow.push(new Snow);
    }
}

const loop = () => {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, c.width, c.height);
    
    listSnow.forEach((snow) => {
        snow.draw();
    });

    requestAnimationFrame(loop);
}

// main logic
(() => {
    init();
    loop();
})();