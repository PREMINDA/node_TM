 const mongoose =require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology: true
})
// const User=mongoose.model('User',{
//     name:{
//         type:String
//     },
//     age:{
//         type:Number
//     }
// })

// const user1 = new User({
//     name:'Tim',
//     age: 27
// })

// user1.save().then(()=>{
//     console.log(user1)
// }).catch((error)=>{
//     console.log(error)
// })

const Task = mongoose.model('Tasks',{
    task:{
        type:String
    },
    complete:{
        type:Boolean
    }
})

const task1 = new Task({
    task:'asd asd asd asd',
    complete:true
})

task1.save().then(()=>{
    console.log(task1)
}).catch((error)=>{
    console.log(error)
})