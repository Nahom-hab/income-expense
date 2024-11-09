import React from 'react';
import { useGlobalContext } from '../store/global';

function MinMax() {
  const [minmaxIncome, setMinmaxIncome] = React.useState([0, 0]);
  const [minmaxExpense, setMinmaxExpense] = React.useState([0, 0]);
  const { income, expense, getExpense, getIncome } = useGlobalContext();

  React.useEffect(() => {
    getIncome();
    getExpense();
  }, [getIncome, getExpense]);

  React.useEffect(() => {
    calculateMinMaxIncome();
    calculateMinMaxExpense();
  }, [income, expense]);

  const calculateMinMaxIncome = () => {
    let min = Infinity;
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
    let min = Infinity;
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
    <div className="space-y-4">
      {/* Income Section */}
      <div>
        <div className="flex justify-between mt-2">
          <p className="text-xs">Min</p>
          <h3 className="text-base">Salary</h3>
          <p className="text-xs">Max</p>
        </div>
        <div className="flex justify-between bg-gray-800 rounded-lg p-2 mx-10">
          {minmaxIncome.map((value, index) => (
            <p key={index} className="text-gray-400">${value}</p>
          ))}
        </div>
      </div>

      {/* Expense Section */}
      <div>
        <div className="flex justify-between mt-2">
          <p className="text-xs">Min</p>
          <h3 className="text-base">Expense</h3>
          <p className="text-xs">Max</p>
        </div>
        <div className="flex justify-between bg-gray-800 rounded-lg p-2 mx-10">
          {minmaxExpense.map((value, index) => (
            <p key={index} className="text-gray-400">${value}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MinMax;
