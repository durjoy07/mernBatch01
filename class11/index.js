const express = require('express');
const app = express();
require('dotenv').config();

const expressLimit = require('express-rate-limit');
const userRoutes = require('./routes/userRoute')

const limiter = expressLimit({
    windowMs: 1 * 60 * 1000,
    max: 4,
    message: 'Too many request, Please try one minute later'
})

app.get('/', (req, res)=> {
    res.send('hello i am from root.')
})

app.use(limiter);
app.use('/api', userRoutes);

const port = process.env.PORT || 6000;
app.listen(port, ()=> console.log(`server is listening on port ${port}`))