var app = require('./express.js');

var http = require('http');
require('dotenv').config()

var port = process.env.PORT || 4000
app.set('port', port);

var server = http.createServer(app);

console.log(`#######################🚀 Server Ready!#########################`);
server.listen(port , () => {
    console.log(`# Server listening on: ${port}`)
});