import styled from 'styled-components'

export const CheckoutProduct = styled.div`
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const CheckoutProductImage = styled.img` 
    object-fit: contain;
    width: 180px;
    height: 180px;
`;

export const CheckoutProductInfo = styled.div`
    padding-left: 20px;
`;

export const Button = styled.button`
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
`

export const CheckoutProductRating = styled.div`
    display: flex;
`

export const CheckoutProductTitle = styled.p`
    font-size: 17px;
    font-weight: 800;
`