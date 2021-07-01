// let salesData = [
//   {
//     courier_collection_amount: "5",
//     invoice_nm: "bastob_e1452",
//     courier: "redx",
//   },
//   {
//     courier_collection_amount: "3",
//     invoice_nm: "bastob_eOa47",
//     courier: "eCourier",
//   },
//   {
//     courier_collection_amount: "5",
//     invoice_nm: "bastob_eOaP2",
//     courier: "redx",
//   },
//   {
//     courier_collection_amount: "2",
//     invoice_nm: "bastob_eOa47",
//     courier: "eCourier",
//   },
// ];

// function findData(arr,key) {
//     var arr2 = [];
//     arr.map(e => {
//         let found = arr2.findIndex(ele=> ele[key] === e[key]);
//         if(found !== -1) {
//             arr2[found].cnt++;
//             arr2[found].courier_collection_amount += +e.courier_collection_amount;
//         }
//         else {
//             arr2.push({
//               [key]: e[key],
//               cnt: 1,
//               courier_collection_amount: +e.courier_collection_amount,
//             });
//         }
//     })

//     return arr2;
// }


// let key = "courier";
// let result = findData(salesData, key);

// console.log("res = ", result);

const Mongoose = require("mongoose");
const MongooseTimeStamp = require("mongoose-timestamp"); // this package will help you to keep track of created at and updated at time
const Schema = Mongoose.Schema;

const postSchema = new Schema({
    postHeading:String,
    post:String,
    images: [String],
    postlikes:{ type: Number, default:0 }, // type not boolean 
    postdisLikes:{ type: Number, default: 0},
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User'    // user model reference // to know details https://mongoosejs.com/docs/populate.html
    },
    // postcommentsCount:{ type: Number, default: 0}, // no need this field
    postcomments:[    // postcomments.length dile comment count peye jaben
        {
          comment: String, 
          user: {    // credentials of commenter // by populating user you will get full information of user
            type: Schema.Types.ObjectId,
            ref: 'User'
          }
        }
        ],
    postCategory: String,   // such as: programming, tech, cooking, travel etc.
    tags: [String],  // tags will help when you search related things 
    isDeleted:{ type: Boolean, default:false },
    createdDate: { type: Date, default: Date.now },
    editDate: { type: Date, default: Date.now }
   });

   postSchema.plugin(MongooseTimeStamp);  // use timeStamp here