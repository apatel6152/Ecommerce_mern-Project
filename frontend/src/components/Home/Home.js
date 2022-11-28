import React, { Fragment } from 'react';
import { CgMouse } from 'react-icons/cg';
import './Home.css';
import Product from './Product';

const product = {
    name: "Black shirt",
    images: [{ url: "https://i.ibb.co/DRST11n/1.webp"}],
    price: "20",
    _id:"amit",
}

const Home = () => {
  return (
    <Fragment>
      <div className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>

        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>

      <h2 className="homeHeading">Featured Products</h2>

      <div className="container" id="container">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
            {/* {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))} */}
          </div>
    </Fragment>
  );
};

export default Home;
