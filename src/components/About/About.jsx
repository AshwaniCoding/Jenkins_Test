import React from 'react';
import './about.css';
import abtImg from "../../assets/images/explore/exp8.png"

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About BookVerse</h2>
          <p>
            Welcome to <strong>BookVerse</strong>, your one-stop digital library for all your reading needs. Our platform offers a diverse collection of books across genres, easy borrowing and returning features, personalized recommendations, and real-time updates to keep you informed. Whether you're a student, a casual reader, or a book enthusiast, BookVerse is designed to make your reading experience seamless and enjoyable.
          </p>
          <p>
            Our mission is to bridge the gap between traditional libraries and the digital age, providing you with easy access to knowledge and entertainment from the comfort of your home. We believe in making reading accessible to everyone, and we strive to constantly improve our services with your feedback.
          </p>
          <p>
            Explore, borrow, and discover new books with <strong>BookVerse</strong>, where every book is just a click away.
          </p>
        </div>
        <div className="about-image">
          <img src={abtImg} alt="Library" />
        </div>
      </div>
    </div>
  );
};

export default About;
