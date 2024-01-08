import React from 'react'
import './rectangle7.css';
export const Rectangle7 = () => {
  return (
    <div className='container-fluid'>
<div className='rect7'>
    <div className='ladies'>
        <img src='./buswomen.png' alt='women'/>
        </div>
    <div className='text7'> 
    <div className='person7'><p>Personalized Guidance Tailored to Your Ambitions</p></div>
    <div className='journey7'>
    Let's Navigate Your Academic Journey Together, 
Get in touch with us</div>
<div className='reactform'>
<form>
    
      <div className='upper'>
        <input type="text"  placeholder='Enter your name:'required/>
        <input type="text"  placeholder='Enter your email address:' required/>
        </div>
<div className='lower'>
    <div className='side1'>
    <input type="text"  placeholder='Enter your mobile number:' required/>
        <input type="text"  placeholder='Enter your OTP:' required/>
    </div>
       
        
        <button type="submit">Submit</button>
        </div>
        <div>
            <input type='checkbox' required />
            <label>I agree to receive information regarding my submitted enquiry by signing up on BIMHRD</label>
        </div>
      
    </form>

</div>
    </div>
</div>

    </div>
  )
}
