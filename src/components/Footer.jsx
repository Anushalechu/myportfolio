import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='d-flex justify-content-center align-item-center mt-5'>
        <div className='footer d-flex align-item-center justify-content-evenly'>
          <div className='website  ' style={{ width: "400px", textAlign: "center" }}>
            <h5>My PortFolio</h5>
          </div>
        </div>
      </div>
      <div style={{textAlign:"center"}}>
            <a href="https://github.com/Anushalech"><i class="fa-brands fa-github fa-2x"></i></a>
            <a href="https://www.linkedin.com/in/anusha-a-1ba91624a"><i class="fa-brands fa-linkedin fa-2x"></i></a>
            <a href="https://www.instagram.com/jawa_wanderer_?igsh=dHE0eGh2MWduYjkw"><i class="fa-brands fa-instagram fa-2x"></i></a>
          </div>
      <p className='ms-5 text-center'>copyright &copy; 2024 portFolio. Built with react</p>
    </>
  )
}

export default Footer