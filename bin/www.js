import http from 'http';
import app from 'app';


var port = process.env.PORT || '3000';
app.set('port', port);

var server = http.createServer(app);

server.listen(port, function () {
    console.log(`escuchando en ${port}`);
})