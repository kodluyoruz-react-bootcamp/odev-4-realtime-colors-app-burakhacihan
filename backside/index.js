const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const loginList = [];

app.get("/", (req, res) => {
	res.end("Hello Color Changer");
});

io.on('connection', (socket) => {
    
    socket.on('joined', (username) => {
        loginList.push({
            id: (loginList.length) + 1,
            name: username,
            socketID: socket.id
        });
        socket.broadcast.emit("loginlist", loginList);
        socket.emit('socketinfo',socket.id);
    });

    socket.on("send-color",(getColor,sessionid) => {
         
        socket.broadcast.emit("selected-color",{
            background: getColor,
            changerName: loginList[loginList.findIndex(x => x.socketID == sessionid)].name
        });
    })

    socket.broadcast.emit("loginlist", loginList);

    socket.on('disconnect', function () {
        for(var i = 0; i < loginList.length; i++) {
            if (loginList[i].socketID == socket.id) {
                loginList.splice(i, 1);
                break;
            }
        }
        socket.broadcast.emit("loginlist", loginList);
    }); 

});

http.listen(3001, () => {
	console.log("listening on *:3001");
});