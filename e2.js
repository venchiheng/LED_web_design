// snow.js
const snowContainer = document.getElementById('snowContainer');
for (let i = 0; i < 10; i++) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.textContent = '❄';
    snowContainer.appendChild(snowflake);
}
