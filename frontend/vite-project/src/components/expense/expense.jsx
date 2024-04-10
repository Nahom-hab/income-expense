
import React from 'react'
import Form from '../form/form'
import { useGlobalContext } from '../../back-connection/global'
import { youtube,bitcoin,design, expenses, trash, comment, calender } from "../../assets/images/icons"

function Expense(){

    const {addExpense,getExpense,deleteExpense,expense}=useGlobalContext()
    React.useEffect(()=>{
        getExpense()
    },[])
    const total_expense = () => {
        const total = expense.reduce((accumulator, item) => accumulator + item.amount, 0);
        return total.toLocaleString("en-US", { style: "currency", currency: "USD" });
    };


    const find_catagory_icon=(catagory)=>{
        switch (catagory) {
            case 'youtube':
                return youtube
            case 'bitcoin':
                return bitcoin
            case 'design':
                return design
            default:
                return bitcoin
        }

    }
   
    return(
        <>
            <div className="home">
                <h2>Expense</h2>
                <div className='head'>
                    <p className='p'>Total Expense:</p>
                    <h3  className='h3_expense'>-{total_expense()}</h3>
                </div>
            <div className='constainer'>
               <Form position={'expense'}></Form>
               <div className='data_container'>
               {expense.map((i)=>{
                        const {_id,title,catagory,amount,date,discription}=i
                        const dateFromMongoDB = new Date(date);
                        const date_updated = dateFromMongoDB.toLocaleDateString("en-GB");

                        return(   
                                <div className='get_conatiner'>
                                    <div className='text_cont'>
                                        <div className='icon'><i className='big_icon'>{find_catagory_icon(catagory)}</i></div>
                                        <div className='inner_container'>
                                        <div className='income_title'><div className="expense_dot"></div>{title}</div>
                                            <div className='inner_bottom'>
                                                <p>${amount}</p>
                                                <p><i>{calender}</i>{date_updated}</p>
                                                <p><i>{comment}</i>{discription}</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <button
                                        className='btn'
                                        onClick={()=>deleteExpense(_id)}>
                                            <i>{trash}</i>
                                    </button>
                                </div>
                            )
                        })}
               </div>
               </div>
            </div>
        </>
    )
}

export default Expense