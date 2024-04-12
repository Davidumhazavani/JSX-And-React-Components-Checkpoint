// src/App.js
// import React from 'react';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import productData from './product';

const firstName = "YourFirstName";

const App = () => {
  return (
    <div className="container">
      <div className="card">
        <Image image={productData.image} />
        <div className="card-body">
          <Name name={productData.name} />
          <Price price={productData.price} />
          <Description description={productData.description} />
        </div>
      </div>
      <div className="message">
        <p>Hello, {firstName ? firstName : "there!"}</p>
        {firstName && <img src={productData.image} alt={productData.name} />}
      </div>
    </div>
  );
};

export default App;
