 const mongoose =require('mongoose')
 const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology: true
})
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

const user1 = new User({
    name:'jerry',
    email:'PREminda@gamil.com',
    age: 27,
    password:'P0775758922M'
})

user1.save().then(()=>{
    console.log(user1)
}).catch((error)=>{
    console.log(error)
})

// const Task = mongoose.model('Tasks',{
//     task:{
//         type:String
//     },
//     complete:{
//         type:Boolean
//     }
// })

// const task1 = new Task({
//     task:'asd asd asd asd',
//     complete:true
// })

// task1.save().then(()=>{
//     console.log(task1)
// }).catch((error)=>{
//     console.log(error)
// })