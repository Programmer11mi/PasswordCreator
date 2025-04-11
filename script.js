let tg = window.Telegram.WebApp;
tg.expand();

function sendData() {
    const input = document.getElementById('numInput');
    const errorMsg = document.getElementById('errorMsg');
    const length = parseInt(input.value);

    if (length >= 8 && length <= 60) {
        tg.sendData(JSON.stringify({ length: length }));
        errorMsg.textContent = "";
    } else {
        errorMsg.textContent = "Введіть число від 8 до 60.";
        input.value = "";
        setTimeout(() => input.focus(), 100);
    }
}

// Додаємо слухача події
document.getElementById('sendButton').addEventListener('click', sendData);
