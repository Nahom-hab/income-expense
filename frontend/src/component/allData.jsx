import React from 'react';
import { useGlobalContext } from '../store/global';

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
    return [total.toLocaleString("en-US", { style: "currency", currency: "USD" }), total];
  };

  const total_income = () => {
    let total = 0;
    income.map((inc) => {
      total += inc.amount;
    });
    return [total.toLocaleString("en-US", { style: "currency", currency: "USD" }), total];
  };

  const balance_total = () => {
    let total = total_income()[1] - total_expense()[1];
    return total.toLocaleString("en-US", { style: "currency", currency: "USD" });
  };

  return (
    <div className="flex flex-col mt-8 mx-8">
      <div className="flex justify-between mb-8">
        <div className="bg-gray-800 p-2 w-2/5 rounded-lg">
          <h3 className="text-gray-400">Total Income:</h3>
          <h1 className="text-gray-300">{total_income()[0]}</h1>
        </div>
        <div className="bg-gray-800 p-2 w-2/5 rounded-lg">
          <h3 className="text-red-500">Total Expense:</h3>
          <h1 className="text-red-400">{total_expense()[0]}</h1>
        </div>
      </div>

      <div className="bg-gray-800 p-2 w-2/5 rounded-lg mx-auto mt-5">
        <h3 className="text-gray-400">Total Balance:</h3>
        <h1 className="text-green-500">{balance_total()}</h1>
      </div>
    </div>
  );
}

export default IcomeData;
