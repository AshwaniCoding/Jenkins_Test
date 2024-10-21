import React, { useState } from 'react';
import { Container, Row, Col, Offcanvas } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import Home from "../../components/Admin Home/Home";
import './adminDashboard.css';
import { Link } from 'react-router-dom';

const AdminDashboard = (props) => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasClose = () => setShowOffcanvas(false);
  const handleOffcanvasShow = () => setShowOffcanvas(true);

  const renderComponent = () => {
    switch (props.active) {
      case 'dashboard':
        return <Home />;
      case 'manage-books':
        return <div><h2>Manage Books</h2></div>;
      case 'manage-users':
        return <div><h2>Manage Users</h2></div>;
      case 'borrowing-history':
        return <div><h2>Borrowing History</h2></div>;
      case 'fine-management':
        return <div><h2>Fine Management</h2></div>;
      case 'notifications':
        return <div><h2>Notifications & Announcements</h2></div>;
      case 'reports-analytics':
        return <div><h2>Report & Analytics</h2></div>;
      case 'category-management':
        return <div><h2>Category & Sub-category Management</h2></div>;
      case 'admin-profile':
        return <div><h2>Admin Profile</h2></div>;
      case 'settings':
        return <div><h2>Settings</h2></div>;
      default:
        return <div><h2>Dashboard Content</h2></div>;
    }
  };

  return (
    <Container fluid className="admin-dashboard">
      <Row className="top-bar">
        <Col xs={6}>
          <h1>BookVerse Admin</h1>
        </Col>
        <Col xs={6} className="text-right">
          <FaBars className="menu-btn" onClick={handleOffcanvasShow} />
        </Col>
      </Row>

      <Row className="content-row">
        <Col md={3} className="sidebar d-none d-md-block">
          <nav>
            <ul>
              <li><Link to="/admin/dashboard">Dashboard</Link></li>
              <li><Link to="/admin/manage-books">Manage Books</Link></li>
              <li><Link to="/admin/manage-users">Manage Users</Link></li>
              <li><Link to="/admin/borrowing-history">Borrowing History</Link></li>
              <li><Link to="/admin/fine-management">Fine Management</Link></li>
              <li><Link to="/admin/notifications">Notification & Announcement</Link></li>
              <li><Link to="/admin/reports-analytics">Report & Analytics</Link></li>
              <li><Link to="/admin/category-management">Category & Sub-category</Link></li>
              <li><Link to="/admin/admin-profile">Admin Profile</Link></li>
              <li><Link to="/admin/settings">Settings</Link></li>
            </ul>
          </nav>
        </Col>

        <Col md={9} className="content">
          {renderComponent()}
        </Col>
      </Row>

      <Offcanvas className="off-canvas-menu" show={showOffcanvas} onHide={handleOffcanvasClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>BookVerse Admin</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav>
            <ul>
              <li onClick={() => { handleOffcanvasClose(); }} ><Link to="/admin/dashboard">Dashboard</Link></li>
              <li onClick={() => { handleOffcanvasClose(); }} ><Link to="/admin/manage-books">Manage Books</Link></li>
              <li onClick={() => { handleOffcanvasClose(); }} ><Link to="/admin/manage-users">Manage Users</Link></li>
              <li onClick={() => { handleOffcanvasClose(); }} ><Link to="/admin/borrowing-history">Borrowing History</Link></li>
              <li onClick={() => { handleOffcanvasClose(); }} ><Link to="/admin/fine-management">Fine Management</Link></li>
              <li onClick={() => { handleOffcanvasClose(); }} ><Link to="/admin/notifications">Notification & Announcement</Link></li>
              <li onClick={() => { handleOffcanvasClose(); }} ><Link to="/admin/reports-analytics">Report & Analytics</Link></li>
              <li onClick={() => { handleOffcanvasClose(); }} ><Link to="/admin/category-management">Category & Sub-category</Link></li>
              <li onClick={() => { handleOffcanvasClose(); }} ><Link to="/admin/admin-profile">Admin Profile</Link></li>
              <li onClick={() => { handleOffcanvasClose(); }} ><Link to="/admin/settings">Settings</Link></li>
            </ul>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
};

export default AdminDashboard;
