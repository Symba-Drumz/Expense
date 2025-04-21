import React from 'react';
import ExpenseRow from './ExpenseRow';

function ExpenseTable({ expenses, deleteExpense }) {
  if (expenses.length === 0) {
    return <p className="text-center mt-4">No expenses to display.</p>;
  }

  return (
    <table className="min-w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Description</th>
          <th className="border border-gray-300 px-4 py-2">Category</th>
          <th className="border border-gray-300 px-4 py-2">Amount</th>
          <th className="border border-gray-300 px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <ExpenseRow
            key={expense.id}
            expense={expense}
            deleteExpense={deleteExpense}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
