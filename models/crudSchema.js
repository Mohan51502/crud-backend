const mongoose = require("mongoose");
const CrudSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
 
 
  phonenumber: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userid:{
    type: mongoose.Schema.Types.ObjectId,
    required: false,
  }


});

const cruddb = new mongoose.model("Crud", CrudSchema);

module.exports = cruddb;