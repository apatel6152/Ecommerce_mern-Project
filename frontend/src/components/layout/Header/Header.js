
import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import { AiOutlineSearch } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';

const options = {
  burgerColor:"#eb4034",
  // burgerColorHover: "white",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link5Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link5Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  nav5justifyContent: "flex-end",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  searchIconUrl: "/search",
  searchIcon:true,
  SearchIconElement:AiOutlineSearch,
  searchIconMargin: "0.5vmax",
  profileIconUrl: "/login",
  profileIcon :true,
  ProfileIconElement:CgProfile,
  profileIconMargin: "0.5vmax",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  // cartIcon: AiOutlineSearch,
  // CartIconElement:AiOutlineSearch,
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;