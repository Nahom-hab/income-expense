import './income.css'
import React from 'react'
import Form from '../form/form'
import { useGlobalContext } from '../../back-connection/global'
import { bitcoin, calender, comment, dashboard,design,trash, youtube } from "../../assets/images/icons"

function Income(){

   

    const {getIncome,deleteIncome,income}=useGlobalContext()
    React.useEffect(()=>{
        getIncome()
    },[])
    const total_income = () => {
        const total = income.reduce((accumulator, item) => accumulator + item.amount, 0);
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
                <h2>Incomes</h2>
                <div className='head'>
                    <p className='p'>Total Income:</p>
                    <h3 className='h3'>{total_income()}</h3>
                </div>
                <div className='constainer'>
                    <Form position={'income'}></Form>
                    <div className='data_container'>
                        {income.map((i)=>{
                            const {_id,title,catagory,amount,date,discription}=i
                            const dateFromMongoDB = new Date(date);
                            const date_updated = dateFromMongoDB.toLocaleDateString("en-GB");

                            return(   
                                <div
                                    key={_id} 
                                    className='get_conatiner'>
                                    <div className='text_cont'>
                                        <div className='icon'><i className='big_icon'>{find_catagory_icon(catagory)}</i></div>
                                        <div className='inner_container'>
                                            <div className='income_title'><div className="income_dot"></div>{title}</div>
                                            <div className='inner_bottom'>
                                                <p>${amount}</p>
                                                <p><i>{calender}</i>{date_updated}</p>
                                                <p><i>{comment}</i>{discription}</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <button
                                        className='btn'
                                        onClick={()=>deleteIncome(_id)}>
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

export default Income