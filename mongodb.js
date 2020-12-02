const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionUrl ='mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionUrl,{useNewUrlParser: true ,useUnifiedTopology: true},(error,client)=>{
    if(error){
        console.log('unable to connect to database')
    }
    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Preminda',
    //     age: 23
    // },(error,result)=>{
    //     if(error){
    //         console.log('Unable to insert')
    //     }

    //     console.log(result.ops)
    // })
    db.collection('users').insertMany([
        {
            name:'preminda',
            age: 21
        },{
            name:'Bandara',
            age: 25
        }
    ],(error,result)=>{
        if(error){
            console.log('Unable to connect')
        }
        console.log(result.ops)
    })
})