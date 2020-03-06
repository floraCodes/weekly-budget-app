import React from "react";
import PropTypes from "prop-types";

const Expense = ({ expense }) => (
  <li className="gastos">
    <p>
      {expense.expenseType}
      <span className="gasto">$ {expense.expenseAmount}</span>
    </p>
  </li>
);

Expense.propTypes = {
  expense: PropTypes.object.isRequired
};

export default Expense;
