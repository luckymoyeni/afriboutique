import React from 'react';
import {
  HeaderMain,
  HeaderLogo,
  HeaderSearch,
  HeaderSearchIcon,
  HeaderNav,
  HeaderOption,
  HeaderOptionLineOne,
  HeaderOptionLineTwo,
  HeaderOptionBasket,
  HeaderBasketCount
} from './styles';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../containers/StateProvider';
import { auth } from '../../containers/firebase';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }
  const Image = process.env.PUBLIC_URL + '/logo.png';
  return (
    <HeaderMain>
      <Link to="/">
        <HeaderLogo
          src={Image}
          alt='logo'
        />
      </Link>

      <HeaderSearch>
        <input style={{
          height: "12px",
          padding: "10px",
          border: "none",
          display: "flex",
          flex: "1",
          borderRadius: "5px",

        }}
          type="text"
        />
        <HeaderSearchIcon>
          <SearchIcon />
        </HeaderSearchIcon>
      </HeaderSearch>



      <HeaderNav>
        <Link to={!user && "/login"}>
          <HeaderOption onClick={handleAuthentication} >

            <HeaderOptionLineOne>
              Hello {user ? user?.email : "Guest"}
            </HeaderOptionLineOne>

            <HeaderOptionLineTwo>
              {user ? 'Sign out' : 'Sign in'}
            </HeaderOptionLineTwo>

          </HeaderOption>
        </Link>

        <HeaderOption>
          <HeaderOptionLineOne>Returns</HeaderOptionLineOne>
          <HeaderOptionLineTwo>& Orders</HeaderOptionLineTwo>
        </HeaderOption>
        <Link to="/checkout">
          <HeaderOptionBasket>
            <ShoppingBasketIcon />
            <HeaderOptionLineTwo>
              <HeaderBasketCount>
                {basket?.length}
              </HeaderBasketCount>
            </HeaderOptionLineTwo>
          </HeaderOptionBasket>
        </Link>


      </HeaderNav>

    </HeaderMain >
  )
}

export default Header
