const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');

const path = require('path');


// app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.static(path.join(__dirname, 'public')));

const port = 8082;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
server.on('error', (err)=>{console.error(err);console.error("err.code="+err.code);});
server.on('listening', ()=>{
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.log('Listening on ' + bind);
});
