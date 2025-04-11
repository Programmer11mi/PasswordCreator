document.addEventListener("DOMContentLoaded", () => {
    let tg = window.Telegram.WebApp;
    tg.expand();

    function sendData() {
        const input = document.getElementById('numInput');
        const length = parseInt(input.value);

        if (length >= 8 && length <= 60) {
            tg.sendData(JSON.stringify({ length: length }));
        } else {
            alert("Введіть число від 8 до 60.");
            input.value = '';
            input.focus();
        }
    }

    document.getElementById('sendButton').addEventListener('click', sendData);
});
