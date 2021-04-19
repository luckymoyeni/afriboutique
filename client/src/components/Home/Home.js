import React, { useState } from 'react';
import { HomWrapper, HomeRow, HomeImage } from "./styles";
import Product from '../Product/Product';
import Axios from "axios";



function Home() {
  const [productList, setProductList] = useState([]);

  const getProducts = () => {
    Axios.get("http://localhost:3001/products").then((response) => {
      setProductList(response.data);
    });
  };
  const Image = process.env.PUBLIC_URL + '/logo.png';
  const backgroundImage = process.env.PUBLIC_URL + '/name.jpg';

  return (
    <HomWrapper onLoad={getProducts}>
      <HomWrapper>
        <HomeImage src={backgroundImage} alt="" />
        <HomeRow>


          {productList.map((val, key) => {
            console.log("something")
            return (
              <div>
                <Product
                  id={key}
                  title={val.title}
                  price={val.price}
                  image={Image}
                  rating={2} />

                {/* <input
                  type="text"
                  placeholder=""
                  onChange={(event) => {
                    setNewPrice(event.target.value);
                  }}
                /> */}
                {/* <button
                  onClick={() => {
                    updateProductPrice(val.idproducts);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteProduct(val.idproducts);
                  }}
                >
                  Delete
                </button> */}
              </div>
            );
          })}
          {/* <Product
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
          <Product
            id="2112"
            title="Makoya"
            price={199.00}
            image={Image}
            rating={1} />
        </HomeRow>

        <HomeRow>
          <Product
            id="2112"
            title="Makoya"
            price={199.00}
            image={Image}
            rating={1} />
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
            rating={4} /> */}
        </HomeRow>

      </HomWrapper>
    </HomWrapper >
  )
}

export default Home
