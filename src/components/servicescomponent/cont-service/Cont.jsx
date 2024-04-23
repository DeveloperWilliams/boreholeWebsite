import React from 'react'
import "./cont.css"

function Cont() {
  return (
    <div className='services-cont'>
        <div className="left">
            <h6>ARE YOU'RE READY TO GET <em>BEST DEALS FROM GEOTRUTH?</em></h6>
            <p>Request a Call Back</p>
        </div>
        <div className="right">
            <form>
                <div className="input">
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='Email' />
                    <input type="text" placeholder='Subject' />
                </div>
                <div className="message">
                    <textarea placeholder='Message' ></textarea>
                    <button>Send Message</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Cont