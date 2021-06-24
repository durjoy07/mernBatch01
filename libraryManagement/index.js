const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const mongoose = require('mongoose');

// require all routers 
const userRouter = require('./src/routes/user');
const libraryRouter = require('./src/routes/library');
const fileUploadRouter = require('./src/routes/fileUploader');
const testRouter = require('./src/routes/test');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`<h1> I am from root </h1>`)
})

// Database connection 
const url = process.env.MONGO_URL;
mongoose.connect(url, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})
    .then(() => console.log('mongodb server connected...'))
    .catch(err => console.log(err))

app.use('/user', userRouter);
app.use('/upload', fileUploadRouter);
app.use('/library', libraryRouter);
app.use('/test', testRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server listening on port ${port}`))