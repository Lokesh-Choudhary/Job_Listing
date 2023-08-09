const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRoutes = require('../routes/auth')
const jobsRoutes = require('../routes/jobs')
dotenv.config()


const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("/public"))

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true, 
    
})
.then(()=>{
    console.log("Connected to MongoDB");
})
.catch(err=>err.message)



app.get('/health', async (req, res) => {
    res.status(200).json("Server Up on Running");
})

app.use("/api/auth",authRoutes)
app.use("/api/jobs",jobsRoutes)




app.listen(process.env.PORT, () => {
    console.log(`Listening on http://localhost:${process.env.PORT}`)
  })
   
     
    
