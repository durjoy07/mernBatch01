var products = [
    {
        title: "product1",
        price: 100,
        details: {
            type: "dry food",
            weight: "1kg",
            shop: {
                name: "daraz",
                place: "Dhaka"
            }
        }
    },
    {
        title: "product2",
        price: 200,
        details: {
            type: "vagitable",
            weight: "2kg",
            shop: {
                name: "daraz",
                place: "Dhaka"
            }
        }
    },
    {
        title: "product3",
        price: 250,
        details: {
            weight: "1kg"
        }
    },
    {
        title: "product4",
        price: 300,
        details: {
            type: "vagitable",
            weight: "1.5kg",
            shop: {
                name: "daraz",
                place: "Dhaka"
            }
        }
    }
]
//  calculte the total price of products using reduce method

// const res = products.reduce((total, current) => total+= current.price, 0)
// console.log(res);


// calculte total price of type vagitable

// var res = products.reduce((a, b) => {
//     if (b.details.type == 'vagitable') {
//         a += b.price
//     }
//     return a
// }, 0)
// console.log(res);

// Print those products title whose place is Dhaka

//  products.map(val => {
//     //   if(val.details.shop && (val.details.shop.place == 'Dhaka')) {
//     //       console.log(val.title);
//     //   } 
//     if(val?.details?.shop?.place) {
//         console.log(val.title);
//     }
// })
products.map(val => {
    if (val?.details?.shop) {
        console.log(val.title);
    }
})
// var res = products[2];
// console.log(res.details.shop.place);

// function first() {
//     return new Promise(resolve=> {
//        setTimeout(()=> {
//            resolve("first")
//        }, 1000)
//     })
// }

// function second() {
//     return new Promise(resolve=> {
//        setTimeout(()=> {
//            resolve("second")
//        }, 3000)
//     })
// }
// function third() {
//     return new Promise(resolve=> {
//        setTimeout(()=> {
//            resolve("third")
//        }, 2000)
//     })
// }

// async function execute() {
//     // first().then(res=>console.log(res))
//     // second().then(res=>console.log(res))
//     // third().then(res=>console.log(res))
//     var res1 = await first();
//     console.log(res1);

//     var res3 = await third();
//     console.log(res3);

//     var res2 = await second();
//     console.log(res2);

// }

// execute()


// let age = 18
// let welcome = (age < 18) ?
//  () => console.log("hello") :
//   () => console.log("Hi");

// welcome()


// let welcome = () => console.log("Hi");
