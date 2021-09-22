import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = () =>
{
    const saveNewExpenseHandler = (newExpenses) => 
    {
        const expenseData = 
        {
            ...newExpenses,
            id: (Math.random() + 1).toString()
        }
    }

    return <div className="new-expense">
       <ExpenseForm  onNewExpenseSave = {saveNewExpenseHandler} />
    </div>
}

export default NewExpense