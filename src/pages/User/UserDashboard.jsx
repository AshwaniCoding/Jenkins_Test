// src/components/UserDashboard.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Offcanvas, Dropdown } from 'react-bootstrap';
import { FaUserCircle, FaBell } from 'react-icons/fa';
import { RiLogoutCircleRFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import UserHome from '../../components/User Home/UserHome';
import UserMyBooks from '../../components/User Home/UserMyBooks';
import UserHistory from '../../components/User Home/UserHistory';
import UserCategories from '../../components/User Home/UserCategories';
import './userDashboard.css';
import { Link } from 'react-router-dom';
import UserProfile from '../../components/User Home/UserProfile';
import UserFavourites from '../../components/User Home/UserFavourites';

const UserDashboard = (props) => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasClose = () => setShowOffcanvas(false);
  const handleOffcanvasShow = () => setShowOffcanvas(true);

  const renderComponent = () => {
    switch (props.active) {
      case 'home':
        return <UserHome />;
      case 'my-books':
        return <UserMyBooks />;
      case 'history':
        return <UserHistory />;
      case 'all-books':
        return <UserCategories />;
        case 'my-profile':
          return <UserProfile />;
        case 'favourites':
          return <UserFavourites />;
      default:
        return <UserHome />;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
  };

  return (
    <Container fluid className="user-home">
      <Row className="top-bar">
        <Col md={4} xs={6} >
          <h1>BookVerse</h1>
        </Col>
        <Col md={8} xs={6} className="text-right d-flex justify-content-end align-items-center">
          <nav className="nav-links">
            <ul className='links'>

              <li onClick={(e) => { e.preventDefault();}} ><Link to="/home">Home</Link></li>
              <li onClick={(e) => { e.preventDefault();}} ><Link to="/my-books">My Books</Link></li>
              <li onClick={(e) => { e.preventDefault();}} ><Link to="/history">History</Link></li>
              <li onClick={(e) => { e.preventDefault();}} ><Link to="/all-books">All Books</Link></li>
            </ul>
          </nav>
          <Dropdown className="mr-5">
            <Dropdown.Toggle as="div" className="dropdown-toggle">
              <FaBell size={24} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#action-1">Notification 1</Dropdown.Item>
              <Dropdown.Item href="#action-2">Notification 2</Dropdown.Item>
              <Dropdown.Item href="#action-3">Notification 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <nav className='nav-user'>
            <ul className="user-links">
              <li>
                <Dropdown>
                  <Dropdown.Toggle as="div" className="dropdown-toggle">
                    <FaUserCircle size={24} className="userSvg" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item ><FaUser size={24} className="user-drop" /><Link to="/my-profile">My Profile</Link></Dropdown.Item>
                    <Dropdown.Item ><FaHeart size={24} className="user-drop" /><Link to="/favourites">Favourites</Link></Dropdown.Item>
                    <Dropdown.Item ><RiLogoutCircleRFill size={24} className='user-drop' /><Link to="/" onClick={handleLogout}>Logout</Link></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
          </nav>
          
          <label className="mobile-menu-btn" onClick={handleOffcanvasShow}>
            ☰
          </label>
        </Col>
      </Row>
      <Offcanvas className="off-canvas-content" show={showOffcanvas} onHide={handleOffcanvasClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>BookVerse</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav className="sidebar">
            <ul>
              <li onClick={(e) => { e.preventDefault(); handleOffcanvasClose(); }} ><Link to="/home">Home</Link></li>
              <li onClick={(e) => { e.preventDefault(); handleOffcanvasClose(); }} ><Link to="/my-books">My Books</Link></li>
              <li onClick={(e) => { e.preventDefault(); handleOffcanvasClose(); }} ><Link to="/history">History</Link></li>
              <li onClick={(e) => { e.preventDefault(); handleOffcanvasClose(); }} ><Link to="/all-books">All Books</Link></li>
              <li onClick={(e) => { e.preventDefault(); handleOffcanvasClose(); }} ><Link to="/my-profile">My Profile</Link></li>
              <li onClick={(e) => { e.preventDefault(); handleOffcanvasClose(); }} ><Link to="/favourites">Favourites</Link></li>
              <li onClick={(e) => { e.preventDefault(); handleOffcanvasClose(); }} ><Link to="/" onClick={handleLogout}>Log out</Link></li>
            </ul>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
      {/* Render the active component based on the selected menu item */}
      <div>
        {renderComponent()}
      </div>
    </Container>
  );
};

export default UserDashboard;
