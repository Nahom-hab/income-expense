import React from 'react';
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useGlobalContext } from '../store/global';

ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

function Chart() {
  const { getIncome, getExpense, income, expense } = useGlobalContext();

  React.useEffect(() => {
    getIncome();
    getExpense();
  }, []);

  const dateFormat = (date) => {
    const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };
  const options = {

    scales: {
      x: {
        grid: {
          color: 'rgb(82, 78, 78)',
        },
      },
      y: {
        grid: {
          color: 'rgb(82, 78, 78)',
        },
      },
    },
  };

  const data = {
    labels: income.map((inc) => dateFormat(inc.date)),
    datasets: [
      {
        label: 'Income',
        data: income.map((inc) => inc.amount),
        backgroundColor: 'green',
        tension: .2,
        borderWidth: 2,
        borderColor: 'green',
      },
      {
        label: 'Expense',
        data: expense.map((exp) => exp.amount),
        backgroundColor: 'red',
        tension: .2,
        borderWidth: 2,
        borderColor: 'red',
      }
    ]
  };


  return (
    <div className='h-[250px] w-[500px] p-3 rounded-xl bg-gray-800'>
      <Line data={data} options={options} />
    </div>
  );
}

export default Chart;