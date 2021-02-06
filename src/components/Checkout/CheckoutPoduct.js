import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../../containers/StateProvider';
function CheckoutPoduct({id,image,title,price,rating}) {
    const [{basket},dispatch] = useStateValue();

    const RemoveFromBasket = () => {
        // remove from basket ...
        dispatch ({
            type : "REMOVE_FROM_BASKET",
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img  className="checkoutProduct__image"  src={image} alt=""/>

            <div className="heckoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>
                        R
                    </small>
                    <strong>
                        {price}
                    </strong>
                    <div className="checkoutProduct__rating">
                      {Array(rating)
                      .fill()
                      .map((_,i) => (
                        <p>⭐</p>
                      ))}
                    </div>
                    <button onClick={RemoveFromBasket}>Remove from basket</button>
                </p>
            </div>
        </div>
    )
}

export default CheckoutPoduct
