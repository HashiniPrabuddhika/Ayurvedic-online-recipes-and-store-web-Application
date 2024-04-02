import React from 'react'
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Topcard.css';

export default function Topcard() {
  return (
    <div>
       
       <div className='desktop1Item'> 
      <div className="d-flex justify-content-end align-items-center  pt-2">
  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '25px', color: 'blue',marginRight: '20px' }}/>
  </a>
  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '25px', color: 'blue',marginRight: '20px' }}/>
  </a>
  <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faGoogle} style={{ fontSize: '25px', color: 'red', marginRight: '50px' }} />
  </a>
  {/* 
  <button className="btn btn-info btn-sm" style={{ marginRight: '10px' }}>Log in</button>
  <button className="btn btn-info btn-sm" style={{ marginRight: '10px' }}>Sign up</button>
  Add more buttons and icons as needed */}
</div>

    </div></div>
  )
}
