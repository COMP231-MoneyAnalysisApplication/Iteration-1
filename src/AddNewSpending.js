// AddNewSpending.js

import React, { useState } from 'react';
import './AddNewSpending.css';

const AddNewSpending = ({ onAddNewSpending }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    day: '',
    transactionNumber: '',
    place: '',
    category: '',
    amount: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSpending = {
      ...formData,
      amount: parseFloat(formData.amount),
      
    };

    // Invoke onAddNewSpending as a function
    onAddNewSpending(newSpending);
    window.alert('New Spending Added!', formData);

    setFormData({
      date: '',
      time: '',
      day: '',
      transactionNumber: '',
      place: '',
      category: '',
      amount: '',
    });
  };

  return (
    <section className="add-new-spending-section">
      <div className="add-new-spending-container">
        <h2>Add New Spending</h2>
        <form onSubmit={handleSubmit}>
          <label>Date:</label>
          <input type="text" name="date" value={formData.date} onChange={handleChange} required />

          <label>Time:</label>
          <input type="text" name="time" value={formData.time} onChange={handleChange} required />

          <label>Day:</label>
          <input type="text" name="day" value={formData.day} onChange={handleChange} required />

          <label>Transaction Number:</label>
          <input
            type="text"
            name="transactionNumber"
            value={formData.transactionNumber}
            onChange={handleChange}
            required
          />

          <label>Place:</label>
          <input type="text" name="place" value={formData.place} onChange={handleChange} required />

          <label>Category:</label>
          <input type="text" name="category" value={formData.category} onChange={handleChange} required />

          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            step="0.01"
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
      {/* Footer */}
      <footer className='footer'>
                  <p>&copy; 2023 Money Analysis App. All rights reserved.</p>
                </footer>
    </section>
  );
};

export default AddNewSpending;
