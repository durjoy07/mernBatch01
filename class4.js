// import required module
var server = require('http');
var url = require('url');
// create a server 

server.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    var password = '123@123';
    var userName = 'admin001'
    var myData = url.parse(req.url, true).query;
    if(myData.userName === userName && myData.password === password) {
        res.write('<h1>Welcome to you admin</h1>')
    }
    else {
        res.write('<h1>Your password or userName is incorrect.</h1>')
    }
    // var output = `month name is: ${myData.month}  and year is: ${myData.year} 
    //  day: ${myData.day}`
    // var data = req.url;
    // if(data === '/admin') {
    //     res.write('<h1>Welcome to you admin</h1>')
    // }
    // else if(data === '/user') {
    //     res.write('<h1>Welcome to you user</h1>')
    // }
    // else {
    //     res.write('<h1>Please login</h1>')
    // }
    res.end();
}).listen(8080);
console.log('Our server is running..........');