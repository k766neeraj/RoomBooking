import React, { useState } from 'react'
import Footer from './Footer'

function Signup() {
  const [credential, setcredential] = useState({'email':'','password':''})
  const handleSubmit=()=>{

  }
  const onchange = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value })
  }
  return (
    <>
    <div className='container' style={{ width: "85vw", height: "80vh"}}>
      <h2 className='text-center' style={{color:"rebeccapurple"}}>Signup for Booking</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp" value={credential.name} onChange={onchange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" value={credential.email} onChange={onchange} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name='password' value={credential.password} onChange={onchange} minLength={5} required />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Re-Password</label>
          <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={onchange} minLength={5} required />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    <Footer/>
    </>
  )
}

export default Signup
