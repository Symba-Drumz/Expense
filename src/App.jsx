import React, { useState } from 'react';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import SearchBar from './components/SearchBar';
import ExpenseTable from './components/ExpenseTable';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      name: 'Ugali Matumbo',
      description: "Wednesday's Lunch",
      category: 'food',
      amount: '100',
      date: '2025-04-09'
    },
    {
      id: 2,
      name: 'KPLC tokens',
      description: 'power tokens',
      category: 'utilities',
      amount: '2000',
      date: '2025-04-07'
    },
    {
      id: 3,
      name: 'Buy shoes',
      description: 'Add to my shoe collection',
      category: 'personal',
      amount: '5000',
      date: '2025-04-05'
    },
    {
      id: 4,
      name: 'Buy book',
      description: 'add to my book collection',
      category: 'growth',
      amount: '10000',
      date: '2025-04-07'
    }
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  // Add new expense to the list
  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  // Delete expense by id
  const deleteExpense = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter(expense => expense.id !== id));
  };

  // Filter expenses based on search term (case insensitive)
  const filteredExpenses = expenses.filter(expense => {
    const term = searchTerm.toLowerCase();
    return (
      expense.name.toLowerCase().includes(term) ||
      expense.description.toLowerCase().includes(term) ||
      expense.category.toLowerCase().includes(term)
    );
  });

  return (
    <div className=" box min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Header />
        <div className="flex gap-6 mt-8">
          <div className="w-1/3">
            <div className="bg-white rounded shadow-sm">
              <ExpenseForm addExpense={addExpense} />
            </div>
          </div>
          <div className="w-2/3">
            <div className=" container bg-white rounded shadow-sm p-6">
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              <ExpenseTable expenses={filteredExpenses} deleteExpense={deleteExpense} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
