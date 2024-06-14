let inputTextEle = document.getElementById("insertText");
let displayTextEle = document.getElementsByClassName("displayText");
let textEditor = document.getElementById("editorText");
let effectEditor = document.getElementById("editorEffect");
let bgEditor = document.getElementById("editorBg");
const emojiBtn = document.getElementById("emojiBtn");
const emojiList = document.getElementById("emojiList");
const doneBtn = document.getElementById('nextBtn');
let textContent = document.querySelector(".textContent");
let effectContent = document.querySelector(".effectContent");
let bgContent = document.querySelector(".bgContent");
    


inputTextEle.onkeyup = function () {
    for (var i = 0; i < displayTextEle.length; i++) {
        displayTextEle.item(i).innerHTML = inputTextEle.value;
    }
};

let focus = "";
// Named event handler functions
function textEditorClickHandler() {
    resetBtnColor();
    hideAllContent();
    if (focus === textEditor.id) {
        focus = "";
        return;
    }
    focus = textEditor.id;
    textEditor.style.backgroundColor = "white";
    textEditor.style.borderTopLeftRadius = "20px";
    textContent.style.display = "block";
}

function effectEditorClickHandler() {
    resetBtnColor();
    hideAllContent();
    if (focus === effectEditor.id) {
        focus = "";
        return;
    }
    focus = effectEditor.id;
    effectEditor.style.backgroundColor = "white";
    effectContent.style.display = "block";
}

function bgEditorClickHandler() {
    resetBtnColor();
    hideAllContent();
    if (focus === bgEditor.id) {
        focus = "";
        return;
    }
    focus = bgEditor.id;
    bgEditor.style.backgroundColor = "white";
    bgContent.style.display = "block";
}

// Function to reset button colors
function resetBtnColor() {
    textEditor.style.backgroundColor = "rgb(130, 206, 250)";
    effectEditor.style.backgroundColor = "rgb(130, 206, 250)";
    bgEditor.style.backgroundColor = "rgb(130, 206, 250)";
}

// Function to hide all content
function hideAllContent() {
    textContent.style.display = "none";
    effectContent.style.display = "none";
    bgContent.style.display = "none";
}

// Function to add event listeners for mobile screens
function addEventListeners() {
    textEditor.addEventListener("click", textEditorClickHandler);
    effectEditor.addEventListener("click", effectEditorClickHandler);
    bgEditor.addEventListener("click", bgEditorClickHandler);
}

// Function to remove event listeners for desktop screens
function removeEventListeners() {
    textEditor.removeEventListener("click", textEditorClickHandler);
    effectEditor.removeEventListener("click", effectEditorClickHandler);
    bgEditor.removeEventListener("click", bgEditorClickHandler);
}

// Function to handle the screen size change
function handleScreenSizeChange() {
    if (window.innerWidth < 640) {
        addEventListeners();
    } else {
        removeEventListeners();
        textEditor.style.backgroundColor = "rgb(130, 206, 250)";
        effectEditor.style.backgroundColor = "rgb(130, 206, 250)";
        bgEditor.style.backgroundColor = "rgb(130, 206, 250)";
        // Ensure all content is shown on desktop
        textContent.style.display = "block";
        effectContent.style.display = "block";
        bgContent.style.display = "block";
    }
}

// Initial setup
handleScreenSizeChange();

// Recheck on window resize
window.addEventListener("resize", handleScreenSizeChange);

// Handle font chooser change
fontChooser.addEventListener("change", () => {
    const selectedFont = fontChooser.value;
    for (let i = 0; i < displayTextEle.length; i++) {
        displayTextEle.item(i).style.fontFamily = selectedFont;
    }
});


fontChooser.addEventListener("change", () => {
    const selectedFont = fontChooser.value;
    for (var i = 0; i < displayTextEle.length; i++) {
        displayTextEle.item(i).style.fontFamily = selectedFont;
    }
});

const sizeButtons = document.querySelectorAll(".size-Btn button");

sizeButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const newSize = event.target.id.replace('size', '');
        for (let i = 0; i < displayTextEle.length; i++) {
            displayTextEle[i].style.fontSize = `${newSize}px`;
        }
    });
});

emojiBtn.addEventListener("click", () => {
    if (emojiList.style.display === "none") {
        emojiList.style.display = "block";
    } else {
        emojiList.style.display = "none";
    }
});

