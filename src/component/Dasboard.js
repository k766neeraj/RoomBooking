import React, { useState } from 'react'
import Footer from './Footer'

function Dasboard() {
    const [count, setcount] = useState(0)
    return (
        <>
            <div className='container'>
                <h3 className='text-center fs-1' style={{color:"rebeccapurple"}}>Dashboard</h3>
                <div className='user text-center fs-2'>
                    <div className=''>Rooms Selected</div>
                    <div className=''>{count}</div>
                </div>
                    <h1 className='text-center'>Our Rooms</h1>
                <div className='rooms d-flex justify-content-center'>
                    <div class="room">
                        <img src="https://media.istockphoto.com/id/1390233984/pt/foto/modern-luxury-bedroom.jpg?s=612x612&w=0&k=20&c=7ZwZL4SZuS9sZL5Oxr2qLLK4EuzQ2EAZS4MQUnJE1rE=" alt="Standard Room" />
                        <h2>Standard Room</h2>
                        <p>Description: A comfortable and budget-friendly room with all the essential amenities.</p>
                        <p>Capacity: 2 guests</p>
                        <p>Beds: 1</p>
                        <p>Price per Night: $100</p>
                        <p>Amenities: Free Wi-Fi, Air Conditioning, TV, Private Bathroom</p>
                        <button class="book-button" onClick={()=>{setcount(count+1)}}>Book Now</button>
                    </div>
                    <div class="room">
                        <img src="https://media.istockphoto.com/id/1390233984/pt/foto/modern-luxury-bedroom.jpg?s=612x612&w=0&k=20&c=7ZwZL4SZuS9sZL5Oxr2qLLK4EuzQ2EAZS4MQUnJE1rE=" alt="Deluxe Room" />
                        <h2>Deluxe Room</h2>
                        <p>Description: Spacious and elegantly furnished room with a great view of the city.</p>
                        <p>Capacity: 3 guests</p>
                        <p>Beds: 2</p>
                        <p>Price per Night: $150</p>
                        <p>Amenities: Free Wi-Fi, Air Conditioning, TV, Mini-Bar, Private Bathroom, Balcony</p>
                        <button class="book-button" onClick={()=>{setcount(count+1)}}>Book Now</button>
                        
                    </div>
                    <div class="room">
                        <img src="https://media.istockphoto.com/id/1390233984/pt/foto/modern-luxury-bedroom.jpg?s=612x612&w=0&k=20&c=7ZwZL4SZuS9sZL5Oxr2qLLK4EuzQ2EAZS4MQUnJE1rE=" alt="Suite" />
                        <h2>Suite</h2>
                        <p>Description: A luxurious suite with a separate living area and panoramic views.</p>
                        <p>Capacity: 4 guests</p>
                        <p>Beds: 2</p>
                        <p>Price per Night: $250</p>
                        <p>Amenities: Free Wi-Fi, Air Conditioning, TV, Mini-Bar, Private Bathroom, Balcony, In-Room Jacuzzi</p>
                        <button class="book-button" onClick={()=>{setcount(count+1)}}>Book Now</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Dasboard
