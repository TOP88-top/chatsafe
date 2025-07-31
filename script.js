const messages = document.getElementById('messages');
const input = document.getElementById('input');
const usernameInput = document.getElementById('username');

function sendMessage() {
  const text = input.value.trim();
  const username = usernameInput.value.trim();

  if (!text || !username) return;

  const msg = document.createElement('div');
  msg.textContent = `${username}: ${text}`;
  messages.appendChild(msg);

  input.value = '';
}
Update script.js to support username
