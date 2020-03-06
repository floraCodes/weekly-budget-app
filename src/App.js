import React, { useState, useEffect } from "react";
import Question from "./components/Question";
import Form from "./components/Form";
import List from "./components/List";
import BudgetControl from "./components/BudgetControl";

function App() {
  // 5) Define a budget state.
  const [weeklyBudget, setWeeklyBudget] = useState(0);

  // 6) Define avaliable budget state.
  const [avaliableBudget, setAvaliableBudget] = useState(0);

  // 7) Define a state to show the form
  const [showQuestion, setshowQuestion] = useState(true);

  // 12) Define a state to show expenses
  const [expenses, setExpenses] = useState([]);

  // 15) Define a state for useEffect (?)
  const [expense, setExpense] = useState({});

  // 16)
  const [createExpense, setCreateExpense] = useState(false);

  // 14) Update avaliableBudget with useEffect.
  useEffect(() => {
    if (createExpense) {
      // add the new budget
      setExpenses([...expenses, expense]);

      // substract from budget
      const updatedAvaliableBudget = avaliableBudget - expense.expenseAmount;
      setAvaliableBudget(updatedAvaliableBudget);
      // reset to false
      setCreateExpense(false);
    }
  }, [avaliableBudget, createExpense, expense, expenses]);

  return (
    <div className="container">
      <header>
        <h1>Weekly Budget</h1>
        <div className="contenido-principal contenido">
          {showQuestion ? (
            <Question
              setWeeklyBudget={setWeeklyBudget}
              setAvaliableBudget={setAvaliableBudget}
              setshowQuestion={setshowQuestion}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form
                  setExpense={setExpense}
                  setCreateExpense={setCreateExpense}
                />
              </div>
              <div className="one-half column">
                <List expenses={expenses} />
                <BudgetControl
                  weeklyBudget={weeklyBudget}
                  avaliableBudget={avaliableBudget}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
