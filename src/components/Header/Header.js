import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../containers/StateProvider';
import { auth } from '../../containers/firebase';
// import logo from './assets/images/logo.png';

function Header() {
    const [{basket,user},dispatch] = useStateValue();
    const handleAuthentication = () => {
      if(user){
        auth.signOut();
      }
    }
    return (
        <div className='header'>
            <Link  to="/">
              <img 
              className='header__logo'
              src={null}
              alt='logo'
             />
            </Link>


             <div className="header__search">
                 <input 
                   className="header_searchInput"
                   type="text"
                   />
                   <SearchIcon 
                   className="header__searchIcon" />
                   {/* logo */}
             </div>

             <div className="header__nav">
               <Link to={!user && "/login"}>
                   <div onClick={handleAuthentication} className="header__option">
                     <span className="header__optionLineOne">Hello {user ? user?.email : "Guest"}</span>
                      <span className="header__optionLineTwo">{user ? 'Sign out' : 'Sign in'}</span>
                   </div>
                 </Link>

                 <div className="header__option">
                      <span className="header__optionLineOne">Returns</span>
                      <span className="header__optionLineTwo">& Orders</span>
                 </div>
                 <Link to="/checkout">
                   <div className="header__optionBasket">
                      <ShoppingBasketIcon />
                      <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                   </div>
                 </Link>
                 

             </div>

        </div>
    )
}

export default Header
