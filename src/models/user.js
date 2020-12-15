const mongoose =require('mongoose')
const validator = require('validator')


const User=mongoose.model('User',{
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error('Email invalid')
            }
        }
    },
    age:{
        type:Number,
        default:0,
        validate(value){ 
            if(value<0){
                throw new Error('age must be positive number')
            }
        }
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength: [7, 'Enrollment number should have more than 7 cha'], 
        maxlength: [16, 'Enrollment number is not allowed more than 16'], 
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('passwor canot contain password')
            }
        }
    }
})

module.exports = User