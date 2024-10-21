import React, { useEffect, useState } from "react";
import "./loginSignup.css";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import axios from 'axios'; // Import Axios

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const onlyNumbers = value.replace(/\D/g, "");
      setFormData({ ...formData, [name]: onlyNumbers });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSwitch = (loginStatus) => {
    setIsLogin(loginStatus);
    setIsForgotPassword(false);
    setFormData({
      full_name: "",
      mobile: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setFormErrors({});
  };

  const validateForm = () => {
    let errors = {};
    let requiredFields = isLogin
      ? ["email", "password"]
      : ["full_name", "mobile", "email", "password", "confirmPassword"];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        errors[field] = "This field is required";
      }
    });

    if (!isLogin) {
      console.log("password",formData.password,formData.confirmPassword)
      const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
      if (formData.password && formData.password.length < 8) {
        errors.password = "Password must be at least 8 characters long.";
      } else if (!passwordPattern.test(formData.password)) {
        errors.password =
          "Password must contain at least one uppercase, lowercase, number, and special character.";
      }

      if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = "Passwords do not match.";
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  

  const handleForgotPassword = () => {
    setIsForgotPassword(true);
  };

  const handleResetPasswordSubmit = async (e) => {
    e.preventDefault();
    if (formData.email) {
      try {
        const response = await axios.post('http://192.168.29.143:8080/api/user/reset-password', { email: formData.email }); // Replace with your actual endpoint
        console.log("Response:", response.data);
        // Handle success response (e.g., display a success message)
      } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
        setFormErrors({ email: "Failed to send password reset request." });
        // Handle error response
      }
    } else {
      setFormErrors({ email: "Email is required for password reset." });
    }
  };

  const loginUser = async() => {


    console.log("User--",formData)

    let response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData) 
    });
    if (response.ok) { 
      let user = await response.json();
  
      // Set user data in localStorage
      localStorage.setItem('user', JSON.stringify(user));
      navigate("/home")
    } else {
      console.error("Error:", response.status, response.statusText);
      setFormErrors(response.statusText)
    }
  }

  const signupUser = async() => {

    if(validateForm()){
      let response = await fetch("http://192.168.29.143:8080/api/auth/signup", { 
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData) 
      });
      if (response.ok) { 
        let user = await response.json();
    
        // Set user data in localStorage
        // localStorage.setItem('user', JSON.stringify(user));
        navigate("/login")
      } else {
        console.error("Error:", response.status, response.statusText);
      }
    }
  } 

  useEffect(()=>{
    let user = localStorage.getItem('user');
    user && navigate("/home")
  },[])
  

  return (
    <div className="login-signup-container">
      <div className="left-section"></div>
      <div className="right-section">
        <div className="form-container">
          <div className="logo">
            <h1>BookVerse</h1>
          </div>
          {!isForgotPassword ? (
            <>
              <h3>
                {isLogin ? "Login with your account" : "Create a new account"}
              </h3>
              <form>
                {!isLogin && (
                  <>
                    <div className={`form-group ${formErrors.full_name ? "error" : ""}`}>
                      <label>Full Name *</label>
                      <input
                        type="text"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleInputChange}
                        placeholder="Enter full name"
                      />
                      {formErrors.full_name && <small>{formErrors.full_name}</small>}
                    </div>
                    <div className={`form-group ${formErrors.mobile ? "error" : ""}`}>
                      <label>Mobile *</label>
                      <input
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="Enter mobile number"
                      />
                      {formErrors.mobile && <small>{formErrors.mobile}</small>}
                    </div>
                  </>
                )}
                <div className={`form-group ${formErrors.email ? "error" : ""}`}>
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                  />
                  {formErrors.email && <small>{formErrors.email}</small>}
                </div>
                <div className={`form-group ${formErrors.password ? "error" : ""}`}>
                  <label>Password *</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                  />
                  {formErrors.password && <small>{formErrors.password}</small>}
                </div>
                {!isLogin && (
                  <div className={`form-group ${formErrors.confirmPassword ? "error" : ""}`}>
                    <label>Confirm Password *</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Enter your password again"
                    />
                    {formErrors.confirmPassword && <small>{formErrors.confirmPassword}</small>}
                  </div>
                )}
                {isLogin && (
                  <div className="remember-forgot">
                    <label>
                      <input type="checkbox" /> Remember me
                    </label>
                    <span
                      className="forgot-password"
                      onClick={handleForgotPassword}
                    >
                      Forgot Password?
                    </span>
                  </div>
                )}
                <button type="button" onClick={isLogin ? loginUser : signupUser } className="primary-button">
                  {isLogin ? "LOGIN" : "SIGN UP"}
                </button>
              </form>
              <div className="divider">or</div>
              <button className="secondary-button">
                <FaGoogle /> {/* Google Icon */}
                Continue with Google
              </button>
              <div className="toggle-form">
                {isLogin ? (
                  <p>
                    <label onClick={() => handleSwitch(false)}>
                      <Link to="/signup">Don't have an account? Sign up</Link>
                    </label>
                  </p>
                ) : (
                  <p>
                    <label onClick={() => handleSwitch(true)}>
                      <Link to="/login">Already have an account? Login</Link>
                    </label>
                  </p>
                )}
              </div>
            </>
          ) : (
            <div className="forgot-password-container">
              <h3>Forgot Password</h3>
              <form onSubmit={handleResetPasswordSubmit}>
                <div className={`form-group ${formErrors.email ? "error" : ""}`}>
                  <label>Enter your email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                  />
                  {formErrors.email && <small>{formErrors.email}</small>}
                </div>
                <button type="submit" className="primary-button">
                  Request Password Reset
                </button>
              </form>
              <button
                className="secondary-button"
                onClick={() => setIsForgotPassword(false)}
              >
                Back to Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
