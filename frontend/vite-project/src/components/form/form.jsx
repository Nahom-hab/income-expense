import React from "react";
import { useGlobalContext } from "../../back-connection/global";
import axios from "axios";
import './form.css'
import { incomes } from "../../assets/images/icons";

function Form({position}){

// const Base_url='http://localhost:4000/api/'

const {addIncome,addExpense}=useGlobalContext() 
const [submissionMessage, setSubmissionMessage] = React.useState('');
const [inputState,setinputState]=React.useState({
    title:'',
    amount:'',
    date:'',
    catagory:'',
    discription:''
})

const {title,amount,date,catagory,discription}=inputState

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
      setinputState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: ''
      });
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

return(
    <>
        <form className="froms"  onSubmit={handleSubmit} >
        {submissionMessage && (
          <p className={`submission-message ${submissionMessage ? 'shake' : ''}`}>
            {submissionMessage}
          </p>
        )} 
                <input   type="text" 
                        name='title' 
                        placeholder='Salary title'
                        value={title}
                        onChange={handleInput('title')} />
                <input  
                        type="text" 
                        name='amount' 
                        placeholder='Salary amount'
                        value={amount}
                        onChange={handleInput('amount')} />
                <input  type="date"
                        className="date" 
                        name='date' 
                        value={date}
                        onChange={handleInput('date')} />
                <div className="select">
                    <select 
                            name="catagory"
                            value={catagory}
                            onChange={handleInput('catagory')}>   
                        <option value="" disabled>select option</option>
                        <option value="freelancing">freelancing</option>
                        <option value="youtube">youtube</option>
                        <option value="bitcoin">bitcoin</option>
                        <option value="travling">travling</option>
                        <option value="rent">rent</option>
                        <option value="clothing">clothing</option>
                    </select>
                </div>
             
               
                <textarea 
                        placeholder="Add any discription"
                        name="discription"
                        value={discription} 
                        cols="30" 
                        rows="4"
                        onChange={handleInput('discription')}></textarea> 
                <button type="submit">{position==='income'?'+ Add Income':'+ Add Expense'}</button>
            </form>
    </>
)

}

export default Form