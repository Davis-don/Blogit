import React, { useState } from 'react';
import './passwordupdate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMutation } from 'react-query';

function Passwordupdate() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const [passwordData, setPasswordData] = useState({
    prevpassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setPasswordData({
      ...passwordData, [e.target.name]: e.target.value
    });
  };

  const token = sessionStorage.getItem("token");

  const mutation = useMutation({
    mutationFn: async () => {
      const response = await fetch('http://localhost:4000/update-password', {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        },
        body: JSON.stringify(passwordData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to update user information');
      }
      
      return response.json();
    },
    onSuccess: (data) => {
      setSuccess(true); 
      setError('');
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    },
    onError: (error) => {
      setError('Failed to update password. Please try again.');
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setError("New password and confirm password do not match.");
      return;
    }
    
    
    setError('');
    mutation.mutate();
  };

  return (
    <div className='overall-password-update-overall-container'>
      <h1>Update your password</h1>
      {success && (
        <div className="alert alert-success">
          <strong>Changes saved</strong>
        </div>
      )}
      {error && (
        <div className="alert alert-danger">
          <strong>{error}</strong>
        </div>
      )}
      <div className="password-update-div container">
        <form onSubmit={handleSubmit}>
          <label className='fs-4' htmlFor='previous-password'>Previous Password</label>
          <input
            name='prevpassword'
            onChange={handleChange}
            id='previous-password'
            type="password"
            placeholder='Previous password'
            className='form-control p-3'
          />

          <label className='fs-4' htmlFor='new-password'>New Password</label>
          <input
            name='newPassword'
            onChange={handleChange}
            id='new-password'
            type="password"
            placeholder='New password'
            className='form-control p-3'
          />

          <label className='fs-4' htmlFor='confirm-password'>Confirm Password</label>
          <input
            name='confirmPassword'
            onChange={handleChange}
            id='confirm-password'
            type="password"
            placeholder='Confirm password'
            className='form-control p-3'
          />

          <div className="btn-personal-info-submit">
            <button type="submit" className="btn btn-outline-danger fs-4">
              {mutation.isLoading ? 'Saving...' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Passwordupdate;