emojiList.addEventListener("click", (event) => {
    const emoji = event.target.innerText;
    inputTextEle.value += emoji;
    for (var i = 0; i < displayTextEle.length; i++) {
        displayTextEle.item(i).innerHTML = inputTextEle.value;
    }
});

const inputTextContainer = document.querySelector('.inputText');
const editorContainer = document.querySelector('.editorContainer');
const displayFull = document.querySelector('.displayContainer');
const nextBtn = document.querySelector('#nextBtn');
const frame = document.querySelector('.frame');
const Neoscript = document.querySelector('.Neoscript');
const textWrap = document.querySelector('.textWrap');
nextBtn.addEventListener('click', () => {
    Neoscript.style.display = 'none';
    displayFull.classList.toggle('expanded');
    inputTextContainer.style.display = 'none';
    editorContainer.style.display ='none';
    textWrap.style.border = 'none';
    textWrap.style.backgroundColor = 'white';
    
});


const colorButtons = document.querySelectorAll(".colorText-Btn button");

colorButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const newColor = event.target.id.replace('colorT', ''); // Extract color from button ID
        for (let i = 0; i < displayTextEle.length; i++) {
            displayTextEle[i].style.color = newColor; // Change color of each displayText element
        }
    });
});

        // Text-ColorMix
const colorInput = document.getElementById("colorTMix");

colorInput.addEventListener("input", (event) => {
    const newColor = event.target.value;
    changeTextColor(newColor);
});

function changeTextColor(color) {
    for (let i = 0; i < displayTextEle.length; i++) {
        displayTextEle[i].style.color = color;
    }
}

        // Background-Color

let displayContainerEle = document.getElementsByClassName("displayContainer");

        // Function to change the background color
const changeBackgroundColor = (newColor) => {
    for (let i = 0; i < displayContainerEle.length; i++) {
        displayContainerEle[i].style.backgroundColor = newColor;
    }
};

        // Add event listeners to the background color buttons
const colorBackgroundButtons = document.querySelectorAll(".color-Btn button");
colorBackgroundButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const newColor = event.target.id.replace('color', '');
        changeBackgroundColor(newColor);
    });
});

        // Add event listener to the background color input
