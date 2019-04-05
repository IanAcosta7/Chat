export {socket, sendMessage};
import {updateChat} from '../app.js';

let socket = io();

// Listen the server
socket.on('connect', () => {

});


socket.on('sendMessage', (response) => updateChat(response));

// Send info to the server
const sendMessage = (message) => {
    socket.emit('sendMessage', {
        user: "usuario",
        message
    }, response => updateChat(response));
}