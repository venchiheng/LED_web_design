var c = document.getElementById("bubble");
var ctx = c.getContext("2d");
var cwidth, cheight;
var bubbles = [];
var colors = ['#ff5252', '#ff4081', '#e040fb', '#7c4dff', '#53dff', '#40cdff', '#18ffff', '#64ffda', '#69f0ae'];


function reset() {
    cwidth = window.innerWidth;
    cheight = window.innerHeight;
    c.width = cwidth;
    c.height = cheight;
}

window.onresize = function() {
    reset();
}

reset();

function newBubble() {
    var bubble = {};
    bubble.x = Math.random() * cwidth;
    bubble.y = Math.random() * cheight;
    bubble.size = Math.random() * 20 + 10;
    bubble.color = colors[Math.floor(Math.random() * colors.length)];
    bubble.speedX = Math.random() * 2 - 1; // Random speed in X direction
    bubble.speedY = Math.random() * 2 - 1; // Random speed in Y direction
    bubbles.push(bubble);
}

function step() {
    ctx.clearRect(0, 0, cwidth, cheight);

    if (bubbles.length < 20 && Math.random() > 0.9) {
        newBubble();
    }

    for (var i = 0; i < bubbles.length; i++) {
        var bubble = bubbles[i];
        bubble.x += bubble.speedX;
        bubble.y += bubble.speedY;

        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, 2 * Math.PI);
        ctx.fillStyle = bubble.color;
        ctx.fill();

        // Wrap around the canvas edges
        if (bubble.x - bubble.size > cwidth) {
            bubble.x = -bubble.size;
        } else if (bubble.x + bubble.size < 0) {
            bubble.x = cwidth + bubble.size;
        }

        if (bubble.y - bubble.size > cheight) {
            bubble.y = -bubble.size;
        } else if (bubble.y + bubble.size < 0) {
            bubble.y = cheight + bubble.size;
        }
    }

    requestAnimationFrame(step);
}

step();
