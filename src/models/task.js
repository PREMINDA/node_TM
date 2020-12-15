const mongoose =require('mongoose')
const validator = require('validator')

const Task = mongoose.model('Tasks',{
    task:{
        type:String,
        require:true,
        trim:true
    },
    complete:{
        type:Boolean,
        default:false
    }
})

module.exports = Task