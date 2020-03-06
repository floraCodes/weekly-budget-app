import React, { useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Question = ({ setAvaliableBudget, setWeeklyBudget, setshowQuestion }) => {
  // 1) Define the state for settig budget
  const [amount, setAmount] = useState(0);

  // 4) Define the state of error for validation
  const [error, setError] = useState(false);

  // 2) Function to define the budget
  const handleChange = e => {
    setAmount(parseInt(e.target.value, 10));
  };

  // 3) Function to submit the budget
  const handleSubmit = e => {
    e.preventDefault();
    // a) Validate budget
    if (amount < 1 || NaN) {
      setError(true);
      return;
    }
    // b) If valid
    setError(false);
    setWeeklyBudget(amount);
    setAvaliableBudget(amount);
    setshowQuestion(false);
  };
  return (
    <>
      <h2>Whats your budget?</h2>
      {error ? <Error message="Invalid amount" /> : null}
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Insert your budget here"
          onChange={handleChange}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Submit Budget"
        />
      </form>
    </>
  );
};

Question.propTypes = {
  setAvaliableBudget: PropTypes.func.isRequired,
  setWeeklyBudget: PropTypes.func.isRequired,
  setshowQuestion: PropTypes.func.isRequired
};

export default Question;
