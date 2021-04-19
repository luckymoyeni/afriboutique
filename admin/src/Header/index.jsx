import React from 'react'
import { MenuList, MenuItem } from "./styles";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { AddProduct } from '../AddProduct';
import { ShowProduct } from '../ShowProduct';
export const Header = () => {
    return (
        <Router>
            <MenuList>
                <Link  to="/showproducts"> <MenuItem>List Products</MenuItem></Link>
                <Link  to="/addproduct"> <MenuItem>Add Product</MenuItem></Link>
            </MenuList>
            <Switch>
        {/* <Route  path="/">
            <ShowProduct />
          </Route> */}
          <Route path="/addproduct">
            <AddProduct />
          </Route>
          <Route path="/showproducts">
            <ShowProduct />
          </Route>
        </Switch>
        </Router>

    )
}

