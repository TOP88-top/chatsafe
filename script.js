const messages = document.getElementById('messages');
const input = document.getElementById('input');

function sendMessage() {
    const text = input.value.trim();
    if (!text) return;
    const msg = document.createElement('div');
    msg.textContent = text;
    messages.appendChild(msg);
    input.value = '';
}
