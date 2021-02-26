import React from 'react';
import {
  HeaderMain,
  HeaderLogo,
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
import { auth } from '../../containers/firebase';
import { useSelector } from "react-redux";
// import logo from './assets/images/logo.png';

function Header() {
  const mainreducer = useSelector(state => state.Mainreducer);

  const handleAuthentication = () => {
    if (mainreducer.user) {
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
        <Link to={!mainreducer.user && "/login"}>
          <HeaderOption onClick={handleAuthentication} >

            <HeaderOptionLineOne>
              Hello {mainreducer.user ? mainreducer.user?.email : "Guest"}
            </HeaderOptionLineOne>

            <HeaderOptionLineTwo>
              {mainreducer.user ? 'Sign out' : 'Sign in'}
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
                {mainreducer.basket?.length}
              </HeaderBasketCount>
            </HeaderOptionLineTwo>
          </HeaderOptionBasket>
        </Link>


      </HeaderNav>

    </HeaderMain >
  )
}

export default Header
