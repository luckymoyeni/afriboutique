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
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { auth } from '../../containers/firebase';
import { useSelector } from "react-redux";

// import logo from './assets/images/logo.png';

function Header() {
  const mainreducer = useSelector(state => state.Mainreducer);
  const useStyles = makeStyles((theme) => ({
    root: {
      marginRight: "5px",
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    }
  }))
  const handleAuthentication = () => {
    if (mainreducer.user) {
      auth.signOut();
    }
  }
  const Image = process.env.PUBLIC_URL + '/logo.png';
  const classes = useStyles();

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


        <Link to={!mainreducer.user && "/login"}>

          <HeaderOption onClick={handleAuthentication} >

            <HeaderOptionLineOne>
               {mainreducer.user ? (mainreducer.user?.email) : "Guest"}
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
        <Link  to={mainreducer.user ?  "/checkout" : "/login"}>
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
      <Link to={mainreducer.user ?  "/UserProfile" : "/login"}>
        {mainreducer.user && <Avatar className={classes.root}>{mainreducer.user?.email?.toUpperCase().charAt(0)}</Avatar>}
      </Link>

    </HeaderMain >
  )
}

export default Header
