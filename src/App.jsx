import React from 'react';

import Login from "./Login/login";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./home/home";
import Cart from "./Cart/cart";
import Register from "./Register/register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/footer";
import CheckOut from "./checkOut/checkOut";
// fontawesome.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Search from "./SearchInput/Search";
import IntroduceForShop from "./introduce/introduceForShop";
import Backtt from "./back to top/backtt";
import News from "./News/tin tuc";
import Contact from "./Contact/Contact";
import ProductCard from "./Filter/ProductFilterByCategory";
import ProductDetails from "./ProductDetail/Detail";
import OrderConfirm from "./confirm/OderConfirm";

library.add(faArrowLeft, faArrowRight);

function App() {
    return (
        <div>
            <Router>
                <Header/>
                <Routes>
                    <Route exact path="/" element={<Login/>}/>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/cart" element={<Cart />}/>
                    <Route path="/register" element={<Register />}/>
                    <Route path="/checkout" element={<CheckOut/>}/>
                    <Route path="/Search" element={<Search/>}/>
                    <Route path="/introduce" element={<IntroduceForShop/>}/>
                    <Route path="/News" element={<News/>}/>
                    <Route path="/Contact" element={<Contact/>}/>
                    <Route path="/ProCart" component={ProductCard} />
                    <Route path="/Detail/:id" element={<ProductDetails/>} />
                    <Route path="/confirm" element={<OrderConfirm/>}/>

                </Routes>
                <Backtt/>
                <Footer/>
            </Router>
        </div>

    );
}
export default App;


