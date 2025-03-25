const mongoose = require('mongoose')

// the method which is used to create schema is known as schema method

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    address:{
        street:String,
        city:String,
        postalCode:String,
    }
})

const User = mongoose.model('User',userSchema);
module.exports= User