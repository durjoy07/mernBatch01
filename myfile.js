//  import myFile from './class5.js';

var myFile = require('./class5')

var server = require('http');

server.createServer(function(req, res) {
    res.write('hello');
    res.end();
}).listen(3000);

console.log('Our server is running.......');