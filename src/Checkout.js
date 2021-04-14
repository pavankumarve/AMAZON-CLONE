import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img className='checkout_ad' src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/pc_banner_2.jpg' alt='' />
                <div className='checkout_title'>
                    <h2>Your Shopping Basket</h2>
                    {/* basketitem */}
                    {/* basketitem */}
                    {/* basketitem */}
                    {/* basketitem */}
                    {/* basketitem */}

                </div>
            </div>
            <div className='checkout_right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout