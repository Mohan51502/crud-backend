const mongoose = require("mongoose");

// const DB = process.env.DATABASE

// mongoose.connect(DB,{
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// }).then(()=> console.log("DataBase Connected")).catch((errr)=>{
//     console.log(errr);
// })

mongoose.connect("mongodb+srv://rajmohan51502:vo5zORfxndu72DSl@cluster0.wwgxqxn.mongodb.net/Crud", {});