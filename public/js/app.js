import {socket, sendMessage} from './sockets/user-socket.js';

const message = document.getElementById("message");
const sendButton = document.getElementById("send");
const chat = document.getElementById("chat");

sendButton.addEventListener('click', () => {
    
    sendMessage(message.value);
    message.value = '';
});

export const updateChat = response => {
    chat.textContent += `${response.user}: ${response.message}\n`
};