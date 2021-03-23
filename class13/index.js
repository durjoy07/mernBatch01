const express = require('express');
const app = express();
require('dotenv').config();

const mongoose = require('mongoose');

app.get('/', (req, res)=> {
    res.send(`<h1> I am from root </h1>`)
})

// Database connection 
const url = process.env.MONGO_URL;
mongoose.connect(url, {
    useNewUrlParser: true, useUnifiedTopology: true
})
.then(()=> console.log('mongodb server connected...'))
.catch(err=> console.log(err))


const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`server listening on port ${port}`))