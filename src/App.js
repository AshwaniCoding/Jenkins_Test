import './App.css';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import LoginSignup from './pages/LoginSignup/LoginSignup';
import UserDashboard from './pages/User/UserDashboard';
import AdminDashboard from './pages/Admin/AdminDashboard';
import PrivateComponent from './utils/PrivateComponent';

function App() {
  return (
    <>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/signup" element={<LoginSignup />} />
        <Route element={<PrivateComponent />}>
            <Route path="/home" element={<UserDashboard active="home" />} />
            <Route path="/my-books" element={<UserDashboard active="my-books" />} />
            <Route path="/history" element={<UserDashboard active="history" />} />
            <Route path="/all-books" element={<UserDashboard active="all-books" />} />
            <Route path="/my-profile" element={<UserDashboard active="my-profile" />} />
            <Route path="/favourites" element={<UserDashboard active="favourites" />} />
            <Route path="/admin/dashboard" element={<AdminDashboard active="dashboard"/>} />
            <Route path="/admin/manage-books" element={<AdminDashboard active="manage-books"/>} />
            <Route path="/admin/manage-users" element={<AdminDashboard active="manage-users"/>} />
            <Route path="/admin/borrowing-history" element={<AdminDashboard active="borrowing-history"/>} />
            <Route path="/admin/fine-management" element={<AdminDashboard active="fine-management"/>} />
            <Route path="/admin/notifications" element={<AdminDashboard active="notifications"/>} />
            <Route path="/admin/reports-analytics" element={<AdminDashboard active="reports-analytics"/>} />
            <Route path="/admin/category-management" element={<AdminDashboard active="category-management"/>} />
            <Route path="/admin/admin-profile" element={<AdminDashboard active="admin-profile"/>} />
            <Route path="/admin/settings" element={<AdminDashboard active="settings"/>} />
        </Route>
      </Routes>
    </div>
    </>
  );
}

export default App;
