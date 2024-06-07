function displayHomeCanvas(text) {
    const canvas = document.getElementById('displayContainer');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0,0, canvas.width, canvas.height); 
    ctx.font = '10px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText(text, 10, 90);
}

document.getElementById('insertText').addEventListener('input', function() {
    const insertText = this.value;
    displayHomeCanvas(insertText);
});