import React from 'react'
import Footer from './Footer'

function Home() {
    return (
        <>
            <div className='landing' >
                <div className='bghotel border'>
                </div>
                <div className='text-center welcome'>
                    Welcome to Hotel Booking
                </div>
                <div className='whyus'>
                    <p className="p-3" id='why' style={{color:"rebeccapurple"}}>
                    At Hotel Booking, we pride ourselves on offering an unforgettable experience that blends comfort, luxury, and exceptional service. Whether you're here for a leisurely escape, a business trip, or a special occasion, we have everything you need to make your stay remarkable.
                    </p>
                </div>
                <div className='review text-center'>Review</div>
                <div className='smaple d-flex justify-content-center'>
                    <div className='samp samp-1'>
                        <div className='rev-i'>Raman</div>
                        <p className='rev-p text-center'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam debitis voluptatum placeat, nulla dolorum repellendus eligendi perspiciatis quo nostrum corrupti.
                        </p>
                    </div>
                    <div className='samp samp-2'>
                    <div className='rev-i'>Tarun</div>
                        <p className='rev-p text-center'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam debitis voluptatum placeat, nulla dolorum repellendus eligendi perspiciatis quo nostrum corrupti.
                        </p>
                    </div>
                    <div className='samp samp-3'>
                    <div className='rev-i'>Abhishek</div>
                        <p className='rev-p text-center'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam debitis voluptatum placeat, nulla dolorum repellendus eligendi perspiciatis quo nostrum corrupti.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home
