import express from 'express'
import userRoutes from './Routes/userRoutes.js'




const app = express()

app.use(express.json());

app.use('/api/v1/users',userRoutes)


app.listen(5000,()=>console.log("Server Running"))
