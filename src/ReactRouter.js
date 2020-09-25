import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Banner from './Comps/Banner/Banner';
import Cart from './Comps/Cart/Cart';
import Category from './Comps/Category/Category';
import Deal from './Comps/Deals/Deal';
import Deals from './Comps/Deals/Deals';
import Features from './Comps/Features/Features';
import Login from './Comps/Login/Login';
import Products from './Comps/Products/Products';
import Shop from './Comps/Shop/Shop';
import Item_Detail from './Comps/Shop/Shop Products/Item/Item Detail';
class ReactRouter extends Component {
    render() {
        return (
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route path="/shop/:id" children={<Item_Detail />} />
                <Route path="/shop">
                    <Shop />
                </Route>
                <Route path="/">
                    <Banner />
                    <Features />
                    <Category />
                    <Products />
                    <Deals />
                    <Deal />
                </Route>

            </Switch>
        );
    }
}

export default ReactRouter;