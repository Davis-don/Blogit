import React, { useState } from 'react';
import './personalinfoupdate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import useUserStore from '../../Store/Userstore';
import { useMutation } from 'react-query';

function Personalinfoupdate() {
  const userData = useUserStore((state) => state.user);
  const addUser = useUserStore((state) => state.addUser); 

  const [success, setSuccess] = useState(false);
  
  const [personalInfoData, setPersonalInfoData] = useState({
    firstName: userData && userData[0]?.user?.firstName || '',
    lastName: userData && userData[0]?.user?.lastName || '',
    email: userData && userData[0]?.user?.email || '',
    userName: userData && userData[0]?.user?.email || ''
  });

  const handleChange = (e) => {
    setPersonalInfoData({
      ...personalInfoData, 
      [e.target.name]: e.target.value
    });
  };

  const token = sessionStorage.getItem("token");
  const mutation = useMutation({
    mutationFn: async () => {
      const response = await fetch('http://localhost:4000/update-user', {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        },
        body: JSON.stringify(personalInfoData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to update user information');
      }

      return response.json();
    },
    onSuccess: (data) => {
      setSuccess(true);
      addUser(data); 
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
      console.log('User information updated:', data);
    },
    onError: (error) => {
      console.error('Error updating user information:', error);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <div className="overall-personal-info-container">
      <h1>Update your personal information (optional)</h1>
      {success && (
        <div className="alert alert-success">
          <strong>Changes saved</strong>
        </div>
      )}
      {mutation.isError && (
        <div className="alert alert-danger">
          <strong>Username and Email must be unique</strong>
        </div>
      )}
      <div className="form-div-personal-info container">
        <form onSubmit={handleSubmit}>
          <label className="fs-4" htmlFor="first-name">First Name</label>
          <input 
            name="firstName" 
            onChange={handleChange} 
            value={personalInfoData.firstName} 
            id="first-name" 
            className="form-control p-3" 
          />
          <label className="fs-4" htmlFor="last-name">Last Name</label>
          <input 
            name="lastName" 
            onChange={handleChange} 
            value={personalInfoData.lastName} 
            id="last-name" 
            className="form-control p-3" 
          />
          <label className="fs-4" htmlFor="email">Email</label>
          <input 
            name="email" 
            onChange={handleChange} 
            value={personalInfoData.email} 
            id="email" 
            className="form-control p-3" 
          />
          <label className="fs-4" htmlFor="username">Username</label>
          <input 
            name="userName" 
            onChange={handleChange} 
            value={personalInfoData.userName} 
            id="username" 
            className="form-control p-3" 
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

export default Personalinfoupdate;


