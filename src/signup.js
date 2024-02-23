// SignUpForm.js
"use client"
import React, { useState } from 'react';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    terms: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateFormData(formData);
    if (Object.keys(errors).length === 0) {
      console.log('Form data:', formData);
      clearFormData(); 
    } else {
      setErrors(errors);
    }
  };

  const validateFormData = (data) => {
    const errors = {};
    return errors;
  };

  const clearFormData = () => {
    setFormData({
      username: '',
      email: '',
      password: '',
      terms: false,
    });
    setErrors({});
  };

  return (
    <div className="signup-container"> 
      <h1> Sign Up Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
          {errors.username && <span>{errors.username}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div className='check'>
          <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} />
          <label>I agree to the terms and conditions</label>
          {errors.terms && <span>{errors.terms}</span>}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;

