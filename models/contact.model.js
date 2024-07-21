const mongoose=require('mongoose')

const contactSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
        minLength: 3
    },
    phone:{
        type: String,
        required: true,
        unique: true,
        minLength: 10,
        maxLength: 10
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    address:{
        type: String,
        required: true
    },
    organization:{
        type: String,
        required: true,
        enum: ['private','government','commercial']
    }
},{versionKey:false,timestamps:true})

module.exports=mongoose.model('contact',contactSchema)