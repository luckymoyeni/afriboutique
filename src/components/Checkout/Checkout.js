import React from "react";
import Subtotal from "../Subtotal/Subtotal";
import { CheckoutAd, CheckouttTitle, Checkouts } from "./styles";
// import Banner from './assets/images/download.jpg';
import { useStateValue } from '../../containers/StateProvider';
import CheckoutProduct from "./CheckoutPoduct";
function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <Checkouts>
            <div className="checkout__left">
                <CheckoutAd>
                    <img src={"Banner"} alt="" />
                </CheckoutAd>
                <div >
                    <h3>Hello {user?.email}</h3>
                    <CheckouttTitle>
                        <h2>Your Shopping basket</h2>
                    </CheckouttTitle>
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
        </Checkouts>
    )
}

export default Checkout
