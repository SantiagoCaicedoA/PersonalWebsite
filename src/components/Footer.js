import React from 'react'
import '../css/footer.css'

const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className='icons'>
        <a href="https://www.instagram.com/santiagocaicerdo/" target="_blank" rel="noreferrer" ><i className='fab fa-instagram'></i></a>
        <a href="https://github.com/SantiagoCaicedoA" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/santiago-caicedo/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
      </div>
      <span>Santiago Caicedo <span id="year">©2021</span></span>
    </div>
  )
}

export default Footer