const colorBackgroundMixInput = document.getElementById("colorMix");
colorBackgroundMixInput.addEventListener("input", (event) => {
    const newColor = event.target.value;
    changeBackgroundColor(newColor);
});


        function applyBlinkRate(rate) {
          localStorage.setItem('blinkSpeed', rate);
      
            for (let i = 0; i < displayTextEle.length; i++) {
                displayTextEle[i].style.animationDuration = `${rate}s`;
                displayTextEle[i].classList.add('blink');
            }
        }

        document.getElementById('none-blink').addEventListener('click', () => applyBlinkRate(0));
        document.getElementById('blink0.5').addEventListener('click', () => applyBlinkRate(0.5));
        document.getElementById('blink1').addEventListener('click', () => applyBlinkRate(1));
        document.getElementById('blink1.5').addEventListener('click', () => applyBlinkRate(1.5));
        document.getElementById('blink2').addEventListener('click', () => applyBlinkRate(2));

        //Shadow
        const shadowToggle = document.querySelector(".switch input");

        shadowToggle.addEventListener("change", () => {
            const shadowStyle = shadowToggle.checked ? "2px 2px 4px #000000" : "none";
            for (var i = 0; i < displayTextEle.length; i++) {
                displayTextEle.item(i).style.textShadow = shadowStyle;
            }
        });
        // Add event listeners for the animation buttons
        const leftAnime = document.getElementById('leftAnime');
        const stopAnime = document.getElementById('stopAnime');
        const rightAnime = document.getElementById('rightAnime');
        const upDownAnime = document.getElementById('up-downAnime');

        let currentAnimation = null;

        leftAnime.addEventListener('click', () => {
        // Apply left animation
        for (let i = 0; i < displayTextEle.length; i++) {
            displayTextEle[i].style.animation = 'slideLeft 2s infinite linear';
        }
        currentAnimation = 'slideLeft';
        });

        stopAnime.addEventListener('click', () => {
            // Stop the animation
            for (let i = 0; i < displayTextEle.length; i++) {
                displayTextEle[i].style.animation = 'none';
            }
            currentAnimation = null;
        });

        rightAnime.addEventListener('click', () => {
            // Apply right animation
            for (let i = 0; i < displayTextEle.length; i++) {
                displayTextEle[i].style.animation = 'slideRight 2s infinite linear';
            }
            currentAnimation = 'slideRight';
        });

        upDownAnime.addEventListener('click', () => {
            // Apply up-down animation
            for (let i = 0; i < displayTextEle.length; i++) {
                displayTextEle[i].style.animation = 'upDown 2s infinite linear';
            }
            currentAnimation = 'upDown';
        });
        

        // Speed
        function applySpeedRate(rate) {
            localStorage.setItem('speed', rate);
        
              for (let i = 0; i < displayTextEle.length; i++) {
                  displayTextEle[i].style.animationDuration = `${rate}s`;
                  displayTextEle[i].classList.add('');
              }
          }
          
          document.getElementById('none-speed').addEventListener('click', () => applySpeedRate(0));
          document.getElementById('speed0.5').addEventListener('click', () => applySpeedRate(0.5));
          document.getElementById('speed1').addEventListener('click', () => applySpeedRate(1));
          document.getElementById('speed1.5').addEventListener('click', () => applySpeedRate(1.5));
          document.getElementById('speed2').addEventListener('click', () => applySpeedRate(2));
  

        // Text filter
        document.addEventListener('DOMContentLoaded', function() {
       const canvas = document.getElementById('textCanvas');
        const ctx = canvas.getContext('2d');
        let textInput = document.getElementById("insertText");
        const colorInput = document.getElementById("colorInput");

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let text = "Hello, World!";
    let font = '70px Times New Roman';
    let textColor = '#000000';
    let effect = '3d';
    let yOffset = 0;
    let direction = 1;
    let angle = 0;
    let particles = [];

    ctx.font = font;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 5 + 1;
            this.speedY = Math.random() * -1.9 - 0.5;
            this.speedX = (Math.random() - 0.05) * 1;
            this.alpha = 1;
            this.color = `rgba(255, ${Math.floor(Math.random() * 155 + 100)}, 0, ${this.alpha})`;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.size *= 0.5;
            this.alpha -= 0.03;
            this.color = `rgba(255, ${Math.floor(Math.random() * 150 + 100)}, 0, ${this.alpha})`;
        }

        draw() {
            ctx.globalAlpha = this.alpha;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }   

    function draw3DText() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const frontColor = textColor;
        const sideColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 100)`;
        const letters = text.split('');

        

        letters.forEach((letter, index) => {
            const x = canvas.width / 2 - ctx.measureText(text).width / 2 + ctx.measureText(text.substring(0, index)).width;

            // Draw 3D edges
            for (let i = 0; i < 7; i++) {
                ctx.fillStyle = sideColor;
                ctx.fillText(letter, x - i, canvas.height / 2 - i);
            }

            // Draw the front face of the text
            ctx.fillStyle = frontColor;
            ctx.fillText(letter, x, canvas.height / 20);
        });
    

   
        requestAnimationFrame(draw3DText);
    }
   


    function drawMetallicText() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, '#ccc');
        gradient.addColorStop(0.25, '#fff');
        gradient.addColorStop(0.5, '#888');
        gradient.addColorStop(0.75, '#fff');
        gradient.addColorStop(1, '#ccc');

        ctx.fillStyle = gradient;
        ctx.fillText(text, canvas.width / 2, canvas.height / 2 + yOffset);

        ctx.strokeStyle = '#444';
        ctx.lineWidth = 2;
        ctx.strokeText(text, canvas.width / 2, canvas.height / 2 + yOffset);

        yOffset += direction;
        if (yOffset > 20 || yOffset < -20) {
            direction *= -1;
        }

        requestAnimationFrame(drawMetallicText);
    }

    function drawFireText() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(1, '#f00');
        gradient.addColorStop(0.5, '#ffa500');
        gradient.addColorStop(1, '#ff0');

        ctx.fillStyle = gradient;
        ctx.fillText(text, canvas.width / 2, canvas.height / 2);

        const textWidth = ctx.measureText(text).width;
        const textHeight = 80;
        for (let i = 0; i < 5; i++) {
            let x = canvas.width / 2 - textWidth / 2 + Math.random() * textWidth;
            let y = canvas.height / 2 - textHeight / 2 + Math.random() * textHeight;
            particles.push(new Particle(x, y));
        }

        particles.forEach((particle, index) => {
            particle.update();
            particle.draw();
            if (particle.size < 1 || particle.alpha <= 0) {
                particles.splice(index, 1);
            }
        });

        requestAnimationFrame(drawFireText);
    }

    

    function handleEffectChange(effectType) {
        yOffset = 0;
        direction = 1;
        angle = 0;
        particles = [];
        canvas.style.display = 'block'; // Make sure canvas is visible
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before applying new effect

        console.log('Effect type selected:', effectType);

        if (effectType === '3d') {
            draw3DText();
        } else if (effectType === 'metallic') {
            drawMetallicText();
        } else if (effectType === 'fire') {
            drawFireText();
         } else {
            console.error('Invalid effect type:', effectType);
        }
    }

    textInput.addEventListener('input', (e) => {
        text = e.target.value;
        handleEffectChange(effect);
        });

        document.getElementById('none-filter').addEventListener('click', () => {
            canvas.style.visibility = 'hidden'; // Hide the canvas
            for (let i = 0; i < displayTextEle.length; i++) {
                displayTextEle[i].style.visibility = 'visible'; // Show the display text
            }
    });

    document.getElementById('3dBtn').addEventListener('click', () => {
        effect = '3d';
            
            canvas.style.visibility = 'visible'; // Show the canvas
            for (let i = 0; i < displayTextEle.length; i++) {
                displayTextEle[i].style.visibility = 'hidden'; // Hide the display text
            }
        handleEffectChange('3d');
    });

    document.getElementById('metallicBtn').addEventListener('click', () => {
        effect = 'metallic';
            canvas.style.visibility = 'visible'; // Show the canvas
            for (let i = 0; i < displayTextEle.length; i++) {
                displayTextEle[i].style.visibility = 'hidden'; // Hide the display text
            }
        handleEffectChange('metallic');
    });

    document.getElementById('fireBtn').addEventListener('click', () => {
        effect = 'fire';
            canvas.style.visibility = 'visible'; // Show the canvas
            for (let i = 0; i < displayTextEle.length; i++) {
                displayTextEle[i].style.visibility = 'hidden'; // Hide the display text
            }
        handleEffectChange('fire');
    });
   

    // Initial effect display
    handleEffectChange(effect);
});
const displayContainer = document.querySelector('.displayContainer');
        const displayedImage = displayContainer.querySelector('img');

        const changeBackgroundImg = (newImg) => { 
          if (newImg) {
            displayedImage.src = newImg;
            displayContainer.style.display = 'block'; 
            displayedImage.style.display = 'block'; 
            displayContainer.style.display = 'flex'; 
            } else {
                displayContainer.style.display = 'flex';
                displayedImage.style.display = 'none'; 
            }
        }

        // Add event listeners to the background image buttons
        const ImgBackgroundButtons = document.querySelectorAll(".img-Btn button");
        ImgBackgroundButtons.forEach(button => {
            button.addEventListener("click", (event) => {
                const buttonId = event.currentTarget.id;
                let newImg = '';

                switch (buttonId) {
                    case 'none-img':
                        displayContainer.style.backgroundColor = "black";
                        break;
                    case 'img1':
                        newImg = 'love3.jpg';
                        
                        break;
                    case 'img2':
                        newImg = 'love18.jpg';
                        break;
                    case 'img3':
                        newImg = 'love4.jpg';
                        break;
                    case 'img4':
                        newImg = 'love13.jpg';
                        break;
                    case 'img5':
                        newImg = 'love15.jpg';
                        break;
                    case 'img6':
                        newImg = 'love7.jpg';
                        break;
                    case 'img7':
                        newImg = 'love10.jpg';
                        break;
                    case 'img8':
                        newImg = 'love9.jpg';
                        break;
                    default:
                        displayContainer.style.backgroundColor = 'black'; 
                        return;
                }
                changeBackgroundImg(newImg);
            });
        });
        const selectImg = document.querySelector('#img9');
        const inputFile = document.querySelector('#file');

        selectImg.addEventListener('click', function(){
          inputFile.click();
        })
        inputFile.addEventListener('change', function(){
            const file = this.files[0];
            if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
                const reader = new FileReader();
                reader.onload = () => {
                    const imgUrl = reader.result;
                    changeBackgroundImg(imgUrl);
                }
                reader.readAsDataURL(file);
            } else {
                alert("Please select a JPG or PNG image file.");
            }
        });
        // background filter
        let activeEffect = null;
          // Function to start snow effect
          function startSnowEffect(canvas) {
            const ctx = canvas.getContext('2d');
            let snowflakes = [];

    function createSnowflake() {
        return {
            x: Math.random() * canvas.width,
            y: 0,
            radius: Math.random() * 1 + 1,
            speed: Math.random() * 3 + 1,
            opacity: Math.random() * 0.5 + 0.5
        };
    }

    function drawSnowflake(snowflake) {
        ctx.beginPath();
        ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${snowflake.opacity})`;
        ctx.fill();
    }

    function updateSnowflake(snowflake) {
        snowflake.y += snowflake.speed;

        if (snowflake.y > canvas.height) {
            snowflake.y = 0;
            snowflake.x = Math.random() * canvas.width;
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        snowflakes.forEach(snowflake => {
            drawSnowflake(snowflake);
            updateSnowflake(snowflake);
        });
        if (userText) { ctx.fillStyle = "white"; ctx.font = "30px Arial"; ctx.fillText(userText, canvas.width / 2, canvas.height / 2); }
                requestAnimationFrame(draw);

        requestAnimationFrame(draw);
    }

    function startSnowfall() {
        snowflakes = [];
        for (let i = 0; i < 100; i++) {
            snowflakes.push(createSnowflake());
        }
        draw();
    }

    startSnowfall();
        }

        // Function to stop snow effect
        function stopSnowEffect() {
            cancelAnimationFrame(requestAnimationFrame);
        }

        // Function to start rain effect
        function startRainEffect(canvas) {
        const ctx = canvas.getContext('2d');
        let raindrops = [];

function createRaindrop() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 150 + 50,
        speed: Math.random() * 10 + 10
    };
}

