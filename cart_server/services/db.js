// import mongoose
const mongoose = require('mongoose')

// set up connection string mongoose
mongoose.connect('mongodb://localhost:27017/webshop',()=>{
    console.log("mongodb connected !!!!!!!!!!!");
})

// create a model using mongoose
const Product =mongoose.model('Product',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number

    }
})

module.exports=
{
    Product
}