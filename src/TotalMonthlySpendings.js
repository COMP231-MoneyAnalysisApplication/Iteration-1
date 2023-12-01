// TotalMonthlySpendings.js

import React from 'react';
import './UserProfile.css';

const TotalMonthlySpendings = ({ spendingData }) => {
  const totalSpendings = spendingData.reduce((total, transaction) => total + transaction.amount, 0);

  return (
    <section className="total-spending-section">
      <div className="total-spending-container">
        <h2>Total Monthly Spendings</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Day</th>
              <th>Transaction Number</th>
              <th>Place</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {spendingData.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.date}</td>
                <td>{transaction.time}</td>
                <td>{transaction.day}</td>
                <td>{transaction.transactionNumber}</td>
                <td>{transaction.place}</td>
                <td>{transaction.category}</td>
                <td>${transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Total Spendings for this month: ${totalSpendings}</p>
      </div>
    </section>
  );
};

export default TotalMonthlySpendings;
