import React, {useState} from "react";
import Expenses from "../src/components/Expenses/Expenses";
import NewExpense from "../src/components/NewExpenses/NewExpense"

const preseed = [
  {
    id: 'e1',
    title: 'Bought snacks',
    amount: 94.12,
    date: new Date(2021, 8, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 9, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() {

  const [expenses, setExpense] = useState(preseed)
 
  const addExpense =  expense =>
  {
    setExpense((prevExpense => {
      return [expense, ...prevExpense]
    }))
  }

  return (
    <div>
      <NewExpense onAdd = {addExpense} />
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
