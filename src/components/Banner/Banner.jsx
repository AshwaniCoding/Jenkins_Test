import React from 'react';
import './banner.css';
import { Link } from 'react-router-dom';
import stackBook from "../../assets/images/bookStack.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Revolutionize Your Library</h1>
        <p>Explore the universe within the pages of a book.</p>
        <Link to="/login"><button className="get-started-btn">Get Started</button></Link>
      </div>
      <div className="banner-3d-element">
        <img className="book-stack" src={stackBook} alt="books" />
      </div>
    </div>
  );
};

export default Banner;
