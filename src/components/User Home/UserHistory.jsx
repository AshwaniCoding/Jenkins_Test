import React, { useState } from 'react';
import { Container, Row, Col, Table, Form } from 'react-bootstrap';
import './userHistory.css';
import img1 from "../../assets/images/img1.jpg"
import img2 from "../../assets/images/img2.jpg"

const UserHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterSubCategory, setFilterSubCategory] = useState('');
  const [sort, setSort] = useState('');

  const history = [
    {
      image: img1,
      title: 'The Hunger Games',
      author : 'Ram',
      category: 'Fiction',
      subCategory: 'Science Fiction',
      borrowedDate: '01-08-2024',
      returnDate: '20-08-2024',
      fine: '0',
    },
    {
      image: img2,
      title: 'Harry Potter and the Order of the Phoenix',
      author : 'Mohan',
      category: 'Fiction',
      subCategory: 'Fantasy',
      borrowedDate: '02-08-2024',
      returnDate: '21-08-2024',
      fine: '0',
    },
    // Add more history entries here...
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterCategoryChange = (e) => {
    setFilterCategory(e.target.value);
  };

  const handleFilterSubCategoryChange = (e) => {
    setFilterSubCategory(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  // Apply search, filters, and sorting
  const filteredHistory = history.filter((entry) => {
    return (
      entry.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterCategory === '' || entry.category === filterCategory) &&
      (filterSubCategory === '' || entry.subCategory === filterSubCategory)
    );
  });

  const sortedHistory = [...filteredHistory].sort((a, b) => {
    if (sort === 'title') {
      return a.title.localeCompare(b.title);
    } else if(sort === 'author'){
      return a.author.localeCompare(b.author);
    } else {
      return 0;
    }
  });

  return (
    <Container fluid className="user-history">
      <Row className="header">
        <Col>
          <h2>Borrowing History</h2>
        </Col>
      </Row>
      <Row className="filter-sort">
        <Col md={4} sm={12} className="mb-2">
          <Form.Group controlId="searchHistory">
            <Form.Label>Search</Form.Label>
            <Form.Control type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search for a book..." />
          </Form.Group>
        </Col>
        <Col md={3} sm={12} className="mb-2">
          <Form.Group controlId="filterCategory">
            <Form.Label>Filter by Category</Form.Label>
            <Form.Control as="select" value={filterCategory} onChange={handleFilterCategoryChange}>
              <option value="">All Categories</option>
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              {/* Add more categories as needed */}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={3} sm={12} className="mb-2">
          <Form.Group controlId="filterSubCategory">
            <Form.Label>Filter by Sub-Category</Form.Label>
            <Form.Control as="select" value={filterSubCategory} onChange={handleFilterSubCategoryChange}>
              <option value="">All Sub-Categories</option>
              <option value="Science Fiction">Science Fiction</option>
              <option value="Fantasy">Fantasy</option>
              {/* Add more subcategories as needed */}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={2} sm={12} className="mb-2">
          <Form.Group controlId="sortHistory">
            <Form.Label>Sort by</Form.Label>
            <Form.Control as="select" value={sort} onChange={handleSortChange}>
              <option value="">None</option>
              <option value="title">Title</option>
              <option value="author">Author</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover responsive className="history-table">
            <thead>
              <tr>
                <th>S-No.</th>
                <th>Image</th>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Sub-Category</th>
                <th>Borrowed Date</th>
                <th>Return Date</th>
                <th>Fine</th>
              </tr>
            </thead>
            <tbody>
              {sortedHistory.length > 0 ? (
                sortedHistory.map((entry, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td> {/* Serial Number */}
                    <td>
                      <img src={entry.image} alt={entry.title} className="book-image" />
                    </td>
                    <td>{entry.title}</td>
                    <td>{entry.author}</td>
                    <td>{entry.category}</td>
                    <td>{entry.subCategory}</td>
                    <td>{entry.borrowedDate}</td>
                    <td>{entry.returnDate}</td>
                    <td>{entry.fine}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="text-center">
                    No history found.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default UserHistory;
