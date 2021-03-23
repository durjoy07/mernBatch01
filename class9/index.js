const express = require('express');
const app = express();

const port = 8000;

app.get('/student/:name/:id([0-9]{4})', (req, res)=> {
    const { name, id } = req.params;
    const {age} = req.query;
    res.send({
        myName: name,
        myId: id,
        myAge: age
    })
})

app.get('*', (req, res)=> {
    res.send("<h1> 404 </b> Page not found :(</h1>")
})

app.listen(port, console.log('server is running on port', port))


