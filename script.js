const messages = document.getElementById('messages');
const input = document.getElementById('input');
const usernameInput = document.getElementById('username');

// 初始化：載入儲存的聊天紀錄
window.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('chatlog');
    if (saved) messages.innerHTML = saved;
});

function sendMessage() {
    const text = input.value.trim();
    const username = usernameInput.value.trim();
    if (!text || !username) return;

    const msg = document.createElement('div');
    
    // 加上時間戳
    const time = new Date().toLocaleTimeString();
    msg.textContent = `[${time}] ${username}: ${text}`;
    messages.appendChild(msg);

    // 清空輸入框
    input.value = '';

    // 儲存聊天紀錄
    localStorage.setItem('chatlog', messages.innerHTML);
}

// ✅ 按 Enter 鍵可發送
input.addEventListener('keydown', e => {
    if (e.key === 'Enter') sendMessage();
});
Add Enter key send, timestamps, and localStorage chat history
