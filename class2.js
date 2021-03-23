// Object 

// var student = {
//     firstName: "Tamim",
//     lastName: "hasan",
//     age: 18,
//     marks: {
//         bangla: 95,
//         english: 80
//     },
//     fullName: function() {
//             var h = this;
//         return function() {
//             console.log(h.firstName);
//         }

//         //var firstName = "kjlkasdf"
//     //     const {firstName} = this;
//     //    return firstName + " " + lastName
//        //console.log(this);
//     }
// }

// student.fullName()()


// delete student.age;
// delete student.firstName;
// delete student.marks.bangla
// console.log(student);
//var x = "age"

// console.log(student.firstName);
// console.log(student["lastName"]);
// console.log(student[x]);

// for (key in student) {
//     console.log(student[key]);
// }


// var student = {
//     firstName: "Tamim",
//     lastName: "hasan",
//     age: 18
// }

// var keys = Object.keys(student);
// var values = Object.values(student)
// var keyValue = Object.entries(student)
// console.log(keys);
// console.log(values);
// console.log(keyValue);

let marks = {
    bangla: 60,
    english: 70,
    math: 80,
    age: 22,
    isPassed: true,
    position: "First"
}

let newMarks = {
    bangla: 60,
    english: 70,
    math: 80,
    age: 22,
    isPassed: true,
    position: "First"
}

console.log(JSON.stringify(marks) == JSON.stringify(newMarks));

//  var x = "english"
//  console.log(marks["english"]);
// let sum = 0;
// for (key in marks) {
//    if (typeof marks[key] == 'number' && key!="age") {
//        sum+= marks[key]
//    }
// }
// console.log(sum);

// function isEmpty(obj) {
//     for( key in obj) {
//         return false;
//     }
//   return true;
// }

// console.log(isEmpty(marks));

// function getLength () {
//     return Object.keys(marks).length;
// }

// console.log(getLength());
// let sum = Object.values(marks).reduce((a,b)=> a+b)
// console.log(sum);
// let sum = 0;
// for (k in marks) {
//     sum+= marks[k]
// }
// console.log(sum);
//totalMarks=?

