const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
    res.end("Hello Color Changer");
});

io.on('connection', (socket) => {

    socket.on("send-color",(getColor,name) => {
        socket.broadcast.emit("selected-color",{
            background: getColor,
            changerName: name
        });
    });

    socket.on('disconnect', function () {
        console.log("Birileri şimdi aramızdan ayrıldı.");
    }); 

});

http.listen(process.env.PORT || 3000, () => {
	console.log("listening on *:" + process.env.PORT);
}); 