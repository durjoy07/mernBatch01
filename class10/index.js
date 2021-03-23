const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 8000;

const studentRoutes = require('./routes');
const showinfo = require('./middlewares');

// app.use(showinfo);
app.use(morgan('common'))
app.use(studentRoutes);


app.get('/', (req, res)=> {
    res.send('Hello I am root')
})

app.get('*', (req, res)=> {
    res.send("<h1> 404 </b> Page not found :(</h1>")
})

app.listen(port, console.log('server is running on port', port))
