import React, { useState } from 'react'
import Footer from './Footer'


function Login() {
    const [credential, setcredential] = useState({'email':'','password':''})
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('Entered data',credential.email,credential.password)
    }
    const onchange=(e)=>{
        setcredential({...credential,[e.target.name]:e.target.value})
    }
  return (
    <>
    <div className='container' style={{ width: "85vw", height: "80vh"}}> 
    
            <h2 className='text-center' style={{color:"rebeccapurple"}}>Login for Booking</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' value={credential.email} aria-describedby="emailHelp" onChange={onchange}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' value={credential.password} onChange={onchange}/>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    <Footer/>
    </>
  )
}

export default Login
