import React from 'react';
import './explore.css';
import exp1 from "../../assets/images/explore/exp12.png"
import exp2 from "../../assets/images/explore/exp2.png"
import exp3 from "../../assets/images/explore/exp3.png"
import exp4 from "../../assets/images/explore/exp10.png"

const features = [
  {
    title: 'Diverse Book Collection',
    description: 'Browse through thousands of books across various genres, categories, and sub-categories. Find the perfect book for every mood and need.',
    imgSrc: exp1 // Update with your image path
  },
  {
    title: 'Seamless Borrowing',
    description: 'Easily borrow books with just a click. Keep track of borrowed books and request extensions when needed, all from your dashboard.',
    imgSrc: exp2 // Update with your image path
  },
  {
    title: 'Real-Time Updates',
    description: 'Stay informed with real-time updates on library news, book recommendations, overdue alerts, and upcoming events.',
    imgSrc: exp3 // Update with your image path
  },
  {
    title: 'Personalized Recommendations',
    description: 'Get tailored book suggestions based on your reading history and preferences. Discover new books that match your interests.',
    imgSrc: exp4 // Update with your image path
  }
];

const Explore = () => {
  return (
    <div className="explore">
      <h2>Explore Our Digital Library</h2>
      <div className="feature-cards">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <img src={feature.imgSrc} alt={feature.title} className="feature-image" />
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
