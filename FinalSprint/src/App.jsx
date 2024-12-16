import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './Pages/cart';
import Checkout from './Pages/checkout';
import Homepage from './Pages/homepage';
import Shop from './Pages/shop';
import SingleProduct from './Pages/singleproduct';

function App() {
    return (
        <Router>
            <Routes>

                <Route path = "/" element = {<Homepage />} />
                <Route path = "/shop" element = {<Shop />} />
                <Route path = "/product/:id" element = {<SingleProduct />} />
                <Route path = "/" element = {<Cart />} />
                <Route path = "/checkout" element = {<Checkout />} />
            </Routes>
        </Router>
    );
}

export default App;