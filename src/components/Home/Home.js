import React from 'react';
import { HomWrapper, HomeRow, HomeImage } from "./styles";
// import backgroundImage from './bg.png';
import Product from '../Product/Product';
// import Image  from '../../assests/images/bg.png';

function Home() {
  return (
    <HomWrapper>
      <HomWrapper>
        <HomeImage src={"backgroundImage"} alt="" />
        <HomeRow>
          <Product
            id="1232"
            title="Zara"
            price={99.00}
            image={Image}
            rating={2} />
          <Product
            id="2112"
            title="Makoya"
            price={199.00}
            image={Image}
            rating={1} />
        </HomeRow>

        <HomeRow>
          <Product
            id="11221"
            title="Blunt"
            price={299.00}
            image={Image}
            rating={4} />
          <Product
            id="212112"
            title="Summer tune"
            price={299.00}
            image={Image}
            rating={4} />
        </HomeRow>

        <HomeRow>
          <Product
            id="2211226"
            title="Craked whispers"
            price={499.00}
            image={Image}
            rating={2} />
        </HomeRow>
      </HomWrapper>
    </HomWrapper>
  )
}

export default Home
