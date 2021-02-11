import React from 'react';
import {
  HeaderMain,
  HeaderLogo,
  HeaderSearch,
  HeaderSearchInput,
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
// import logo from './assets/images/logo.png';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }
  return (
    <HeaderMain style={{
      height: "60px",
      display: "flex",
      alignItems: "center",
      backgroundColor: " #131921",
      position: "sticky",
      top: "0",
      zIndex: 100,
    }}>
      <Link to="/">
        <HeaderLogo
          src={null}
          alt='logo'
        />
      </Link>


      <div style={{
        display: "flex",
        flex: "1",
        alignItems: "center",
        borderRadius: "24px",
      }}>
        <HeaderSearchInput>
          <input style={{
            height: "12px",
            padding: "10px",
            border: "none",
            width: "100 %",
          }}
            type="text"
          />
        </HeaderSearchInput>

        <HeaderSearchIcon>
          <SearchIcon />
        </HeaderSearchIcon>

      </div>

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
