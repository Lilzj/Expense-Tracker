import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) =>
{
    const saveNewExpenseHandler = (newExpenses) => 
    {
        const expenseData = 
        {
            ...newExpenses,
            id: (Math.random() + 1).toString()
        }
       props.onAdd(expenseData)
    }

    return <div className="new-expense">
       <ExpenseForm  onNewExpenseSave = {saveNewExpenseHandler} />
    </div>
}

export default NewExpense