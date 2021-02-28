import React from "react";
import Subtotal from "../Subtotal/Subtotal";
import { CheckoutAd, CheckouttTitle, Checkouts, Subtotalrapper } from "./styles";
import CheckoutProduct from "./CheckoutPoduct";
import { useSelector } from "react-redux";

function Checkout() {
    const mainreducer = useSelector(state => state.Mainreducer);

    return (
        <Checkouts>
            <div className="checkout__left">
                <CheckoutAd>
                    <img src={"Banner"} alt="" />
                </CheckoutAd>
                <div >
                    <CheckouttTitle>
                        <h3>{mainreducer.user?.email.toUpperCase()}</h3>
                        <br />
                        {mainreducer?.basket.length ? "Your Shopping basket" : "Basket is Empty"}
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
            <Subtotalrapper>
                <Subtotal />
            </Subtotalrapper>
        </Checkouts>
    )
}

export default Checkout
