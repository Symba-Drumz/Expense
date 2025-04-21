import React, { useState } from 'react';

function ExpenseForm({ addExpense }) {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !category || !amount) return;

    const newExpense = {
      id: Date.now(),
      description,
      category,
      amount: parseFloat(amount).toFixed(2),
    };

    addExpense(newExpense);

    setDescription('');
    setCategory('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded shadow">
      <div className="mb-2">
        <label htmlFor="description" className="block font-semibold mb-1">Description</label>
        <input
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div className="mb-2">
        <label htmlFor="category" className="block font-semibold mb-1">Category</label>
        <input
          id="category"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div className="mb-2">
        <label htmlFor="amount" className="block font-semibold mb-1">Amount</label>
        <input
          id="amount"
          type="number"
          step="0.01"
          min="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
