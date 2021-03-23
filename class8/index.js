const express = require('express');
const app = express();

const PORT = 5000;

app.get('/', (req, res)=> {
    res.send('<h1>hello I am root path</h1>');
    // console.log(req);
})

app.get('/user', (req, res)=>{
    let id = req.query.id;
   // console.log(id);
    const users = [
        {
            id: 1,
            userName: "apple",
            email: "appccle@gmail.com"
        },
        {
            id:2,
            userName: "banana",
            email: "next@gmail.com"
        },
        {
            id:3,
            userName: "Next Topper",
            email: "next@gmail.com"
        }
]

var specificUser = users.filter(ele=> ele.id==id)
    res.status(200).send(specificUser[0])
})

app.listen(PORT, () => console.log('Server is running on port', PORT));
