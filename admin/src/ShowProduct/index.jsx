import React from 'react'
import "../App.css";
import axios, * as others from 'axios';
import { useState } from "react";

export const ShowProduct = () => {

    const [newPrice, setNewPrice] = useState(0);
    const [idproducts, setIdproducts] = useState(0);

    const [productList, setProductList] = useState([]);

    const getProducts = () => {
        axios.get("http://localhost:3001/products").then((response) => {
            setProductList(response.data);
        });
    };

    const updateProductPrice = (id) => {
        axios.put("http://localhost:3001/update", { price: newPrice, idproducts: idproducts }).then(
            (response) => {
                setProductList(
                    productList.map((val) => {
                        return val.idproducts === idproducts
                            ? {
                                idproducts: val.idproducts,
                                name: val.name,
                                price: val.newPrice,
                                description: val.description,
                                unitsInStock: val.unitsInStock,
                                title: val.title,
                            }
                            : val;
                    })
                );
            }
        );
    };

    const deleteProduct = (idproducts) => {
        axios.delete(`http://localhost:3001/delete/${idproducts}`).then((response) => {
            setProductList(
                productList.filter((val) => {
                    return val.idproducts !== idproducts;
                })
            );
        });
    };

    return (

        <div className="employees" >
            <button onClick={getProducts}>Show Products</button>

            {productList.map((val, key) => {
                return (
                    <div className="employee">
                        <div>
                            <h3>Name: {val.name}</h3>
                            <h3>Price: {val.price}</h3>
                            <h3>Units In Stock: {val.unitsInStock}</h3>
                            <h3>Title: {val.title}</h3>
                            <h3>Description: {val.description}</h3>
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder=""
                                onChange={(event) => {
                                    setNewPrice(event.target.value);
                                }}
                            />
                            <button
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
              </button>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

