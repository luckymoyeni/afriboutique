import React from 'react';
import {
    ProductWrapper,
    ProdctPrice,
    ProductInfo,
    ProductRating,
    ProductButton,
    ProductImg
} from "./styles.jsx";
import { useStateValue } from '../../containers/StateProvider';

function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }
    return (
        <ProductWrapper>
            <ProductInfo>
                <p>{title}</p>

                <ProdctPrice>
                    <small>R</small>
                    <strong>{price}</strong>
                </ProdctPrice>
                <ProductRating>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </ProductRating>
            </ProductInfo>

            <ProductImg src={image} alt="" />
            <ProductButton onClick={addToBasket}>Add to Basket</ProductButton>
        </ProductWrapper>
    )
}

export default Product
