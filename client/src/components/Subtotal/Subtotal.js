import React from 'react';
import { SubtotalButton, SubtotalWrapper } from './styles';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from '../../containers/reducer';
import { useSelector } from "react-redux";

function Subtotal() {
    const mainreducer = useSelector(state => state.Mainreducer);
    let md5 = require("md5");
    const totalAmount = getBasketTotal(mainreducer.basket);
    const params = new URLSearchParams({
        merchant_id: "10000100",
        merchant_key: "46f0cd694581a",
        return_url: "https://example.com/success",
        cancel_url: "https://example.com/cancel",
        notify_url: "https://example.com/notify",
        name_first: "Jake",
        email_address: mainreducer?.user?.email,
        m_payment_id: "payment_id_00123",
        amount: totalAmount,
        item_name: "payment_name",
        item_description: "description_if_any",
        // passphrase: "passphrase"
    });

    // Create an MD5 signature of it.
    const MD5Signature = md5(params.toString())
    return (
        <SubtotalWrapper>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({mainreducer.basket?.length} items): <strong>{value}</strong>
                        </p>
                    </>
                )}
                decimalScale={2}
                value={totalAmount}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"R"}
            />

            <form action="https://sandbox.payfast.co.za​/eng/process" method="POST">
                <input type="hidden" name="merchant_id" value="10000100" />
                <input type="hidden" name="merchant_key" value="46f0cd694581a" />
                <input type="hidden" name="return_url" value="https://example.com/success" />
                <input type="hidden" name="cancel_url" value="https://example.com/cancel" />
                <input type="hidden" name="notify_url" value="https://example.com/notify" />
                <input type="hidden" name="name_first" value={"Jake"} />
                <input type="hidden" name="email_address" value={mainreducer?.user?.email} />
                <input type="hidden" name="m_payment_id" value={"payment_id_00123"} />
                <input type="hidden" name="amount" value={totalAmount} />
                <input type="hidden" name="item_name" value={"payment_name"} />
                <input type="hidden" name="item_description" value={"description_if_any"} />
                {/* <input type="hidden" name="passphrase" value="passphrase" /> */}
                <input type="hidden" name="signature" value={MD5Signature} />
                {mainreducer.basket?.length ?
                    <SubtotalButton name="disable" type="submit" width="100%" height="100%" alt="Submit" align="bottom" value="Proceed to Checkout" >
                        Proceed to Checkout
                    </SubtotalButton> : ""}

            </form>
            {/* <SubtotalButton>Proceed to Checkout</SubtotalButton> */}
        </SubtotalWrapper >
    )
}

export default Subtotal
