// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
const {MongoClient,objectID}=require('mongodb')
const connectionUrl ='mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


 
MongoClient.connect(connectionUrl,{useNewUrlParser: true ,useUnifiedTopology: true},(error,client)=>{
    if(error){
        console.log('unable to connect to database')
    }
    const db = client.db(databaseName)
    db.collection('users').findOne({name:'preminda'},(error,user)=>{
        if(error){
            console.log('unabl to fetch')
        }

        console.log(user)
    })

    db.collection('users').find({age:27}).toArray((error,user)=>{
        if(error){
            console.log('unable')
        }
        console.log(user)
    })
    
    
})