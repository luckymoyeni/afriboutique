import React from 'react';
import { CheckoutProduct, CheckoutProductImage, CheckoutProductInfo, Button, CheckoutProductTitle, CheckoutProductRating } from './CheckoutProduct.jsx';
import {  useDispatch } from "react-redux";

function CheckoutPoduct({ id, image, title, price, rating }) {
    const Dispatchers = useDispatch();

    const RemoveFromBasket = () => {
        // remove from basket ...
        Dispatchers({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

    return (
        <CheckoutProduct>
            <CheckoutProductImage src={image} alt="" />

            <CheckoutProductInfo>
                <CheckoutProductTitle>{title}</CheckoutProductTitle>
                <CheckoutProductTitle >
                    <small>
                        R
                    </small>
                    <strong>
                        {price}
                    </strong>
                    <CheckoutProductRating>
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p>⭐</p>
                            ))}
                    </CheckoutProductRating>
                    <Button>
                        <button onClick={RemoveFromBasket}>Remove from basket</button>
                    </Button>
                </CheckoutProductTitle>
            </CheckoutProductInfo>
        </CheckoutProduct>
    )
}

export default CheckoutPoduct
