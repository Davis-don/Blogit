import React from 'react'
import './logincomponent.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useMutation} from 'react-query'
import { useState } from 'react'

function Logincomponent() {

const [userLogins,setuserLogins] = useState ({
    username:"",
    passord:""
})

const handleInput = (e)=>{
    setuserLogins({
        ...userLogins,[e.target.name]:e.target.value
    })
    console.log(userLogins)
}

const {mutate,isLoading,isError} = useMutation({
  mutationFn: async (userObj)=>{
   const response = await fetch(`http://localhost:4000/auth/login`,{
      "method":"POST",
      headers:{
     "Content-Type":"application/json"
      },
      body:JSON.stringify(userObj),
      credentials:"include"
    })
    
    if(response.ok === false){
      const error = await response.json()
      console.log(error);
      throw new Error(error);
    }
    const data = await response.json();
    return data;
  },

  onSuccess:(user)=>{
    
  }
})

const handleAuth = (e) => {
  e.preventDefault(); 
  mutate(userLogins); 
};
  return (
    <div className='overall-login-component'>
      {isLoading && <div className="alert alert-info">isLoading</div>}
        <form onSubmit={handleAuth}>
        <label className='text-dark label-name' htmlFor='userName'>Username/email</label><br />
        <input onChange={handleInput}  required name="username" id='userName' type='text' className='form-control signup-input' placeholder='username/password' /><br />

        <label className='text-dark label-name' htmlFor='password'>password</label><br />
        <input onChange={handleInput} required name="password" id='password' type='text' className='form-control signup-input' placeholder='password' /><br />

        <div className="button-submit-signup">
          <button type='submit' className='btn' disabled = {isLoading}>Submit</button>
        </div>
        </form>
    </div>
  )
}

export default Logincomponent