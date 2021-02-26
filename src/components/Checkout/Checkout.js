import React from "react";
import Subtotal from "../Subtotal/Subtotal";
import { CheckoutAd, CheckouttTitle, Checkouts } from "./styles";
import CheckoutProduct from "./CheckoutPoduct";
import { useSelector } from "react-redux";

function Checkout() {
    const mainreducer = useSelector(state => state.Mainreducer);

    console.log("I am someone  " + mainreducer.basket[0]?.id)
    return (
        <Checkouts>
            <div className="checkout__left">
                <CheckoutAd>
                    <img src={"Banner"} alt="" />
                </CheckoutAd>
                <div >
                    {/* <h3>Hello {MainReducer.user?.email}</h3> */}
                    <CheckouttTitle>
                        <h2>Your Shopping basket</h2>
                        {console.log()}
                    </CheckouttTitle>
                    {mainreducer?.basket?.map(item => (
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
