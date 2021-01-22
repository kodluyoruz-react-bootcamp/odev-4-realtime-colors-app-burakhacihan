import io from 'socket.io-client';

let socket;

export const initSocket = () => {
	socket = io('http://localhost:3001', {
		transports: ['websocket'],
	});
};

export const addUser = (name) => {
	if(socket) socket.emit('joined', name);
}

export const userList = (callback) => {
	socket.on("loginlist",(res) => {
		callback(res);
	});
}

export const sessionInfo = (callback) => {
	socket.on("socketinfo",(res) => {
		callback(res);
	});
}

export const sendColor = (color,sessionid) => {
	if (socket) socket.emit('send-color',color,sessionid);
}

export const getColor = (callback) => {
	socket.on('selected-color',(color) => {
		callback(color);
	})
}

export const disconnectSocket = () => {
	if (socket) socket.disconnect();
};
