import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import WebFont from 'webfontloader';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './components/Home/Home';
import ProductDetails from './components/Product/ProductDetails';
import Products from './components/Product/Products';
import Search from './components/Product/Search';
import UserOptions from './components/layout/Header/UserOptions';
import LogInSignUp from './components/User/LogInSignUp';
import Profile from './components/User/Profile';
import UpdateProfile from './components/User/UpdateProfile';
import UpdatePassword from './components/User/UpdatePassword';
import ForgotPassword from './components/User/ForgotPassword';
import ResetPassword from './components/User/ResetPassword';
import Cart from './components/Cart/Cart';
import Shipping from './components/Cart/Shipping';
import ConfirmOrder from './components/Cart/ConfirmOrder';
import Payment from './components/Cart/Payment';
import store from './store';
import { loadUser } from './actions/userAction';
import axios from 'axios';
import { Elements } from '@stripe/react-stripe-js'; 
import { loadStripe } from '@stripe/stripe-js';
import OrderSuccess from './components/Cart/OrderSuccess';
import MyOrders from "./components/Order/MyOrders";
import OrderDetails from "./components/Order/OrderDetails";
import { useSelector } from 'react-redux';

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
 
  const [stripeApiKey, setStripeApiKey] = useState('');

  async function getStripeApiKey() {
    const { data } = await axios.get(`/api/v1/stripeapikey`);
    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Droid Sans', 'Chilanka'],
      },
    });

    store.dispatch(loadUser());

    getStripeApiKey();
  }, []); 

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:keyword" element={<Products />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/login" element={<LogInSignUp />} />
        {isAuthenticated && (
          <Route exact path="/account" element={<Profile />} />
        )}
        {isAuthenticated && (
          <Route exact path="/me/update" element={<UpdateProfile />} />
        )}
        {isAuthenticated && ( 
          <Route exact path="/password/update" element={<UpdatePassword />} />
        )}
        <Route exact path="/password/forgot" element={<ForgotPassword />} />
        <Route
          exact
          path="/password/reset/:token"
          element={<ResetPassword />}
        />
        <Route exact path="/cart" element={<Cart />} />
        {isAuthenticated && (
          <Route exact path="/shipping" element={<Shipping />} />
        )}
        {isAuthenticated && (
          <Route exact path="/order/confirm" element={<ConfirmOrder />} />
        )}

        {stripeApiKey && isAuthenticated && (
          <Route
            exact
            path="/process/payment"
            element={
              <Elements stripe={loadStripe(stripeApiKey)}>
                <Payment />
              </Elements>
            }
          />
        )}

        {isAuthenticated && (
          <Route exact path="/success" element={<OrderSuccess />} />
        )}
        {isAuthenticated && (
          <Route exact path="/orders" element={<MyOrders />} />
        )}
        {isAuthenticated && (
          <Route exact path="/order/:id" element={<OrderDetails />} />
        )}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
