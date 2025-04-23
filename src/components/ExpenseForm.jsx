import React, { useState } from 'react';

function ExpenseForm({ addExpense }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!name || !description || !category || !amount || !date) return;
  
      const newExpense = {
        id: Date.now(),
        name,
        description,
        category,
        amount: amount,
        date,
      };
  
      addExpense(newExpense);
  
      setName('');
      setDescription('');
      setCategory('');
      setAmount('');
      setDate('');
    };
  
    return (

        
        
        <form onSubmit={handleSubmit} className="form">
          <h2 className="text-xl font-bold mb-2">Add Expense</h2>
        <p className="text-gray-600 text-sm mb-6">Enter your expense details below</p>
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter expense name"
              className="w-70 p-2 border border-gray-300 rounded text-sm"
              required
            />
          </div>
          
          <div>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter expense description"
              className="w-70 p-2 border border-gray-300 rounded text-sm"
              required
            />
          </div>
  
          <div>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter expense category"
              className="w-70 p-2 border border-gray-300 rounded text-sm"
              required
            />
          </div>
  
          <div>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-70 p-2 border border-gray-300 rounded text-sm"
              required
            />
          </div>
  
          <div>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-middle  p-2 border border-gray-300 rounded text-sm"
              required
            />
          </div>
  
          <button
            type="submit"
            className="w-middle bg-black text-white p-2 rounded font-medium hover:bg-gray-800 mt-2"
            style={{color: 'white', backgroundColor: 'black'}}
          >
            Submit
          </button>
        </form>
      
    );
  }
  
  export default ExpenseForm;
  