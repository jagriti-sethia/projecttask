import React from 'react'
import "./rectangle1.css"
import { Header } from '../header/header';

export const Rectangle1 = () => {
  return (
    <div className='container-fluid'>

      <div className="video-container">
        <div className='opace'>
          <video autoPlay loop muted>
            <source src="./bimhrd.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Header />
          <div className="content">
            <p className='welcome'>Welcome to BIMHRD</p>
            <p className='wel2'>Here, you’ll find a welcoming community and boundless opportunities.</p>
            <button className='btn2 '> Explore Addmission<svg width="36" height="16" viewBox="0 0 36 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM35.7071 8.70711C36.0976 8.31658 36.0976 7.68342 35.7071 7.29289L29.3431 0.928932C28.9526 0.538408 28.3195 0.538408 27.9289 0.928932C27.5384 1.31946 27.5384 1.95262 27.9289 2.34315L33.5858 8L27.9289 13.6569C27.5384 14.0474 27.5384 14.6805 27.9289 15.0711C28.3195 15.4616 28.9526 15.4616 29.3431 15.0711L35.7071 8.70711ZM1 9H35V7H1V9Z" fill="white" />
            </svg>  </button>
          </div>



          <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg" className='circle'>
            <path d="M43.2929 72.7071C43.6834 73.0976 44.3166 73.0976 44.7071 72.7071L51.0711 66.3431C51.4616 65.9526 51.4616 65.3195 51.0711 64.9289C50.6805 64.5384 50.0474 64.5384 49.6569 64.9289L44 70.5858L38.3431 64.9289C37.9526 64.5384 37.3195 64.5384 36.9289 64.9289C36.5384 65.3195 36.5384 65.9526 36.9289 66.3431L43.2929 72.7071ZM43 20L43 72L45 72L45 20L43 20Z" fill="white" />
            <circle cx="44" cy="44" r="43" stroke="white" stroke-width="2" />
          </svg>

        </div>
      </div>
    </div>
  )
}
