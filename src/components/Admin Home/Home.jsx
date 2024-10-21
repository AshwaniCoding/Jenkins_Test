import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="admin-home">
      <h1 className="page-header">Dashboard</h1>
      
      <div className="stats-cards">
        <div className="card">
          <h3>Total Books</h3>
          <p>1200</p>
        </div>
        <div className="card">
          <h3>Active Users</h3>
          <p>350</p>
        </div>
        <div className="card">
          <h3>Books Borrowed</h3>
          <p>500</p>
        </div>
        <div className="card">
          <h3>Overdue Books</h3>
          <p>20</p>
        </div>
      </div>

      <div className="recent-activities">
        <h2>Recent Activities</h2>
        <ul>
          <li>User John borrowed "The Great Gatsby"</li>
          <li>Added new book "1984" by George Orwell</li>
          <li>User Jane returned "To Kill a Mockingbird"</li>
        </ul>
      </div>

      <div className="notifications">
        <h2>Notifications</h2>
        <ul>
          <li>Overdue: "War and Peace" by Leo Tolstoy (User: Mike)</li>
          <li>Extension Request: "Pride and Prejudice" by Jane Austen (User: Sarah)</li>
          <li>System maintenance scheduled for next Friday</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
