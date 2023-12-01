// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import UserProfile from './UserProfile';
import TotalMonthlySpendings from './TotalMonthlySpendings';
import AddNewSpending from './AddNewSpending';

function App() {
  const [spendingData, setSpendingData] = useState([
    { date: '2023-11-01', time: '12:30 PM', day: 'Monday', transactionNumber: 'T001', place: 'Freshco', category: 'Groceries', amount: 300 },
    { date: '2023-11-02', time: '01:45 PM', day: 'Tuesday', transactionNumber: 'T002', place: 'TechZone', category: 'Electronics', amount: 500 },
    { date: '2023-11-03', time: '03:00 PM', day: 'Wednesday', transactionNumber: 'T003', place: 'Fashion Haven', category: 'Clothing', amount: 120 },
    { date: '2023-11-04', time: '05:15 PM', day: 'Thursday', transactionNumber: 'T004', place: 'Healthy Eats', category: 'Dining Out', amount: 40 },
    { date: '2023-11-05', time: '06:30 PM', day: 'Friday', transactionNumber: 'T005', place: 'Utilities Inc.', category: 'Utilities', amount: 150 },
    { date: '2023-11-06', time: '08:45 PM', day: 'Saturday', transactionNumber: 'T006', place: 'Books Emporium', category: 'Books', amount: 80 },
    { date: '2023-11-07', time: '10:00 AM', day: 'Sunday', transactionNumber: 'T007', place: 'Gym Fitness', category: 'Health', amount: 25 },
    { date: '2023-11-08', time: '11:15 AM', day: 'Monday', transactionNumber: 'T008', place: 'Starbucks', category: 'Coffee', amount: 5 },
    { date: '2023-11-09', time: '12:30 PM', day: 'Tuesday', transactionNumber: 'T009', place: 'Home Depot', category: 'Home Improvement', amount: 250 },
    { date: '2023-11-10', time: '01:45 PM', day: 'Wednesday', transactionNumber: 'T010', place: 'Dine & Dash Restaurant', category: 'Dining Out', amount: 200 },
    { date: '2023-11-11', time: '03:00 PM', day: 'Thursday', transactionNumber: 'T011', place: 'TechHub', category: 'Gadgets', amount: 180 },
    { date: '2023-11-12', time: '04:15 PM', day: 'Friday', transactionNumber: 'T012', place: 'Fast Food Junction', category: 'Dining Out', amount: 15 },
    { date: '2023-11-13', time: '05:30 PM', day: 'Saturday', transactionNumber: 'T013', place: 'Grocery Bazaar', category: 'Groceries', amount: 200 },
    { date: '2023-11-14', time: '06:45 PM', day: 'Sunday', transactionNumber: 'T014', place: 'Pet Paradise', category: 'Pet Supplies', amount: 40 },
    { date: '2023-11-15', time: '08:00 PM', day: 'Monday', transactionNumber: 'T015', place: 'Cinema Plex', category: 'Entertainment', amount: 100 },
    { date: '2023-11-16', time: '09:15 PM', day: 'Tuesday', transactionNumber: 'T016', place: 'TechZone', category: 'Electronics', amount: 300 },
    { date: '2023-11-17', time: '10:30 AM', day: 'Wednesday', transactionNumber: 'T017', place: 'Fitness Center', category: 'Health', amount: 30 },
    { date: '2023-11-18', time: '11:45 AM', day: 'Thursday', transactionNumber: 'T018', place: 'Fashion Haven', category: 'Clothing', amount: 90 },
    { date: '2023-11-19', time: '01:00 PM', day: 'Friday', transactionNumber: 'T019', place: 'Healthy Eats', category: 'Dining Out', amount: 35 },
    { date: '2023-11-20', time: '02:15 PM', day: 'Saturday', transactionNumber: 'T020', place: 'Books Emporium', category: 'Books', amount: 60 },
    { date: '2023-11-21', time: '03:30 PM', day: 'Sunday', transactionNumber: 'T021', place: 'Gym Fitness', category: 'Health', amount: 25 },
    { date: '2023-11-22', time: '04:45 PM', day: 'Monday', transactionNumber: 'T022', place: 'Starbucks', category: 'Coffee', amount: 5 },
    { date: '2023-11-23', time: '06:00 PM', day: 'Tuesday', transactionNumber: 'T023', place: 'Home Depot', category: 'Home Improvement', amount: 200 },
    { date: '2023-11-24', time: '07:15 PM', day: 'Wednesday', transactionNumber: 'T024', place: 'Dine & Dash Restaurant', category: 'Dining Out', amount: 150 },
    { date: '2023-11-25', time: '08:30 PM', day: 'Thursday', transactionNumber: 'T025', place: 'TechHub', category: 'Gadgets', amount: 120 },
    // Add more transactions as needed
  ]);

  const addNewSpending = (newSpending) => {
    setSpendingData([...spendingData, newSpending]);
  };

  return (
    <Router>
      <div>
        {/* Header */}
        <div className='header'>
          <header>
            <UserProfile />
          </header>
        </div>

        {/* Routes */}
        <Routes>
          {/* UserProfile Route */}
          <Route
            path="/"
            element={
              <div>
                {/* Welcome Section */}
                <section className='welcome-section'>
                  <div>
                    <h2>Welcome to Smart Money Management!</h2>
                    <p>Empower your financial journey with our sophisticated money analysis app designed for professionals.</p>
                  </div>
                </section>

                {/* Feature Container */}
                <section className='feature-section'>
                  <div className="feature-container">
                  <div className="feature">
            <a href="automated-salary.html">
              <h3>Automated Salary and Spending</h3>
              <p>Effortlessly manage your financial needs with automatic salary calculations and spending tracking.</p>
            </a>
          </div>
          <div className="feature">
            <a href="savings-tracker.html">
              <h3>Savings Progress Tracker</h3>
              <p>Chart your savings journey with our personal finance coach. Set goals and stay on track!</p>
            </a>
          </div>
          <div className="feature">
            <a href="expense-tracking.html">
              <h3>Expense Tracking</h3>
              <p>Record and categorize your daily expenses to gain insights into your spending patterns.</p>
            </a>
          </div>
          <div className="feature">
            <a href="insights-reports.html">
              <h3>Insights and Reports</h3>
              <p>Receive detailed insights and visual reports on your spending habits for informed financial decision-making.</p>
            </a>
          </div>
          <div className="feature">
            <a href="goal-celebrations.html">
              <h3>Goal Achievement Celebrations</h3>
              <p>Celebrate reaching your financial goals with personalized messages and achievements.</p>
            </a>
          </div>
          <div className="feature">
            <a href="financial-tips.html">
              <h3>Financial Tips</h3>
              <p>Receive personalized tips and suggestions for strategic spending and efficient money management.</p>
            </a>
          </div>
                  </div>
                </section>

                {/* Total Monthly Spendings */}
                <TotalMonthlySpendings spendingData={spendingData} />

                {/* Call to Action */}
                <section className='cta-section'>
                  <div className="cta-container">
                    <Link to="/add-new-spending" className="cta-button add-spending-button">
                      Add New Spending
                    </Link>
                    <Link to="/" className="cta-button">Download Mobile App</Link>
                  </div>
                </section>

                {/* Footer */}
                <footer className='footer'>
                  <p>&copy; 2023 Money Analysis App. All rights reserved.</p>
                </footer>
              </div>
            }
          />

          {/* AddNewSpending Route */}
          <Route
            path="/add-new-spending"
            element={<AddNewSpending onAddNewSpending={addNewSpending} spendingData={spendingData} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

