import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";
import PropTypes from "prop-types";

const Form = ({ setExpense, setCreateExpense }) => {
  // 8)
  const [expenseType, setExpenseType] = useState("");
  const [expenseAmount, setExpenseAmount] = useState(0);

  // 11) Hook to validate input
  const [error, setError] = useState(false);

  // 10) Handle Submit
  const handleSubmit = e => {
    e.preventDefault();
    // a) Validate input
    if (
      expenseAmount < 1 ||
      isNaN(expenseAmount) ||
      expenseType.trim() === ""
    ) {
      setError(true);
      return;
    }
    setError(false);

    // b) Build the expense
    const expense = {
      expenseType,
      expenseAmount,
      id: shortid.generate()
    };

    // c) Pass the new expense to App (main component)
    setExpense(expense);
    setCreateExpense(true);

    // d) Reset Form
    setExpenseType("");
    setExpenseAmount(0);
  };

  // 9)

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add your expenses</h2>
      {error ? <Error message="Invalid Input - Fill all fields" /> : null}

      <div>
        <label>Type of expense</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Eg. Groceries"
          value={expenseType}
          onChange={e => setExpenseType(e.target.value)}
        />
        <label>Amount</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Eg. 300"
          value={expenseAmount}
          onChange={e => setExpenseAmount(parseInt(e.target.value))}
        />
      </div>

      <input type="submit" className="u-full-width" value="Add Expense" />
    </form>
  );
};

Form.propTypes = {
  setExpense: PropTypes.func.isRequired,
  setCreateExpense: PropTypes.func.isRequired
};

export default Form;
