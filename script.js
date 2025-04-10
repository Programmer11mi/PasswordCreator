let tg = window.Telegram.WebApp;
tg.expand();

function sendData() {
    const length = document.getElementById('numInput').value;
    
    if (length >= 8 && length <= 30) {
        tg.sendData(JSON.stringify({ length: length }));
    } else {
        alert("Будь ласка, введіть кількість символів від 8 до 30.");
    }
}