function drawRaindrop(raindrop) {
    ctx.beginPath();
    ctx.moveTo(raindrop.x, raindrop.y);
    ctx.lineTo(raindrop.x, raindrop.y + raindrop.length);
    ctx.strokeStyle = 'rgba(0, 0, 255, 0.2)';
    ctx.lineWidth = 5; 
    ctx.stroke();
}

function updateRaindrop(raindrop) {
    raindrop.y += raindrop.speed;

    if (raindrop.y > canvas.height) {
        raindrop.y = -raindrop.length;
        raindrop.x = Math.random() * canvas.width;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    raindrops.forEach(raindrop => {
        drawRaindrop(raindrop);
        updateRaindrop(raindrop);
    });
   

    requestAnimationFrame(draw);
}

function startRainfall() {
    raindrops = [];
    for (let i = 0; i < 200; i++) {
        raindrops.push(createRaindrop());
    }
    draw();
}

startRainfall();
        }

        // Function to stop rain effect
        function stopRainEffect() {
             cancelAnimationFrame(requestAnimationFrame);
        }

        // Function to start firework effect
        function startFireworkEffect(canvas) {
    const ctx = canvas.getContext('2d');

    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;
    let fireworks = [];
    let particles = [];

    function setSize(canv) {
        canv.style.width = (innerWidth) + "px";
        canv.style.height = (innerHeight) + "px";
        canvasWidth = innerWidth;
        canvasHeight = innerHeight;

        canv.width = innerWidth * window.devicePixelRatio;
        canv.height = innerHeight * window.devicePixelRatio;
        canvas.getContext("2d").scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    function windowResized() {
        setSize(canvas);
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    }

    window.addEventListener("resize", windowResized);

    function loop() {
        ctx.globalAlpha = 0.1;
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        ctx.globalAlpha = 1;

        for (let i = 0; i < fireworks.length; i++) {
            let done = fireworks[i].update();
            fireworks[i].draw();
            if (done) fireworks.splice(i, 1);
        }

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            if (particles[i].lifetime > 80) particles.splice(i, 1);
        }

        if (Math.random() < 1 / 60) fireworks.push(new Firework(Math.random() * (canvasWidth - 200) + 100));
    }

    setInterval(loop, 1 / 60);

    class Particle {
        constructor(x, y, col) {
            this.x = x;
            this.y = y;
            this.col = col;
            this.vel = randomVec(2);
            this.lifetime = 0;
        }

        update() {
            this.x += this.vel.x;
            this.y += this.vel.y;
            this.vel.y += 0.02;
            this.vel.x *= 0.99;
            this.vel.y *= 0.99;
            this.lifetime++;
        }

        draw() {
            ctx.globalAlpha = Math.max(1 - this.lifetime / 80, 0);
            ctx.fillStyle = this.col;
            ctx.fillRect(this.x, this.y, 2, 2);
        }
    }

    class Firework {
        constructor(x) {
            this.x = x;
            this.y = canvasHeight;
            this.isBlown = false;
            this.col = randomCol();
        }

        update() {
            this.y -= 3;
            if (this.y < 350 - Math.sqrt(Math.random() * 500) * 40) {
                this.isBlown = true;
                for (let i = 0; i < 60; i++) {
                    particles.push(new Particle(this.x, this.y, this.col))
                }
            }
            return this.isBlown;
        }

        draw() {
            ctx.globalAlpha = 1;
            ctx.fillStyle = this.col;
            ctx.fillRect(this.x, this.y, 2, 2);
        }
    }

    function randomCol() {
        var letter = '0123456789ABCDEF';
        var nums = [];

        for (var i = 0; i < 3; i++) {
            nums[i] = Math.floor(Math.random() * 256);
        }

        let brightest = 0;
        for (var i = 0; i < 3; i++) {
            if (brightest < nums[i]) brightest = nums[i];
        }

        brightest /= 255;
        for (var i = 0; i < 3; i++) {
            nums[i] /= brightest;
        }

        let color = "#";
        for (var i = 0; i < 3; i++) {
            color += letter[Math.floor(nums[i] / 16)];
            color += letter[Math.floor(nums[i] % 16)];
        }
        return color;
    }

    function randomVec(max) {
        let dir = Math.random() * Math.PI * 2;
        let spd = Math.random() * max;
        return { x: Math.cos(dir) * spd, y: Math.sin(dir) * spd };
    }

    function onClick(e) {
        fireworks.push(new Firework(e.clientX));
    }

   
}
    
        // Function to start snow effect
        function startSnowEffect(canvas) {
            const ctx = canvas.getContext('2d');

            let snowflakes = [];

            function createSnowflake() {
                return {
                    x: Math.random() * canvas.width,
                    y: 0,
                    radius: Math.random() * 1 + 1,
                    speed: Math.random() * 3 + 1,
                    opacity: Math.random() * 0.5 + 0.5
                };
            }

            function drawSnowflake(snowflake) {
                ctx.beginPath();
                ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${snowflake.opacity})`;
                ctx.fill();
            }

            function updateSnowflake(snowflake) {
                snowflake.y += snowflake.speed;

                if (snowflake.y > canvas.height) {
                    snowflake.y = 0;
                    snowflake.x = Math.random() * canvas.width;
                }
            }

            function draw() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                snowflakes.forEach(snowflake => {
                    drawSnowflake(snowflake);
                    updateSnowflake(snowflake);
                });

                requestAnimationFrame(draw);
            }

            function startSnowfall() {
                snowflakes = [];
                for (let i = 0; i < 100; i++) {
                    snowflakes.push(createSnowflake());
                }
                draw();
            }

            startSnowfall();
        }

        // Function to stop snow effect
        function stopSnowEffect() {
            cancelAnimationFrame(requestAnimationFrame);
        }

        // Function to start rain effect
        function startRainEffect(canvas) {
            const ctx = canvas.getContext('2d');

            let raindrops = [];

            function createRaindrop() {
                return {
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    length: Math.random() * 10 + 5,
                    speed: Math.random() * 6 + 4
                };
            }

            function drawRaindrop(raindrop) {
                ctx.beginPath();
                ctx.moveTo(raindrop.x, raindrop.y);
                ctx.lineTo(raindrop.x, raindrop.y + raindrop.length);
                ctx.strokeStyle = 'rgba(0, 0, 255, 0.2)';
                ctx.stroke();
            }

            function updateRaindrop(raindrop) {
                raindrop.y += raindrop.speed;

                if (raindrop.y > canvas.height) {
                    raindrop.y = -raindrop.length;
                    raindrop.x = Math.random() * canvas.width;
                }
            }

            function draw() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                raindrops.forEach(raindrop => {
                    drawRaindrop(raindrop);
                    updateRaindrop(raindrop);
                });

                requestAnimationFrame(draw);
            }

            function startRainfall() {
                raindrops = [];
                for (let i = 0; i < 100; i++) {
                    raindrops.push(createRaindrop());
                }
                draw();
            }

            startRainfall();
        }

        // Function to stop rain effect
        function stopRainEffect() {
            cancelAnimationFrame(requestAnimationFrame);
        }

        // Function to start firework effect
        function startFireworkEffect(canvas) {
            let ctx = canvas.getContext("2d");
            let width, height;
            let fireworks = [];
            let particles = [];

            function setup() {
                setSize(canvas);
                ctx.fillStyle = "#000000";
                ctx.fillRect(0, 0, width, height);
                fireworks.push(new Firework(Math.random() * (width - 200) + 100));
                window.addEventListener("resize", windowResized);
                document.addEventListener("click", onClick);
            }

            function loop() {
                ctx.globalAlpha = 0.1;
                ctx.fillStyle = "#000000";
                ctx.fillRect(0, 0, width, height);
                ctx.globalAlpha = 1;

                for (let i = 0; i < fireworks.length; i++) {
                    let done = fireworks[i].update();
                    fireworks[i].draw();
                    if (done) fireworks.splice(i, 1);
                }

                for (let i = 0; i < particles.length; i++) {
                    particles[i].update();
                    particles[i].draw();
                    if (particles[i].lifetime > 80) particles.splice(i, 1);
                }

                if (Math.random() < 1 / 60) fireworks.push(new Firework(Math.random() * (width - 200) + 100));
                requestAnimationFrame(loop);
            }

            class Particle {
                constructor(x, y, col) {
                    this.x = x;
                    this.y = y;
                    this.col = col;
                    this.vel = randomVec(2);
                    this.lifetime = 0;
                }

                update() {
                    this.x += this.vel.x;
                    this.y += this.vel.y;
                    this.vel.y += 0.02;
                    this.vel.x *= 0.99;
                    this.vel.y *= 0.99;
                    this.lifetime++;
                }

                draw() {
                    ctx.globalAlpha = Math.max(1 - this.lifetime / 80, 0);
                    ctx.fillStyle = this.col;
                    ctx.fillRect(this.x, this.y, 2, 2);
                }
            }

            class Firework {
                constructor(x) {
                    this.x = x;
                    this.y = height;
                    this.isBlown = false;
                    this.col = randomCol();
                }

                update() {
                    this.y -= 3;
                    if (this.y < 350 - Math.sqrt(Math.random() * 500) * 40) {
                        this.isBlown = true;
                        for (let i = 0; i < 60; i++) {
                            particles.push(new Particle(this.x, this.y, this.col));
                        }
                    }
                    return this.isBlown;
                }

                draw() {
                    ctx.globalAlpha = 1;
                    ctx.fillStyle = this.col;
                    ctx.fillRect(this.x, this.y, 2, 2);
                }
            }

            function randomCol() {
                let letter = '0123456789ABCDEF';
                let nums = [];

                for (let i = 0; i < 3; i++) {
                    nums[i] = Math.floor(Math.random() * 256);
                }

                let brightest = 0;
                for (let i = 0; i < 3; i++) {
                    if (brightest < nums[i]) brightest = nums[i];
                }

                brightest /= 255;
                for (let i = 0; i < 3; i++) {
                    nums[i] /= brightest;
                }

                let color = "#";
                for (let i = 0; i < 3; i++) {
                    color += letter[Math.floor(nums[i] / 16)];
                    color += letter[Math.floor(nums[i] % 16)];
                }
                return color;
            }

            function randomVec(max) {
                let dir = Math.random() * Math.PI * 2;
                let spd = Math.random() * max;
                return { x: Math.cos(dir) * spd, y: Math.sin(dir) * spd };
            }

            function setSize(canv) {
                canv.style.width = (innerWidth) + "px";
                canv.style.height = (innerHeight) + "px";
                width = innerWidth;
                height = innerHeight;

                canv.width = innerWidth * window.devicePixelRatio;
                canv.height = innerHeight * window.devicePixelRatio;
                canvas.getContext("2d").scale(window.devicePixelRatio, window.devicePixelRatio);
            }

            function onClick(e) {
                fireworks.push(new Firework(e.clientX));
            }

            function windowResized() {
                setSize(canvas);
                ctx.fillStyle = "#000000";
                ctx.fillRect(0, 0, width, height);
            }

            setup();
            requestAnimationFrame(loop);
        }

        // Function to stop firework effect
        function stopFireworkEffect() {
            cancelAnimationFrame(requestAnimationFrame);
        }

        // Function to start bubble effect
        function startBubbleEffect(canvas) {
            const ctx = canvas.getContext("2d");
            let cwidth, cheight;
            let bubbles = [];
            let colors = ['#ff5252', '#ff4081', '#e040fb', '#7c4dff', '#53dff', '#40cdff', '#18ffff', '#64ffda', '#69f0ae'];

            function reset() {
                cwidth = window.innerWidth;
                cheight = window.innerHeight;
                canvas.width = cwidth;
                canvas.height = cheight;
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
        }
    // Function to start bubble effect
    
        // Function to stop bubble effect
        function stopBubbleEffect() {
            const canvas = document.getElementById('bubbleCanvas');
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        function stopAllEffects() {
            if (activeEffect === 'snow') {
                stopSnowEffect();
            } else if (activeEffect === 'rain') {
                stopRainEffect();
            } else if (activeEffect === 'firework') {
                stopFireworkEffect();
            } else if (activeEffect === 'bubble') {
                stopBubbleEffect();
            }
            activeEffect = null;
        }


     
        
        // Toggle effect function
        function toggleEffect(canvasId) {
            var canvas = document.getElementById(canvasId);

            if (canvas.style.display === 'none') {
                stopAllEffects();
                canvas.style.display = 'block';

                if (canvasId === 'snowCanvas') {
                    activeEffect = 'snow';
                    startSnowEffect(canvas);
                } else if (canvasId === 'rainCanvas') {
                    activeEffect = 'rain';
                    startRainEffect(canvas);
                } else if (canvasId === 'fireworkCanvas') {
                    startFireworkEffect(canvas);
                } else if (canvasId === 'bubbleCanvas') {
                    activeEffect = 'bubble';
                    startBubbleEffect(canvas);
                }
            } else {
                canvas.style.display = 'none';

                if (canvasId === 'snowCanvas') {
                    stopSnowEffect();
                } else if (canvasId === 'rainCanvas') {
                    stopRainEffect();
                } else if (canvasId === 'fireworkCanvas') {
                    stopFireworkEffect();
                } else if (canvasId === 'bubbleCanvas') {
                    stopBubbleEffect();
                }
            }
        }
        document.getElementById('none-bgf').addEventListener('click', function() {
            const displayGif = document.getElementById('displayGif');
            displayGif.style.display = 'none';
            const snow = document.getElementById('snowCanvas');
            const rain = document.getElementById('rainCanvas');
            const firework = document.getElementById('fireworkCanvas');
            const bubble = document.getElementById('bubbleCanvas');
            snow.style.display = 'none';
            rain.style.display = 'none';
            firework.style.display = 'none';
            bubble.style.display = 'none';
        });
        // Event listeners for button clicks
        document.getElementById('bgf1').addEventListener('click', function() {
            toggleEffect('snowCanvas');
        });

        document.getElementById('bgf2').addEventListener('click', function() {
            toggleEffect('rainCanvas');
        });

        document.getElementById('bgf3').addEventListener('click', function() {
            toggleEffect('fireworkCanvas');
        });

        document.getElementById('bgf4').addEventListener('click', function() {
            toggleEffect('bubbleCanvas');
        });

        function showGif(gifSrc) {
            const displayGif = document.getElementById('displayGif');
            displayGif.src = gifSrc;
            displayGif.style.display = 'block';
        }
        
        document.getElementById('bgf5').addEventListener('click', function() {
            showGif('gojoRun.gif');
        });
    
        document.getElementById('bgf6').addEventListener('click', function() {
            showGif('oce.gif');
        });
    
        document.getElementById('bgf7').addEventListener('click', function() {
            showGif('heart.gif'); 
        });
    
        document.getElementById('bgf8').addEventListener('click', function() {
            showGif('fireGif.gif'); 
        });
        document.getElementById('bgf9').addEventListener('click', function() {
            showGif('train.gif');
        });

        document.getElementById('bgf10').addEventListener('click', function() {
            showGif('sparkle.gif');
        });

        document.getElementById('bgf11').addEventListener('click', function() {
            showGif('waterfall.gif');
        });

        document.getElementById('bgf12').addEventListener('click', function() {
            showGif('toothless.gif');
        });
        document.getElementById('bgf13').addEventListener('click', function() {
            showGif('shootingstar.gif');
        });
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                window.location.href = 'LEDHTML_VERSION2.html'; // Update this URL as needed
            }
        });
        


