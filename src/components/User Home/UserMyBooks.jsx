// src/components/UserMyBooks/UserMyBooks.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Table, Button, Form } from 'react-bootstrap';
import './userMyBooks.css';
import img1 from "../../assets/images/img1.jpg"
import img2 from "../../assets/images/img2.jpg"

const UserMyBooks = () => {
  // const [filterGenre, setFilterGenre] = useState('');
  // const [filterAuthor, setFilterAuthor] = useState('');
  // const [sort, setSort] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterSubCategory, setFilterSubCategory] = useState('');
  const [sort, setSort] = useState('');

  const books = [
    {
      image: img1,
      title: 'The Hunger Games',
      author : 'Ram',
      category: 'Fiction',
      subCategory: 'Science Fiction',
      borrowedDate: '01-09-2024',
      dueDate: '20-09-2024',
      fine: '0',
    },
    {
      image: img2,
      title: 'Harry Potter and the Order of the Phoenix',
      author : 'Mohan',
      category: 'Fiction',
      subCategory: 'Science Fiction',
      borrowedDate: '02-09-2024',
      dueDate: '21-09-2024',
      fine: '0',
    },
    // Add more books here...
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
  const filteredBooks = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterCategory === '' || book.category === filterCategory) &&
      (filterSubCategory === '' || book.subCategory === filterSubCategory)
    );
  });

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (sort === 'title') {
      return a.title.localeCompare(b.title);
    } else if(sort === 'author'){
      return a.author.localeCompare(b.author);
    } else {
      return 0;
    }
  });

  return (
    <Container fluid className="user-my-books">
      <Row className="header">
        <Col >
          <h2>My Books</h2>
        </Col>
      </Row>
      <Row className="filter-sort">
        <Col md={4} sm={12} className="mb-2">
          <Form.Group controlId="searchBook">
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
          <Form.Group controlId="sortBooks">
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
          <Table striped bordered hover responsive className="book-table">
            <thead>
              <tr>
                <th>S-No.</th>
                <th>Image</th>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Sub-Category</th>
                <th>Borrowed Date</th>
                <th>Due Date</th>
                <th>Fine</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedBooks.length > 0 ? (
                sortedBooks.map((book, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td> {/* Serial Number */}
                    <td>
                      <img src={book.image} alt={book.title} className="book-image" />
                    </td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.category}</td>
                    <td>{book.subCategory}</td>
                    <td>{book.borrowedDate}</td>
                    <td>{book.dueDate}</td>
                    <td>{book.fine}</td>
                    <td>
                      <Button variant="success" size="sm">
                        Request Extension
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No books found.
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

export default UserMyBooks;
