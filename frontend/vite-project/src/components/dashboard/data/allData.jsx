import React from 'react';
import './allData.css';
import { useGlobalContext } from '../../../back-connection/global';

function IcomeData() {

  const { income, expense, getExpense, getIncome } = useGlobalContext();

  React.useEffect(() => {
    getIncome();
    getExpense();
  }, [income, expense, getIncome, getExpense]);

  const total_expense = () => {
    let total = 0;
    expense.map((exp) => {
      total += exp.amount;
    });
    return [total.toLocaleString("en-US", { style: "currency", currency: "USD" }),total];
  };

  const total_income = () => {
    let total = 0;
    income.map((inc) => {
      total += inc.amount;
    });
    return [total.toLocaleString("en-US", { style: "currency", currency: "USD" }),total];
  };
  const balance_total=()=>{
    let total=total_income()[1]-total_expense()[1]
    return total.toLocaleString("en-US", { style: "currency", currency: "USD" })
  }


  return (
    <div className='total_cont'>
      <div className='total_conatiner'>
        <div className="total">
            <h3>Total Income:</h3>
            <h1> {total_income()[0]}</h1>
          </div>
          <div className="total_expense">
            <h3>Total Expense:</h3>
            <h1>{total_expense()[0]}</h1>
          </div>
      </div>
        
        <div className=" balance">
          <h3>Total Balance:</h3>
          <h1>{balance_total()}</h1>
        </div>
    </div>
  );
}

export default IcomeData;