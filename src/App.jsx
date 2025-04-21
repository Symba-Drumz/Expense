import React, { useState } from 'react';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import SearchBar from './components/SearchBar';
import ExpenseTable from './components/ExpenseTable';

function App() {
  const [expenses, setExpenses] = useState([]);
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
      expense.description.toLowerCase().includes(term) ||
      expense.category.toLowerCase().includes(term)
    );
  });

  return (
    <div className="container mx-auto p-4">
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseTable expenses={filteredExpenses} deleteExpense={deleteExpense} />
    </div>
  );
}

export default App;
