import axios from 'axios'
import React, { useContext } from 'react'

const Base_url='http://localhost:4000/api/'


const GlobalContext=React.createContext()

export const GlobalProvider =({children})=>{
        const [income,setIncome]=React.useState([])
        const [expense,setExpense]=React.useState([])
        const addIncome=async (income)=>{
            const response=await axios.post(`${Base_url}add-income`,income)
                .catch((e)=>{
                    console.log(e)
                })
                const res=await axios.get(`${Base_url}get-income`)
                .catch((e)=>{
                    console.log(e)
                })
                setIncome(res.data)
        }

        const getIncome=async ()=>{
            const response=await axios.get(`${Base_url}get-income`)
                .catch((e)=>{
                    console.log(e)
                })
            setIncome(response.data)
        }

        const deleteIncome=async (id)=>{
        
            const response=await axios.delete(`${Base_url}delete-income/${id}`)
            .catch((e)=>{
                console.log("can't_delete")
            })
            const res=await axios.get(`${Base_url}get-income`)
            .catch((e)=>{
                console.log(e)
            })
            setIncome(res.data)
        }

    const getExpense=async ()=>{
            const response=await axios.get(`${Base_url}get-expense`)
                .catch((e)=>{
                    console.log(e)
                })
            setExpense(response.data)
            }                                    
    const deleteExpense=async (id)=>{
       
        const response=await axios.delete(`${Base_url}delete-expense/${id}`)
        .catch((e)=>{
            console.log("can't_delete")
        })
        const res=await axios.get(`${Base_url}get-expense`)
        .catch((e)=>{
            console.log(e)
        })
        setExpense(res.data)
    }
    const addExpense=async (expense)=>{
        const response=await axios.post(`${Base_url}add-expense`,expense)
            .catch((e)=>{
                console.log(e)
            })
            const res=await axios.get(`${Base_url}get-expense`)
            .catch((e)=>{
                console.log(e)
            })
            setExpense(res.data)
    }
  
    return(
        <GlobalContext.Provider value={{addIncome,getIncome,deleteIncome,income,addExpense,deleteExpense,getExpense,expense}}>
            {children}
        </GlobalContext.Provider>
    )

}

export const useGlobalContext=()=>{
    return useContext(GlobalContext)
}