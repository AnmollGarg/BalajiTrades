import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>SignUp</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>SignUp</button>
          <p className="loginsignup-login">
            Alreay have an account? <span>Login Here</span>
          </p>
          <div className="loginsignupagree">
            <input type="checkbox" name='' id=''/>
            <p>By continuing, i agree privacy policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}
