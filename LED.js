
const emojiBtn = document.getElementById('emojiBtn');
const emojiList = document.getElementById('emoji-list');
const colorSelect = document.getElementById('colorSelect');
const colorTextSelect = document.getElementById('color-text');
const fontSelect = document.getElementById('Text-Font');
const userInput = document.getElementById('userInput1');
const resetBtn = document.querySelector('.reset-btn');
const doneBtn = document.querySelector('.done-btn');
const previewText = document.getElementById('previewText');

emojiBtn.addEventListener('click', function() {
    if (emojiList.style.display === 'none' || emojiList.style.display === '') {
        emojiList.style.display = 'block';
    } else {
        emojiList.style.display = 'none';
    }
});

emojiList.addEventListener('click', function(event) {
    if (event.target.tagName === 'SPAN') {
        userInput.value += event.target.textContent;
        updatePreview(); // Update preview after adding emoji
    }
});

function updatePreview() {
    previewText.textContent = userInput.value || 'Your text will scroll here';
    previewText.style.backgroundColor = colorSelect.value;
    previewText.style.color = colorTextSelect.value;
    previewText.style.fontFamily = fontSelect.value;

    const textLength = userInput.value.length;
    const animationDuration = Math.max(2, textLength * 1); 
    previewText.style.animationDuration = `${animationDuration}s`;
}

colorSelect.addEventListener('change', updatePreview);
colorTextSelect.addEventListener('change', updatePreview);
fontSelect.addEventListener('change', updatePreview);
userInput.addEventListener('input', updatePreview);

resetBtn.addEventListener('click', function() {
    userInput.value = '';
    colorSelect.value = 'white';
    colorTextSelect.value = 'black';
    fontSelect.value = 'Arial';
    updatePreview();
});

doneBtn.addEventListener('click', function() {
    const userInputValue = userInput.value;
    const backgroundColorValue = colorSelect.value;
    const fontColorValue = colorTextSelect.value;
    const fontValue = fontSelect.value;

    const dataParams = new URLSearchParams({
        userInput: userInputValue,
        backgroundColor: backgroundColorValue,
        fontColor: fontColorValue,
        font: fontValue
    }).toString();
    
    const previewBackground = document.querySelector('.preview-background');
    previewBackground.style.transition = 'none'; // Remove transition temporarily
    previewBackground.style.backgroundColor = backgroundColorValue;
    setTimeout(() => {
        previewBackground.style.transition = ''; 
    }, 1000); 

    window.location.href = `display.html?${dataParams}`;
});

updatePreview();
