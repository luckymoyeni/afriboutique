import React from 'react'
import { useState } from "react";

import "../App.css";
import axios, * as others from 'axios';
export const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [unitsInStock, setUnitsInStock] = useState(0);
    const [title, setTitle] = useState("");
    const [productList, setProductList] = useState([]);


    const addProduct = () => {
        axios.post("http://localhost:3001/create", {
            name: name,
            price: price,
            description: description,
            unitsInStock: unitsInStock,
            title: title
        }).then(() => {
            setProductList([
                ...productList,
                {
                    name: name,
                    price: price,
                    description: description,
                    unitsInStock: unitsInStock,
                    title: title
                },
            ]);
        });
    };

    return (
        <div>
            <div className="information">
                <label>Product Name:</label>
                <input
                    type="text"
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
                <label>Product Description:</label>
                <input
                    type="text"
                    onChange={(event) => {
                        setDescription(event.target.value);
                    }}
                />
                <label>Units In Stock:</label>
                <input
                    type="number"
                    onChange={(event) => {
                        setUnitsInStock(event.target.value);
                    }}
                />
                <label>Product Title:</label>
                <input
                    type="text"
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />
                <label>Price :</label>
                <input
                    type="number"
                    onChange={(event) => {
                        setPrice(event.target.value);
                    }}
                />
                <button onClick={addProduct}>Add Product</button>
            </div>
        </div>
    )
}

