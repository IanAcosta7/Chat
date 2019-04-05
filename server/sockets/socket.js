const { io } = require('../server');

let usersConnected = 0;
// let usersDisconnected = 0;

io.on('connection', (client) => {
    usersConnected++;
    updateUsers();

    client.on('disconnect', () => {
        usersConnected--;
        updateUsers();
        // usersDisconnected++;
    });

    client.on('sendMessage', (response, callback) => {
        console.log(`${response.user}: ${response.message}`);

        const data = {
            user: response.user,
            message: response.message
        };
        
        client.broadcast.emit('sendMessage', data);

        callback(response);
    });
});

const updateUsers = () => {
    console.log(`Users connected: ${usersConnected}`);
};