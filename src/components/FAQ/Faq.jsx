import React, { useState } from 'react';
import './faq.css'; // Import the CSS file for styling
import faqImg from "../../assets/images/explore/exp4.png"

const faqData = [
  {
    question: 'How do I borrow a book?',
    answer: 'To borrow a book, go to the "All Books" section, find the book you want, and click on the "Borrow Book" button. The book will be added to your "My Books" section and will show the borrowed date and due date.'
  },
  {
    question: 'How can I request an extension for a borrowed book?',
    answer: 'In the "My Books" section, find the book you want to extend, and click the "Request Extension" button under the Actions column. A request will be sent to the library admin for approval.'
  },
  {
    question: 'How do I add a book to my favourites?',
    answer: 'Go to the "All Books" section, find the book you love, and click on "Add to Favourites." You can view all your favourite books in the "Favourites" section.'
  },
  {
    question: 'What happens if I return a book late?',
    answer: 'If you return a book after the due date, a fine may be applied depending on the library rules. The fine amount will be shown in the "My Books" section under the Fine column.'
  },
  {
    question: 'How do I update my profile information?',
    answer: 'Go to "My Profile" from the user dropdown and click the "Edit" button. You can update your personal and student details from there.'
  },
  {
    question: 'What are the book categories and sub-categories?',
    answer: 'Books in our library are divided into categories like Fiction, Non-Fiction, and Science, with sub-categories like Mystery, Biography, and Physics for more specific filtering.'
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-header">
        <div className="faq-image">
          <img src={faqImg} alt="Books" />
        </div>
        <div className="faq-text">
          <h2>Frequently</h2>
          <h2>Asked</h2> 
          <h2>Questions</h2>
          <p>Got a question? Find our FAQs here.</p>
        </div>
      </div>
      
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => handleToggle(index)}>
              <h3>{item.question}</h3>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
