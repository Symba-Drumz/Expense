import React from 'react';
import ExpenseRow from './ExpenseRow';

function ExpenseTable({ expenses }) {
    if (expenses.length === 0) {
      return <p >No expenses to display.</p>;
    }
  
    return (
      <div className=" table ">
        <table >
          <thead>
            <tr>
              <th >
                Expense
              </th>
              <th >
                Description
              </th>
              <th >
                Category
              </th>
              <th >
                Amount
              </th>
              <th >
                Date
              </th>
            </tr>
          </thead>
          <tbody >
            {expenses.map((expense, index) => (
              <ExpenseRow
                key={expense.id}
                expense={expense}
                isEven={index % 2 === 0}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default ExpenseTable;
  