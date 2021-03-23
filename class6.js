var fs = require('fs');
var server = require('http');
// Read a file 
server.createServer(function(req, res) {
    fs.readFile('hello.js', function(err, data) {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        eval(data.toString())
        res.write(data)
        // eval(data.toString())
        return res.end();
       
    })
}).listen(3000);

console.log('Our Server is running on port 3000');

//============================================
// Create a file --- appendFile

// server.createServer(function (req, res) {
//     fs.appendFile('hello.js', "console.log('hi')",
//      function (err) {
//         if(err) throw err;
//      console.log('successfully created');

//      })
//      res.end()
// }).listen(3000);

// console.log('Our Server is running on port 3000');

//===================== fs.open =============================

// server.createServer(function (req, res) {
//     fs.open('myNewFile.txt', 'w', function(err, file) {
//         if(err) throw err;
//         console.log('saved successfully');
//     })
// }).listen(3000);

// console.log('Our Server is running on port 3000');

//=================== fs.writeFile ==================== 
// server.createServer(function (req, res) {
//    fs.appendFile('myfile.txt', 'this is a another new text file',
//    function(err) {
//        if(err) throw err;
//        console.log('saved successfully');
//    }
//    )
// }).listen(3000);

// console.log('Our Server is running on port 3000');

//================= deleting a file ====================
// server.createServer(function (req, res) {
//     fs.unlink('a.js', function (err) {
//         if (err) throw err;
//         console.log('deleted successfully');
//     })
// }).listen(3000);

// console.log('Our Server is running on port 3000');

//============= file rename ===================

// server.createServer(function (req, res) {
//     fs.rename('class6.html', 'myHTMLfile.html', function(err) {
//             if(err) throw err;
//             console.log('renamed successfully');
//     })
// }).listen(3000);

// console.log('Our Server is running on port 3000');