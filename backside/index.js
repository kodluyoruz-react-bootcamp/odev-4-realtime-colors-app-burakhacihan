const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
	res.end("Hello Color Changer");
});

io.on('connection', (socket) => {

    socket.on("send-color",(getColor) => {
        socket.broadcast.emit("selected-color",{
            background: getColor,
        });
    });

    socket.on('disconnect', function () {
        console.log("biri oturumu kapattı.");
    }); 

});

http.listen(3001, () => {
	console.log("listening on *:3001");
}); 