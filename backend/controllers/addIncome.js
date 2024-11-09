
const incomeSchema = require('../models/incomeModel')

const addIncome = async (req, res) => {
    console.log(req.body);

    let { title, amount, catagory, discription, date } = req.body
    amount = parseInt(amount)

    const income = incomeSchema({
        title,
        amount,
        catagory,
        discription,
        date,
    })




    try {
        if (!title || !catagory || !discription || !date || !amount) {
            return res.status(400).json({ message: "all fields ore required" })
        }
        if (amount < 0 || !amount === 'number') {
            return res.status(400).json({ message: 'number cant be negetive' })
        }
        await income.save()
        res.status(200).json({ message: 'saved succsusfully' })
    } catch (error) {
        res.status(500).json({ message: 'server error' })
    }
}


const getIncome = async (req, res) => {
    try {
        const incomes = await incomeSchema.find()
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({ message: 'server error' })

    }

}



const deleteIncome = async (req, res) => {

    const { id } = req.params
    try {
        const income = await incomeSchema.findByIdAndDelete(id)
        res.status(200).json({ message: "income deleted" })
    } catch (error) {
        res.status(500).json({ message: 'server error' })

    }

}

module.exports = { deleteIncome, addIncome, getIncome }

