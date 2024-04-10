
import React from 'react';
import { useGlobalContext } from '../../../back-connection/global';
import './imnMax.css'

function MinMax() {
  const [minmaxIncome, setMinmaxIncome] = React.useState([]);
  const [minmaxExpense, setMinmaxExpense] = React.useState([]);
  const { income, expense, getExpense, getIncome } = useGlobalContext();

  React.useEffect(() => {
    getIncome();
    getExpense();
  }, [income, expense, getIncome, getExpense]);

  React.useEffect(() => {
    calculateMinMaxIncome();
    calculateMinMaxExpense();
  }, [income, expense]);

  const calculateMinMaxIncome = () => {
    let min = 10000000000000;
    let max = 0;
    income.forEach((inc) => {
      if (inc.amount < min) {
        min = inc.amount;
      }
      if (inc.amount > max) {
        max = inc.amount;
      }
    });
    setMinmaxIncome([min, max]);
  };

  const calculateMinMaxExpense = () => {
    let min = 1000000000000000;
    let max = 0;
    expense.forEach((exp) => {
      if (exp.amount < min) {
        min = exp.amount;
      }
      if (exp.amount > max) {
        max = exp.amount;
      }
    });
    setMinmaxExpense([min, max]);
  };

  return (
    <div>
      <div>
          <div className='income_con'>
            <p>Min</p>
            <h3>Salary</h3>
            <p>Max</p>
          </div>
          <div className='minmax'>
              {minmaxIncome.map((value, index) => (
              <p key={index}>${value}</p>
              ))}
          </div>
        
      </div>
      <div>
          <div className='income_con'>
            <p>Min</p>
            <h3>Expense</h3>
            <p>Max</p>
          </div>
          <div className='minmax'>
            {minmaxExpense.map((value, index) => (
              <p key={index}>${value}</p>
            ))}
          </div>
       
      </div>
    </div>
  );
}

export default MinMax;