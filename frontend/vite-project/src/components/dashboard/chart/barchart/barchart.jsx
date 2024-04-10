import React from 'react';
import './barchart.css';
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, BarElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useGlobalContext } from '../../../../back-connection/global';

ChartJs.register(CategoryScale, LinearScale,  BarElement, Title, Tooltip, Legend, ArcElement);

function BarChart() {
  const { getIncome, getExpense, income, expense } = useGlobalContext();

  React.useEffect(() => {
    getIncome();
    getExpense();
  }, []);


  let arr2 = [];
expense.map((exp) => {
  if (!arr2.includes(exp.catagory)) {
    arr2.push({ catagory: exp.catagory, amount: exp.amount });
  } else {
    arr2.forEach((element) => {
      if (element.catagory === exp.catagory) {
        element.amount += exp.amount;
      }
    });
  }
});

let arr = [];
income.map((inc) => {
  if (!arr.includes({ catagory: inc.catagory, amount: inc.amount })) {
    arr.push({ catagory: inc.catagory, amount: inc.amount });
  } else {
    arr.forEach((element) => {
      if (element.catagory === inc.catagory) {
        element.amount += inc.amount;
      }
    });
  }
});

  const data = {
    labels: arr.map((cat)=>cat.catagory),
    datasets: [
      {
        label: 'Income',
        data: arr.map((inc) => inc.amount),
        backgroundColor: 'green',
      },{
        label: 'Expense',
        data: arr2.map((inc) => inc.amount),
        backgroundColor: 'red',
      }
    ]
  };


  return (
    <div className='chart_container'>
      <Bar data={data} />
    </div>
  );
}

export default BarChart;