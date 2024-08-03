const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { json } = require("body-parser")
const userRoutes = require('./routes/UserRoute.js');
const port = 4000
const app = express()


app.use(json({limit: '50mb'}))
app.use(cors())


app.get("/" , (req,res) => {
    res.send("Hello World")
})

app.use('/Signup', userRoutes);

mongoose.connect("mongodb+srv://Tanmay:Tanmay@atlascluster.yxup98a.mongodb.net/")
.then(() => {
    app.listen(port ,  () => {
        console.log(`Server started at port ${port}`)
    })
})
.catch((error) => {
    console.log(error)
})