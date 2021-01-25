import io from 'socket.io-client';

let socket;

export const initSocket = () => {
	socket = io('https://colorados.herokuapp.com', {
		transports: ['websocket']
	});
};

export const disconnectSocket = () => {
	console.log('Disconnecting...');
	if (socket) socket.disconnect();
};

export const sendColor = (color,sessionid) => {
	if (socket) socket.emit('send-color',color,sessionid);
}

export const getColor = (callback) => {
	socket.on('selected-color',(color) => {
		callback(color);
	})
}

export const getLastColor = (callback) => {
	if (socket){
		socket.on('last-color',(redisData) => {
			callback(redisData);
		})
	}
}
