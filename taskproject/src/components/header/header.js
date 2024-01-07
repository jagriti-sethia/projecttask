import React from 'react';
import "./header.css";

export const Header = () => {
  return (
    <div>
        <div className="header">
  <div className="logo">
  <img src='./logo1.png' alt=''></img>
  <img src='./logo-2.png' alt=''></img>
  </div>
  <div className="header-right">
    <a className="active" href="#home">About us</a>
    <a href="#contact">MBA programme</a>
    <a href="#about">About</a>
    <a href="#contact">Addmissions</a>
    <a href="#contact">Research</a>
    <a href="#contact">Recruiters</a>
    <a href="#contact">Contact us</a>
  </div>
</div>
    </div>
  )
}
