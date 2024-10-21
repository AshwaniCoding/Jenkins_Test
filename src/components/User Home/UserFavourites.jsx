import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import './userFavourites.css';

const UserFavourites = (favouriteBooks) => {
  return (
    <Container fluid className="user-favourites">
      <Row className="header">
        <Col>
          <h2>Favourite Books</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="table-responsive">
            <Table striped bordered hover className="book-table">
              <thead>
                <tr>
                  <th>S-No.</th> {/* Serial Number Column */}
                  <th>Image</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Category</th>
                  <th>Sub-Category</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {favouriteBooks.length > 0 ? (
                  favouriteBooks.map((book, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td> {/* Serial Number */}
                      <td>
                        <img src={book.image} alt={book.title} className="book-image" />
                      </td>
                      <td>{book.title}</td>
                      <td>{book.author}</td>
                      <td>{book.category}</td>
                      <td>{book.subCategory}</td>
                      <td>{book.rating}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center">
                      No favourite books found.
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

export default UserFavourites;
