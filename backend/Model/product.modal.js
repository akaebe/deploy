import mongoose from "mongoose";
const productSchmea =mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true

    },    
},{
    timestamps:true // created at and updated at
    
})
const Product = mongoose.model('Product',productSchmea)
// model() method takes two arguements 1! collection name 2! Schema defined , collection name must the First letter capital and singular , mongoose will convert into plural in lower case
export default Product