import React from 'react';
import { useGlobalContext } from "../../../back-connection/global";
import './recent.css';

function Recent() {
  const [array, setArray] = React.useState([]);
  const { income, expense, getExpense, getIncome } = useGlobalContext();

  React.useEffect(() => {
    getIncome();
    getExpense();
    const mergedArray = [...income.map(item => ({ ...item, type: 'income' })),
                         ...expense.map(item => ({ ...item, type: 'expense' }))];
    mergedArray.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setArray(mergedArray.slice(0, 3));
  }, [income, expense, getIncome, getExpense]);

  return (
    <div className='recent_container'>
      {array.map((item) => {
        return (
          <div className="elem" key={item.id}>
            <span className={item.type=='income'?'income_type':'expense_type'}>{item.catagory}</span>
            <span className={item.type=='income'?'income_type':'expense_type'}>{item.type=='income'?'+':'-'}${item.amount}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Recent;