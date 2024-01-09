import React from 'react'
import './rectangle12.css';
export const Rectangle12 = () => {
    return (
        <div className='backdiv'>
        <div className='rect12'>

            <div className='redbox'>
                <img src='./addmision.png' alt='' />
                <p className='red1'>Get in Touch</p>
                <p className='red2'>Whatsapp: 7757847545</p>
                <p className='red3'>Email: Admissions@Sribalajisocietypune.Org</p>
                <p className='red4'>Address: Survey No. 55/2-7, Tathawade, Opp. Wakad Police Station, Off Pune-Mumbai, Highway, Imm Road, Tathawade, Pimpri-Chinchwad, Maharashtra 411033</p>

            </div>

            {/* red end */}

            <div className='flex2'>
                <div className='addm'>New Admissions</div>
                <div className='addmlink'>
                    <div className='righta'>
                        <p>Important date</p>
                        <p>Apply online</p>
                        <p> How to apply</p>
                    </div>
                    <div className='lefta'>
                        <p>Addmission Process</p>
                        <p>FAQ'S</p>
                        <p>Important contacts</p>
                    </div>
                </div>
                <div className='addm'>Connect</div>
                <div className='connectlink'>
                    <div className='spot'>
                        <svg width="100" height="100">
                            <circle cx="25" cy="25" r="20" fill="white" />

                        </svg>
                        <svg width="100" height="100">
                            <circle cx="25" cy="25" r="20" fill="white" />

                        </svg>
                        <svg width="100" height="100">
                            <circle cx="25" cy="25" r="20" fill="white" />

                        </svg>

                    </div>
                </div>

            </div>
            {/* addmissionend */}
            <div className='flex3'>
                <div className='aboutslink'>
                    <div className='righta'>
                        <div className='hed'> About Us</div>
                        <p>About us</p>
                        <p>Why BIMHRD</p>
                        <p>Leadership</p>
                    </div>
                    <div className='lefta'>
                        <div className='hed'>Placements</div>
                        <p>Placement Reports </p>
                        <p>Why recruit at  BIMHRD</p>
                        <p>Recruitment Brochure</p>
                    </div>
                </div>
            </div>

        </div>
        <div className='darkblue'>
        <div>
            <p>Copyright at 1998-2021 Sri Balaji Society, Pune</p>
        </div>
        <div className='footer'>
            <button>request info</button>
            <button>Apply now</button>
        </div>
    </div>
    </div>
    )
}
