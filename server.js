const express=require('express');
const cors=require('cors');
const connectDB = require('./config/db');
const router = require('./routes/authRoutes');
const cartRouter = require('./routes/cartRoutes');


const app=express();


app.use(cors())
app.use(express.json())

connectDB()
app.use("/auth",router)
app.use("/cart",cartRouter)
app.get('/',(req,res)=>{
    res.send('Hello,World!')
})


const port=5000
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
