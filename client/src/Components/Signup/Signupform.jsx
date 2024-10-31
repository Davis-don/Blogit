import 'bootstrap/dist/css/bootstrap.min.css'
import './signupform.css'
import { useState } from 'react'


function Signupform (){
    const [formData,setFormData]=useState({
     fName:"",
     lName:"",
     email:"",
     userName:"",
     password:"",
     confirmPassword:""
    })
    let handleFormUpdate = (e)=>{
        setFormData(
            {
            ...formData,[e.target.name]:e.target.value
        }
        )
        console.log(formData);
    }
    
    return(
      <div className="signup-overall-form">
        <form>
        <label  className='text-dark label-name' for='f-name'>First Name</label><br/>
        <input onChange={handleFormUpdate} required name="fName" id='f-name' type='text' className='form-control signup-input' placeholder='first name'/><br/>
        <label className='text-dark label-name' for='l-name'>Last Name</label><br/>
        <input onChange={handleFormUpdate} required name="lName" id='l-name' type='text' className='form-control signup-input' placeholder='Last name'/><br/>
        <label className='text-dark label-name' for='email'>Email adress</label><br/>
        <input onChange={handleFormUpdate} required name="email" id='email' type='text' className='form-control signup-input' placeholder='Email adress'/><br/>
        <label className='text-dark label-name' for='userName'>Username</label><br/>
        <input onChange={handleFormUpdate} required name="userName"  id='userName' type='text' className='form-control signup-input' placeholder='username'/><br/>
        <label className='text-dark label-name' for='password'>Password</label><br/>
        <input onChange={handleFormUpdate} required name='password' id='password' type='password' className='form-control signup-input' placeholder='password'/><br/>
        <label className='text-dark label-name' for='confirmPassword'>Confirm password</label><br/>
        <input onChange={handleFormUpdate} required name='confirmPassword' id='confirmPassword' type='password' className='form-control signup-input' placeholder='confirm password'/><br/>
        <div className="button-submit-signup">
          <button type='submit' className='btn'>submit</button>
        </div>
        </form>
  
      </div>
    )
  }

  export default Signupform