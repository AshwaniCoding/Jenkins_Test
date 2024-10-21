import React from 'react';
import './userHome.css';
import img3 from "../../assets/images/img3.jpg"

const UserHome = () => {
  
  const user = JSON.parse(localStorage.getItem('user'));
  const fullName = user ? user.full_name : "Guest"; // Fallback to "Guest" if user is not found
  const userName = fullName.split(" ")[0]; // Get the first name

  const stats = {
    totalBooksBorrowed: 34,
    booksCurrentlyBorrowed: 3,
    overdueBooks: 1,
    favoriteBooks: 12,
  };

  return (
    <div className="user-home">
      {/* Welcome Banner */}
      <div className="welcome-banner">
        <h1>Welcome back, {userName}!</h1>
      </div>

      {/* Quick Stats */}
      <div className="quick-stats">
        <div className="stat-card">
          <span className="stat-icon">📚</span>
          <div className="stat-info">
            <h3>Total Books Borrowed</h3>
            <p>{stats.totalBooksBorrowed}</p>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon">📖</span>
          <div className="stat-info">
            <h3>Books Currently Borrowed</h3>
            <p>{stats.booksCurrentlyBorrowed}</p>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon">⚠️</span>
          <div className="stat-info">
            <h3>Overdue Books</h3>
            <p>{stats.overdueBooks}</p>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon">❤️</span>
          <div className="stat-info">
            <h3>Books Added to Favorites</h3>
            <p>{stats.favoriteBooks}</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <div className="activity-item">
          <img src={img3} alt="Book Thumbnail" />
          <div className="activity-info">
            <h4>The Great Gatsby</h4>
            <p>Borrowed on: 2024-09-01</p>
          </div>
        </div>
        {/* Add more activity items as needed */}
      </div>

      {/* Recommendations */}
      <div className="recommendations">
        <h2>Recommended for You</h2>
        <div className="recommendation-carousel">
          <div className="recommendation-item">
            <img src={img3} alt="Book Thumbnail" className='recommendation-img'/>
            <h4>1984 by George Orwell</h4>
            <button>Borrow</button>
            <button>Add to Favorites</button>
          </div>
          {/* Add more recommendation items as needed */}
        </div>
      </div>

      {/* Library News */}
      <div className="library-news">
        <h2>Library News & Updates</h2>
        <ul>
          <li>New arrivals in the Fiction section!</li>
          <li>Join our book club meeting on 2024-09-15.</li>
          <li>Extended library hours on weekends.</li>
          {/* Add more news items as needed */}
        </ul>
      </div>
    </div>
  );
};

export default UserHome;
