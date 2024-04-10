const { Mongoose, default: mongoose } = require("mongoose");

const expenseSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        maxLength:50

    },
    amount:{
        type:Number,
        required:true,
        trim:true,
        maxLength:20
    },
    type:{
        type:String,
        default:'income'
    },
    date:{
        type:Date,
        required:true,
        trim:true,
        maxLength:20

    },   
    catagory:{
        type:String,
        required:true,
        trim:true

    },   
    discription:{
        type:String,
        required:true,
        trim:true,
        maxLength:50

    },
},{timestamps:true})

module.exports=mongoose.model('expense',expenseSchema)

