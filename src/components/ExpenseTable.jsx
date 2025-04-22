import React from 'react';
import ExpenseRow from './ExpenseRow';

function ExpenseTable({ expenses }) {
    if (expenses.length === 0) {
      return <p className="text-center mt-4">No expenses to display.</p>;
    }
  
    return (
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-black">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Expense
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-white uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-white uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
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
  