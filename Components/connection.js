const url="mongodb+srv://preorder:de7kWjiWwLEIrUTb@cluster0.udrrcgy.mongodb.net/?retryWrites=true&w=majority";
const express=require('express');
const mongoose=require('mongoose');
const app=express();
mongoose.set('strictQuery', false);
app.listen(3000,()=>{console.log("server running !")});

const mongocon=async ()=>{
    await mongoose.connect(url);
    console.log("mongoose connected");
}
mongocon();
app.use(express.json())
const get=require('./get')
app.use('/get',get)