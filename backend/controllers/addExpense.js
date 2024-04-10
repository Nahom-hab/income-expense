
const expenseSchema=require('../models/expenseModel')

const addExpense=async (req,res)=>{
    const {title,amount,catagory,discription,date}=req.body
    

    const expense=expenseSchema({
        title,
        amount,
        catagory,
        discription,
        date
    })

    try{
        if(!title || !catagory || !discription || !date || !amount){
            return res.status(400).json({message:"all fields ore required"})
        }
        if(amount<0 || !amount==='number'){
            return res.status(400).json({message:'number cant be negetive'})
        }
        await expense.save()
        res.status(200).json({message:'saved succsusfully'})
    }catch(error){
        res.status(500).json({message:'server error'})
    }
}

const getExpense= async (req,res)=>{
    try{
        const incomes= await expenseSchema.find()
        res.status(200).json(incomes)
    }catch(error){
        res.status(500).json({message:'server error'})

    }

}


const deleteExpense= async (req,res)=>{
    
    const {id}=req.params
    try{
        const income = await expenseSchema.findByIdAndDelete(id)
        res.status(200).json({message:"income deleted"})
    }catch(error){
        res.status(500).json({message:'server error'})

    }

}

module.exports={addExpense,getExpense,deleteExpense}

