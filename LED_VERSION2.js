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

textEditor.addEventListener("click", () => {
    resetBtnColor();
    hideAllContent();
    if (focus === textEditor.id) {
        focus = "";
        return;
    }
    focus = textEditor.id;
    textEditor.style.backgroundColor = "white";
        textEditor.style.borderTopLeftRadius == "20px";
    textContent.style.display = "block";
});

effectEditor.addEventListener("click", () => {
    resetBtnColor();
    hideAllContent();
    if (focus === effectEditor.id) {
        focus = "";
        return;
    }
    focus = effectEditor.id;
    effectEditor.style.backgroundColor = "white";
    effectContent.style.display = "block";
});

bgEditor.addEventListener("click", () => {
    resetBtnColor();
    hideAllContent();
    if (focus === bgEditor.id) {
        focus = "";
        return;
    }
    focus = bgEditor.id;
    bgEditor.style.backgroundColor = "white";
    bgContent.style.display = "block";
});

function hideAllContent() {
    textContent.style.display = "none";
    effectContent.style.display = "none";
    bgContent.style.display = "none";
}

function resetBtnColor() {
    textEditor.style.backgroundColor = "rgb(130, 206, 250)";
    effectEditor.style.backgroundColor = "rgb(130, 206, 250)";
    bgEditor.style.backgroundColor = "rgb(130, 206, 250)";
}

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

nextBtn.addEventListener("click", () => {
    const inputTextEleValue = inputTextEle.value;
    const bgColor = document.querySelector('.displayContainer').style.backgroundColor || 'white';
    const textColor = displayTextEle[0].style.color || 'black';
    const fontFamily = displayTextEle[0].style.fontFamily || 'Arial';
    const animation = currentAnimation || 'none';
    const textShadow = shadowToggle.checked ? "2px 2px 4px #000000" : "none";
    const speed = localStorage.getItem('speed') || 1;
    const backgroundImage = document.querySelector('.displayContainer img').src || '';

    const dataParams = new URLSearchParams({
        inputTextEle: inputTextEleValue,
        bgColor: bgColor,
        textColor: textColor,
        fontFamily: fontFamily,
        animation: animation,
        textShadow: textShadow,
        speed: speed,
        backgroundImage: backgroundImage
    }).toString();

    window.location.href = `display.html?${dataParams}`;
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

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let text = "";
    let effect = '3d';
    let yOffset = 0;
    let direction = 1;
    let angle = 0;
    let particles = [];

    ctx.font = 'bold 80px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 20 + 10;
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
            this.color = `rgba(255, ${Math.floor(Math.random() * 155 + 100)}, 0, ${this.alpha})`;
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
        const frontColor = '#00f';
        const sideColor = '#00a';
        const letters = text.split(' ');

        letters.forEach((letter, index) => {
            const x = canvas.width / 2 - ctx.measureText(text).width / 2 + ctx.measureText(text.substring(0, index)).width;
            const shakeOffset = Math.sin(angle + index) * 0.5;
            const popOffset = Math.sin((angle + index) * 1) * 5;

            for (let i = 0; i < 10; i++) {
                ctx.fillStyle = sideColor;
                ctx.fillText(letter, x - i + shakeOffset, canvas.height / 2 - i + yOffset + popOffset);
            }

            ctx.fillStyle = frontColor;
            ctx.fillText(letter, x + shakeOffset, canvas.height / 2 + yOffset + popOffset);
        });

        yOffset += direction;
        if (yOffset > 10 || yOffset < -20) {
            direction *= -1;
        }

        angle += 0.05;
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
        gradient.addColorStop(0, '#f00');
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