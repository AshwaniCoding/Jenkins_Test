import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table, Button, Form } from 'react-bootstrap';
import './userCategories.css';
import imgNA from "../../assets/images/imgNA.jpg"; // Keep if needed for fallback or placeholders
// import img2 from "../../assets/images/img2.jpg"; // Keep if needed for fallback or placeholders

const UserCategories = ({ onAddToFavourites }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterSubCategory, setFilterSubCategory] = useState('');
  const [sort, setSort] = useState('');
  const [books, setBooks] = useState([]); // State to hold books
  const [formErrors, setFormErrors] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        let response = await fetch("http://localhost:8080/api/book", {
          method: "GET",
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          let data = await response.json();
          setBooks(data);
        } else {
          console.error("Error:", response.status, response.statusText);
          setFormErrors(response.statusText);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setFormErrors('An error occurred while fetching books.');
      }
    };

    fetchBooks();
  }, []); // Run once on mount

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

  const handleAddToFavourites = (book) => {
    onAddToFavourites(book);
  };

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
    } else if (sort === 'rating') {
      return b.rating - a.rating;
    } else {
      return 0;
    }
  });

  return (
    <Container fluid className="user-categories">
      <Row className="header">
        <Col>
          <h2>Available Books</h2>
        </Col>
      </Row>
      {formErrors && <Row><Col><div className="error-message">{formErrors}</div></Col></Row>}
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
              <option value="rating">Rating</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="table-responsive">
            <Table striped bordered hover className="book-table">
              <thead>
                <tr>
                  <th>S-No.</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Category</th>
                  <th>Sub-Category</th>
                  <th>Rating</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sortedBooks.length > 0 ? (
                  sortedBooks.map((book, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <img src={book.image || imgNA} alt={book.title} className="book-image" /> {/* Fallback image */}
                      </td>
                      <td>{book.title}</td>
                      <td>{book.author}</td>
                      <td>{book.category}</td>
                      <td>{book.subCategory}</td>
                      <td>{book.rating}</td>
                      <td>
                        <Button variant="primary" size="sm" className="action-btn">
                          Borrow Book
                        </Button>
                        <Button variant="success" size="sm" className="action-btn" onClick={() => handleAddToFavourites(book)}>
                          Add to Favourites
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center">
                      No books found.
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserCategories;
