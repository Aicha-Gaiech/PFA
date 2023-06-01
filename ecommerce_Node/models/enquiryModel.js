const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var enquirySchema = new mongoose.Schema({
    status:{
        type:String
    },
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    email:{
        type:String
    },
    mobile:{
        type:String
    },
    comment:{
        type:String
    }
  
}
,
{
    timestamps:true,
});

//Export the model
module.exports = mongoose.model('Enquiry', enquirySchema);