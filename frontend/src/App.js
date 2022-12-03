import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import WebFont from 'webfontloader';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './components/Home/Home';
import ProductDetails from './components/Product/ProductDetails';
import Products from './components/Product/Products';
import Search from './components/Product/Search';
import LogInSignUp from './components/User/LogInSignUp';
import Profile from './components/User/Profile';
import UpdateProfile from "./components/User/UpdateProfile";
import UpdatePassword from "./components/User/UpdatePassword";
import ForgotPassword from './components/User/ForgotPassword';
import store from './store';
import { loadUser } from './actions/userAction';
// import ProtectedRoute from "./components/Route/ProtectedRoute";
// import { isAuthenticatedUser } from '../../backend/middlewares/auth';
import UserOptions from './components/layout/Header/UserOptions';
import { useSelector } from "react-redux";
import ResetPassword from './components/User/ResetPassword';

function App() {

  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Droid Sans', 'Chilanka'],
      },
    });

    store.dispatch(loadUser()); 
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
        {isAuthenticated && <Route exact path="/account" element={<Profile />} />}
        {isAuthenticated && <Route exact path="/me/update" element={<UpdateProfile />} />}
        {isAuthenticated && <Route exact path="/password/update" element={<UpdatePassword />} />}
        <Route exact path="/password/forgot" element={<ForgotPassword />} />
        <Route exact path="/password/reset/:token" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
