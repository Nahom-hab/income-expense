import React from 'react';
import { useGlobalContext } from "../store/global";

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
    <div className="flex flex-col gap-2">
      {array.map((item) => (
        <div className="flex justify-between py-4 px-8 bg-gray-800 rounded-lg text-sm" key={item.id}>
          <span className={item.type === 'income' ? 'text-green-500' : 'text-red-500'}>
            {item.catagory}
          </span>
          <span className={item.type === 'income' ? 'text-green-500' : 'text-red-500'}>
            {item.type === 'income' ? '+' : '-'}${item.amount}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Recent;
