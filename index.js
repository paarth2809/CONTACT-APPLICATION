const express=require('express')
const mongoose=require('mongoose')
const port_config=require('./configs/port.config')
const db_config=require('./configs/db.config')

const app=express()
app.use(express.json())

require('./routes/contact.route')(app)

app.listen(port_config.PORT,()=>{
    console.log(`server has started on port number: ${port_config.PORT}`)
})

mongoose.connect(db_config.db_url)
const db=mongoose.connection

db.once("open",()=>{
    console.log("mongoDB connection successful")
})

db.on("error",()=>{
    console.log("mongoDB connection unsuccessful")
})