import React from 'react'
import Form from '../component/form'
import { useGlobalContext } from '../store/global'
import { bitcoin, calender, comment, design, trash, youtube } from "../assets/images/icons"
import Navigation from './navigation'

function Income() {

    const { getIncome, deleteIncome, income } = useGlobalContext()
    React.useEffect(() => {
        getIncome()
    }, [])
    const total_income = () => {
        const total = income.reduce((accumulator, item) => accumulator + item.amount, 0);
        return total.toLocaleString("en-US", { style: "currency", currency: "USD" });
    };

    const find_catagory_icon = (catagory) => {
        switch (catagory) {
            case 'youtube':
                return youtube
            case 'bitcoin':
                return bitcoin
            case 'design':
                return design
            default:
                return bitcoin
        }
    }

    return (
        <div className='flex bg-gray-800 w-full'>
            <Navigation />
            <div className="w-full bg-gray-900 m-3 rounded-2xl p-4">
                <h2 className="text-2xl font-bold mb-4">Incomes</h2>
                <div className='flex items-center justify-center bg-gray-700 rounded-lg py-3 px-5 mb-6'>
                    <p className='font-bold text-lg mr-2'>Total Income:</p>
                    <h3 className='text-green-500 text-xl font-extrabold'>{total_income()}</h3>
                </div>
                <div className='flex justify-between w-full'>
                    <Form position={'income'} />
                    <div className='w-full h-3/4 overflow-y-auto text-justify mt-4'>
                        {income.map((i) => {
                            const { _id, title, catagory, amount, date, discription } = i
                            const dateFromMongoDB = new Date(date);
                            const date_updated = dateFromMongoDB.toLocaleDateString("en-GB");

                            return (
                                <div
                                    key={_id}
                                    className='flex items-center justify-between w-11/12 bg-gray-700 rounded-lg py-4 px-4 mt-5'>
                                    <div className='flex items-center'>
                                        <div className='bg-gray-800 rounded-lg flex items-center justify-center h-12 w-12 mr-3'>
                                            <i className='text-2xl'>{find_catagory_icon(catagory)}</i>
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <div className='flex items-center gap-2 text-lg font-bold'>
                                                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                                                {title}
                                            </div>
                                            <div className='flex gap-10 text-sm text-gray-400'>
                                                <p>${amount}</p>
                                                <p><i>{calender}</i>{date_updated}</p>
                                                <p><i>{comment}</i>{discription}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className='rounded-full h-10 w-10 flex items-center justify-center bg-red-500 hover:bg-red-600'
                                        onClick={() => deleteIncome(_id)}>
                                        <i>{trash}</i>
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Income
