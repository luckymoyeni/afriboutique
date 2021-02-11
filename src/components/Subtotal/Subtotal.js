import React from 'react';
import {SubtotalButton,SubtotalGift,SubtotalWrapper} from './styles';
import CurrencyFormat from "react-currency-format";
import { ShoppingBasket } from '@material-ui/icons';
import { useStateValue } from '../../containers/StateProvider';
import { getBasketTotal } from '../../containers/reducer';

function Subtotal() {
    const [{basket},dispatch] = useStateValue();
    return (
        <SubtotalWrapper>
            <CurrencyFormat
             renderText={(value) => (
                 <>
                   <p>
                       Subtotal ({basket?.length} items): <strong>{value}</strong>
                   </p>
                   <SubtotalGift>
                       <input style={{marginRight: "5px"}} type="checkbox" /> This order contains a gift
                   </SubtotalGift>
                 </>
             )}
               decimalScale={2}
               value={getBasketTotal(basket)}
               displayType={"text"}
               thousandSeparator={true}
               prefix={"R"}
            />
            <SubtotalButton>Proceed to Checkout</SubtotalButton>
        </SubtotalWrapper>
    )
}

export default Subtotal
