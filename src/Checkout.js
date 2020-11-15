import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import Banner from './images/download.jpg';
import { useStateValue } from './StateProvider';
import CheckoutProduct from "./CheckoutPoduct";
function Checkout() {
    const [{basket},dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src={Banner} alt="" className="checkout__ad" />
                <div >
                   <h2 className="checkout__title">Your Shopping basket</h2>
                   {basket.map(item => (
                   <CheckoutProduct 
                     id={item.id}
                     title={item.title}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}
                   />
                 ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
               <h2>Sub total</h2>
            </div>
        </div>
    )
}

export default Checkout
