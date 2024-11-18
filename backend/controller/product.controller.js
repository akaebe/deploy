import mongoose from "mongoose";
import Product from "../Model/product.modal.js";
export const createProduct =async (req,res)=>{
    try{
        const product = req.body
    if(!product.name||!product.price ||!product.image){
        res.status(400).json({success:false,message:"Please provide all fields"})
    }
    const newProduct = new Product(product)
    await newProduct.save()
    res.status(201).json({success:true,message:"product created successfully"})

    }catch(error){
        console.log("error",error.message)
        res.status(500).json({success:false,message:"server Error"})

    }

}
export const deleteProduct = async (req,res)=>{
    try {
        const {id}=req.params
        await Product.findByIdAndDelete(id)
        res.status(200).json({success:true,message:"product deleted successfully"})
        
    } catch (error) {
        console.log("error",error.message)
        res.status(404).json({success:false,message:"Product not found"})
        
    }
}
export const getProducts = async (req,res)=>{
    try {
        const products = await Product.find({})
        res.status(200).json({success:true,data:products})
        
    } catch (error) {
        console.log("cant fetch",error.message)
        res.send(500).json({success:false,message:"internal server error"})
        
    }
}
export const UpdateProduct = async (req,res)=>{
    const {id}= req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({success:false,message:"Invalid Product Id"})
    }
    const product = req.body
    if (
        !req.body.name ||
        !req.body.price ||
        !req.body.image
      ) {
        return res
          .status(400)
          .send({ success:false, message: "include name ,price and image" });
      }
      try {
        const UpdatedProduct = await Product.findByIdAndUpdate(id,product,{new:true})
        res.status(200).json({success:true,message:"product updated successfully",data:UpdatedProduct})
        
      } catch (error) {
        console.log(error.message)
        res.status(500).json({success:false,message:"server Error"})
        
      }
}