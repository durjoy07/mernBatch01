var getExpress = require("express");
var app = getExpress();
var port = 8080;

app.listen(port, () => console.log(`Server is running in ${port}`))//creat the server

var student = [
    {
        name: "Rahim",
        id: 1,
        eyeColor: "black",
        age: 18
    },
    {
        name: "Karim",
        id: 2,
        eyeColor: "black",
        age: 19
    },
    {
        name: "Fahim",
        id: 3,
        eyeColor: "black",
        age: 20
    },
    {
        name: "Ridom",
        id: 4,
        eyeColor: "black",
        age: 14
    },
    {
        name: "Rakib",
        id: 5,
        eyeColor: "brown",
        age: 14
    },
]//this is my data

//   all information from only one route 

app.get('/studentinfo', (req,res)=> {
    const { eyeColor, age } = req.query; 
    var getTheStudent;
    if(eyeColor && age) {
       getTheStudent = student.filter(val => val.eyeColor == eyeColor && val.age > age)
    }
    else if(age) {
        getTheStudent = student.filter(val => {
            if (val.age <= age) {
                return val.eyeColor = "black";
            }
        })
    }
    else {
        getTheStudent = student.map(ele => {
            return {
                myName: ele.name,
                id: ele.id
            }
        })
    }

    setTimeout(()=> {
        res.send(getTheStudent)
    },2000)
})









//Find them whose eye color is black and age greater than 15
app.get("/student1", (req, res) => {
    var eyeColor = req.query.eyeColor;
    var age = req.query.age;
    var getTheStudent = student.filter(val => val.eyeColor == eyeColor && val.age > age) //filter the data 
   // res.send(getTheStudent)
    setTimeout(() => {
        console.log(getTheStudent);
        res.send(getTheStudent)
    }, 3000)  //receive the data after 3 sec.

})


//Find them whose age is less than equal 15 and change their eye color brown to black. 
app.get("/student2", (req, res) => {
    var age = req.query.age;
    var getTheStudent = student.filter(val => {
        if (val.age <= age) {
            return val.eyeColor = "black";
        }
    })//filter the data and change the eye color from black to brown

    setTimeout(() => {
        console.log(getTheStudent);
        res.send(getTheStudent)
    }, 3000)   //receive the data after 3 sec.

})


//Create a get route to see all students name and id only.
app.get("/student", (req, res) => {
    var getOnlyNameAndId = [];
    // student.map(val => {
    //     var jsonFormat = JSON.stringify(val, ["name", "id"]); //receive the id and name in json format
    //     var convertJsonToObjcet = JSON.parse(jsonFormat);//convert it to object
    //     getOnlyNameAndId.push(convertJsonToObjcet);//pust the data in to a array
    // })

    getOnlyNameAndId = student.map(ele=> {
        return {
            myName: ele.name,
            id: ele.id
        }
    })
    setTimeout(() => {
        console.log(getOnlyNameAndId);
        res.send(getOnlyNameAndId)
    }, 3000)//receive the data after 3 sec.

})
