const express=require('express')
const {addIncome, deleteIncome, getIncome}= require('../controllers/addIncome')
const { addExpense, getExpense, deleteExpense } = require('../controllers/addExpense')
const router=express.Router()

router.post('/add-income',addIncome)
      .get('/get-income',getIncome)
      .delete('/delete-income/:id',deleteIncome)
      .post('/add-expense',addExpense)
      .get('/get-expense',getExpense)
      .delete('/delete-expense/:id',deleteExpense)

router.get( '/', (req,res)=>{
    res.send('hello world')
})

module.exports=router