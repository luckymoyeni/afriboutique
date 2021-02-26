import React from 'react';
import {SubtotalButton,SubtotalGift,SubtotalWrapper} from './styles';
import CurrencyFormat from "react-currency-format";
import { ShoppingBasket } from '@material-ui/icons';
import { getBasketTotal } from '../../containers/reducer';
import { useSelector } from "react-redux";

function Subtotal() {
    const mainreducer = useSelector(state => state.Mainreducer);

    return (
        <SubtotalWrapper>
            <CurrencyFormat
             renderText={(value) => (
                 <>
                   <p>
                       Subtotal ({mainreducer.basket?.length} items): <strong>{value}</strong>
                   </p>
                   <SubtotalGift>
                       <input style={{marginRight: "5px"}} type="checkbox" /> This order contains a gift
                   </SubtotalGift>
                 </>
             )}
               decimalScale={2}
               value={getBasketTotal(mainreducer.basket)}
               displayType={"text"}
               thousandSeparator={true}
               prefix={"R"}
            />
            <SubtotalButton>Proceed to Checkout</SubtotalButton>
        </SubtotalWrapper>
    )
}

export default Subtotal
