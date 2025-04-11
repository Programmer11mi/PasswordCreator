let tg = window.Telegram.WebApp;
tg.expand();

function sendData() {
    console.log("Функція sendData викликана"); // ✅ Перевірка

    const input = document.getElementById('numInput');
    const errorMsg = document.getElementById('errorMsg');
    const length = parseInt(input.value);

    console.log("Введене число:", length); // ✅ Перевірка

    if (length >= 8 && length <= 60) {
        const data = JSON.stringify({ length: length });
        console.log("Надсилаємо:", data); // ✅ Перевірка

        tg.sendData(data); // <-- якщо тут нічого не відбувається, значить проблема тут

        errorMsg.textContent = "";
    } else {
        errorMsg.textContent = "Введіть число від 8 до 60.";
        input.value = "";
        setTimeout(() => input.focus(), 100);
    }
}

document.getElementById('sendButton').addEventListener('click', sendData);
