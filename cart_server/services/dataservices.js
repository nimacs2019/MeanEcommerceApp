// import db
const db = require('./db')

const getAll=()=>
{   
    return db.Product.find().then((result)=>{
        console.log(result);
        if(result)
        {
            return{
                status:true,
                statusCode:200,
                products:result
            }
        }
        else
        {
            return{
                status:false,
                statusCode:404,
                message:'invalid'
            }

        }
    })

}

module.exports=
{
    getAll
}