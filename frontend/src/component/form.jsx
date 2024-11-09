import React from "react";
import { useGlobalContext } from "../store/global";

function Form({ position }) {
  const { addIncome, addExpense } = useGlobalContext();
  const [submissionMessage, setSubmissionMessage] = React.useState('');
  const [inputState, setinputState] = React.useState({
    title: '',
    amount: '',
    date: '',
    catagory: '',
    discription: ''
  });

  const { title, amount, date, catagory, discription } = inputState;

  const handleInput = name => e => {
    setinputState({ ...inputState, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && amount && date && catagory && discription) {
      if (position === 'income') {
        addIncome(inputState);
      } else {
        addExpense(inputState);
      }
      // setinputState({
      //   title: '',
      //   amount: '',
      //   date: '',
      //   catagory: '',
      //   discription: ''
      // });
    } else {
      setSubmissionMessage('Please fill in all the fields.');
    }
  };

  React.useEffect(() => {
    if (submissionMessage) {
      const timer = setTimeout(() => {
        setSubmissionMessage('');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [submissionMessage]);

  return (
    <form className="mt-5 flex flex-col w-1/3 gap-5 mx-5" onSubmit={handleSubmit}>
      {submissionMessage && (
        <p className="text-red-500 text-sm animate-shake">{submissionMessage}</p>
      )}
      <input
        type="text"
        name="title"
        placeholder="Salary title"
        value={title}
        onChange={handleInput('title')}
        className="bg-gray-700 border-none text-sm p-2 rounded h-8 text-white placeholder-gray-400 focus:outline-none"
      />
      <input
        type="text"
        name="amount"
        placeholder="Salary amount"
        value={amount}
        onChange={handleInput('amount')}
        className="bg-gray-700 border-none text-sm p-2 rounded h-8 text-white placeholder-gray-400 focus:outline-none"
      />
      <input
        type="date"
        name="date"
        value={date}
        onChange={handleInput('date')}
        className="bg-gray-700 text-gray-400 border-none text-sm p-2 rounded h-8 focus:outline-none"
      />
      <div className="flex justify-end">
        <select
          name="catagory"
          value={catagory}
          onChange={handleInput('catagory')}
          className="p-2 w-32 bg-gray-700 text-gray-400 border-none rounded text-sm focus:outline-none cursor-pointer hover:opacity-90"
        >
          <option value="" disabled>Select option</option>
          <option value="freelancing">Freelancing</option>
          <option value="youtube">YouTube</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="traveling">Traveling</option>
          <option value="rent">Rent</option>
          <option value="clothing">Clothing</option>
        </select>
      </div>
      <textarea
        placeholder="Add any discription"
        name="discription"
        value={discription}
        cols="30"
        rows="4"
        onChange={handleInput('discription')}
        className="bg-gray-700 text-white border-none p-2 rounded resize-none focus:outline-none placeholder-gray-400"
      ></textarea>
      <button
        type="submit"
        className="w-32 p-2 text-sm rounded-full bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus:outline-none"
      >
        {position === 'income' ? '+ Add Income' : '+ Add Expense'}
      </button>
    </form>
  );
}

export default Form;
