
const app = require("express")();
const httpServer = require("http").createServer(app);
const options = { /* ... */ };
const io = require("socket.io")(httpServer, options);
const port =8080;


io.on("connection", socket => {
    
    console.log(` user arika`);
    
socket.on(`user_2`, mse => {
    console.log(`${mse.user}`   +mse.yazi);
    io.emit(`user_2`,{yazan:mse.yazi , kullanici:mse.user});
});


socket.on(`user_1`,mse=> {
io.emit(`user_1` ,{num:mse.num ,ses:mse.ses})

});

socket.on(`user_3`, msw => {
io.emit(`user_3` , msw)
});


socket.on(`user_4`, msw => {
    io.emit(`user_4` , msw)
    });

});


httpServer.listen(port,()=> console.log(`connected :` + port));

 
