import React from 'react';

function ExpenseRow({ expense, isEven }) {
    return (
      <tr className={isEven ? 'bg-white' : 'bg-gray-50'}>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          {expense.name}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {expense.description}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {expense.category}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
          {expense.amount}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
          {expense.date}
        </td>
      </tr>
    );
  }
  
  export default ExpenseRow;
  