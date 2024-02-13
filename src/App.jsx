import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Products from './components/Products';
import Footer from './components/Footer';
import { useState } from 'react';

const App = () => {
  const [cartCount, setCartCount] = useState(0)
  const arrObj = [
    { id: 1, productName: "Flower Bouquet", priceRange: "100-120", imagePath: "https://source.unsplash.com/450x300/?flower-bouquet" },
    { id: 2, productName: "Sneakers", strikePrice: "100", salePrice: "80", imagePath: "https://source.unsplash.com/450x300/?sneakers" },
    { id: 3, productName: "Chair", priceRange: "50", imagePath: "https://source.unsplash.com/450x300/?chair" },
    { id: 4, productName: "Ring", priceRange: "200-250", imagePath: "https://source.unsplash.com/450x300/?rings" },
    { id: 5, productName: "Bag", strikePrice: "150", salePrice: "130", imagePath: "https://source.unsplash.com/450x300/?bag" },
    { id: 6, productName: "Perfume", priceRange: "200-250", imagePath: "https://source.unsplash.com/450x300/?perfume" },
    { id: 7, productName: "T-shirt", priceRange: "50", imagePath: "https://source.unsplash.com/450x300/?t-shirt"},
    { id: 8, productName: "Camera", strikePrice: "400", salePrice: "350", imagePath: "https://source.unsplash.com/450x300/?camera" }
];
return (
   <div>
     <Navbar cartCount = {cartCount} />
     <Header />
      <Products arrObj = {arrObj} setCartCount = {setCartCount}/>
      <Footer />
    </div>
  );
};

export default App;