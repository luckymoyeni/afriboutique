import React from 'react';
import "./Home.css";
// import backgroundImage from './bg.png';
import Product from '../Product/Product';
// import Image  from '../../assests/images/bg.png';

function Home() {
    return (
        <div className="Home">
            <div className="home__container">
               <img src={backgroundImage} alt="" className="home__image" />

               <div className="home__row">
                   <Product 
                     id="1232"
                     title="Zara" 
                     price={99.00} 
                     image= {Image}
                     rating={2}/>
                   <Product 
                     id="2112"
                     title="Makoya" 
                     price={199.00} 
                     image= {Image}
                     rating={1}/>
               </div>

               <div className="home__row">
                   <Product 
                     id = "11221"
                     title="Blunt" 
                     price={299.00} 
                     image= {Image}
                     rating={4}/>
                   <Product 
                     id="212112"
                     title="Summer tune" 
                     price={299.00} 
                     image= {Image}
                     rating={4}/>
               </div>

               <div className="home__row">
                   <Product 
                     id="2211226"
                     title="Craked whispers" 
                     price={499.00} 
                     image= {Image}
                     rating={2}/>
               </div>
            </div>
        </div>
    )
}

export default Home
