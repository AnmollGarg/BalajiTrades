import React from 'react'
import './Newsletter.css'
import Test from '../Test1/Test'

export const Newsletter = () => {
  return (
    <div className="newsletter">
        <h1>Get the latest news and updates</h1>
        <p>Subscribe to our newsletter and get 10% off your first purchase</p>
        <div>
            <input type="email" name="email" id="email" placeholder="Your email address"/><br/>
            <button>Subscribe</button>

        </div>

        {/* <Test/> */}
    </div>
  )
}

export default Newsletter;