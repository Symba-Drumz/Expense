import React from 'react';

function ExpenseRow({ expense, deleteExpense }) {
  return (
    <tr>
      <td className="border px-4 py-2">{expense.description}</td>
      <td className="border px-4 py-2">{expense.category}</td>
      <td className="border px-4 py-2">${expense.amount}</td>
      <td className="border px-4 py-2 text-center">
        <button
          onClick={() => deleteExpense(expense.id)}
          className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
          aria-label="Delete expense"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ExpenseRow;
