// import express 
const express= require('express')

// import cors
const cors= require('cors')

// Create a server app using express
const app = express()

// State origin
app.use(cors ({
    origin:'http://localhost:4200'
}))

// set up a path number for server app
app.listen(3000,()=>{
    console.log(("server Started succesffully..."));

})

// import data services
const dataservices = require('./services/dataservices')

// to get all product
app.get('/getall-products',(req,res)=>{
    dataservices.getAll().then((result)=>{
        console.log(result);
        res.status(result.statusCode).json(result)
    })

}
)