import io from 'socket.io-client';

let socket;

export const initSocket = () => {
	socket = io('http://localhost:3001', {
		transports: ['websocket','polling']
	});
};

export const disconnectSocket = () => {
	console.log('Disconnecting...');
	if (socket) socket.disconnect();
};

export const sendColor = (color) => {
	socket.emit('send-color',color);
}

export const getColor = (callback) => {
	socket.on('selected-color',(color) => {
		callback(color);
	})
}
