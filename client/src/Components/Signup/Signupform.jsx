import 'bootstrap/dist/css/bootstrap.min.css';
import './signupform.css';
import { useState } from 'react';
import { useMutation } from 'react-query';

function Signupform() {
  const [success, setSuccess] = useState(false);
  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: async (userData) => {
      const response = await fetch(`http://localhost:4000/users`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return response.json(); 
    },
    onSuccess: () => {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
  });

  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const handleFormUpdate = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitUserData = (e) => {
    e.preventDefault(); 
    mutate(formData); 
  };

  return (
    <div className="signup-overall-form">
      {isLoading && <div className="alert alert-info">Submitting...</div>}
      {isError && <div className="alert alert-danger">{error.message}</div>}
      {success && <div className="alert alert-success">User added successfully</div>}
      <form onSubmit={handleSubmitUserData}>
        <label className='text-dark label-name' htmlFor='f-name'>First Name</label><br />
        <input onChange={handleFormUpdate} required name="fName" id='f-name' type='text' className='form-control signup-input' placeholder='First Name' /><br />
        
        <label className='text-dark label-name' htmlFor='l-name'>Last Name</label><br />
        <input onChange={handleFormUpdate} required name="lName" id='l-name' type='text' className='form-control signup-input' placeholder='Last Name' /><br />
        
        <label className='text-dark label-name' htmlFor='email'>Email Address</label><br />
        <input onChange={handleFormUpdate} required name="email" id='email' type='email' className='form-control signup-input' placeholder='Email Address' /><br />
        
        <label className='text-dark label-name' htmlFor='userName'>Username</label><br />
        <input onChange={handleFormUpdate} required name="userName" id='userName' type='text' className='form-control signup-input' placeholder='Username' /><br />
        
        <label className='text-dark label-name' htmlFor='password'>Password</label><br />
        <input onChange={handleFormUpdate} required name='password' id='password' type='password' className='form-control signup-input' placeholder='Password' /><br />
        
        <label className='text-dark label-name' htmlFor='confirmPassword'>Confirm Password</label><br />
        <input onChange={handleFormUpdate} required name='confirmPassword' id='confirmPassword' type='password' className='form-control signup-input' placeholder='Confirm Password' /><br />
        
        <div className="button-submit-signup">
          <button type='submit' className='btn'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signupform;

