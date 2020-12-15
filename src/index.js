const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000


app.use(express.json())

app.post('/users',(req,res)=>{
    const user = new User(req.body)
    
    user.save().then(()=>{ 
        res.send(user)
    }).catch((e)=>{
        res.status(400).send(e)

    })
})

app.get('/users',(req,res)=>{
    User.find({}).then((user)=>{
        res.send(user)
    }).catch((e)=>{
        res.status(500).send()
    })
})

app.get('/users/:id',(req,res)=>{

    const _id = req.params.id
    User.findById(_id).then((user)=>{
        if(!user){
            return res.status(404).send()
        }
        res.send(user)

    }).catch((e)=>{
        res.status(500).send()
    })
})
app.post('/task',(req,res)=>{
    const task = new Task(req.body)

    task.save().then(()=>{
        res.status(201).send(task)

    }).catch(()=>{
        res.status(400).send(e)
        
    })
})

app.listen(port,()=>{
    console.log('server on')
})