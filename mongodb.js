// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
const {MongoClient,objectID, ObjectID}=require('mongodb')
const connectionUrl ='mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


 
MongoClient.connect(connectionUrl,{useNewUrlParser: true ,useUnifiedTopology: true},(error,client)=>{
    if(error){
        console.log('unable to connect to database')
    }
    // const db = client.db(databaseName)
    
    // db.collection('users').deleteMany({
    //     age:27
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })
    const db = client.db(databaseName)
    
    db.collection('users').deleteOne({
        _id:ObjectID("5fc937aa6ff28501b811f93d")
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
    
})