import './App.css';
import React, { useState } from 'react';
import Header from './components/header';
import banner from './images/banner.png';
import Product from './components/product';
import item1img from './images/item1.png';
import item1hover from './images/item1-hover.png';
import item2img from './images/item2.png';
import item2hover from './images/item2-hover.png';
import item3img from './images/item3.png';
import item3hover from './images/item3-hover.png';
import item4img from './images/item4.png';
import item4hover from './images/item4-hover.png';
import item5img from './images/item5.png';
import item5hover from './images/item5-hover.png';
import item6img from './images/item6.png';
import item6hover from './images/item6-hover.png';
import item7img from './images/item7.png';
import item7hover from './images/item7-hover.png';
import item8img from './images/item8.png';
import item8hover from './images/item8-hover.png';
import item9img from './images/item9.png';
import item9hover from './images/item9-hover.png';
import item10img from './images/item10.png';
import item10hover from './images/item10-hover.png';
import item11img from './images/item11.png';
import item11hover from './images/item11-hover.png';
import item12img from './images/item12.png';
import item12hover from './images/item12-hover.png';
import item13img from './images/item13.png';
import item13hover from './images/item13-hover.png';
import item14img from './images/item14.png';
import item14hover from './images/item14-hover.png';
import item15img from './images/item15.png';
import item15hover from './images/item15-hover.png';
import item16img from './images/item16.png';
import item16hover from './images/item16-hover.png';
import item17img from './images/item17.png';
import item17hover from './images/item17-hover.png';
import item18img from './images/item18.png';
import item18hover from './images/item18-hover.png';



const item1 = {
  name: 'TORIN SEQUIN FEATHER DRESS',
  price: 695,
  productImage: item1img,
  hoverImage: item1hover,
  category: 'dresses',
}
const item2 = {
  name: 'PRISCILLA FEATHER DRESS',
  price: 795,
  productImage: item2img,
  hoverImage: item2hover,
  category: 'dresses',
}
const item3 = {
  name: 'JETTA CHAIN BRA',
  price: 495,
  productImage: item3img,
  hoverImage: item3hover,
  category: 'tops'
}
const item4 = {
  name: 'RHODA CRYSTAL EMBELLISHED DRESS',
  price: 795,
  productImage: item4img,
  hoverImage: item4hover,
  category: 'dresses'
}
const item5 = {
  name: 'FERNANDA DRESS',
  price: 1395,
  productImage: item5img,
  hoverImage: item5hover,
  category: 'dresses'
}
const item6 = {
  name: 'TAI SUEDE STUDDED JACKET',
  price: 469,
  productImage: item6img,
  hoverImage: item6hover,
  category: 'tops'
}
const item7 = {
  name: 'LOW RISE KIRK SUEDE STUDDED SKIRT',
  price: 299,
  productImage: item7img,
  hoverImage: item7hover,
  category: 'bottoms'
}
const item8 = {
  name: 'CARTER CHIFFON DRESS',
  price: 312,
  productImage: item8img,
  hoverImage: item8hover,
  category: 'dresses'
}
const item9 = {
  name: 'JAGGER DRESS',
  price: 445,
  productImage: item9img,
  hoverImage: item9hover,
  category: 'dresses'
}
const item10 = {
  name: 'ATHANA SEQUIN FEATHER SKIRT',
  price: 395,
  productImage: item10img,
  hoverImage: item10hover,
  category: 'bottoms'
}
const item11 = {
  name: 'LUDLOW DRESS',
  price: 595,
  productImage: item11img,
  hoverImage: item11hover,
  category: 'dresses'
}
const item12 = {
  name: 'EMILIA CRYSTAL TOP',
  price: 395,
  productImage: item12img,
  hoverImage: item12hover,
  category: 'tops'
}
const item13 = {
  name: 'RUBY CRYSTAL SKIRT',
  price: 695,
  productImage: item13img,
  hoverImage: item13hover,
  category: 'bottoms'
}
const item14 = {
  name: 'MOORE MID RISE FLARE CRYSTAL EMBELLISHED JEAN',
  price: 695,
  productImage: item14img,
  hoverImage: item14hover,
  category: 'bottoms'
}
const item15 = {
  name: 'CASTOR EMBELLISHED LEATHER JACKET',
  price: 995,
  productImage: item15img,
  hoverImage: item15hover,
  category: 'tops'
}
const item16 = {
  name: 'VESTA EMBELLISHED LEATHER DRESS',
  price: 1195,
  productImage: item16img,
  hoverImage: item16hover,
  category: 'dresses'
}
const item17 = {
  name: 'SYLVIO CHAIN SKIRT',
  price: 895,
  productImage: item17img,
  hoverImage: item17hover,
  category: 'bottoms'
}
const item18 = {
  name: 'ANASTASIA SEQUIN FEATHER DRESS',
  price: 695,
  productImage: item18img,
  hoverImage: item18hover,
  category: 'dress'
}


const products = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17, item18];

function App() {
  const [sortOrder, setSortOrder] = useState('default');
  const [category, setCategory] = useState('All');

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  let sortedProducts = [...products];
  if (category !== 'All') {
    sortedProducts = sortedProducts.filter((product) => product.category === category);
  }

  if (sortOrder === 'low-to-high') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'high-to-low') {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="App">
      <Header className="header"/>
      <img src={banner} className="banner"/>
      <div className='about'>
        <h2 className='about-heading'>About the brand</h2>
        <p className='about-text'>Welcome to Vérité , a fashion brand that's all about empowering modern women to express themselves confidently through fashion. Our clothes are designed for the woman who is not afraid to stand out in a crowd and make a statement with her unique sense of style.</p>
        <p className='about-text'>Our collection features a range of clothing options that are perfect for everyday wear and more daring ones for special occasions. We use only the highest quality fabrics and incorporate bold colours, interesting textures, and eye-catching details like feathers and sparkle to create unique and unforgettable looks.</p>
        <p className='about-text'>At Vérité, we believe that fashion should be accessible to everyone. That's why we strive to offer high-quality clothing at an affordable price point, without compromising on style or sophistication. Whether you're looking for a chic and comfortable outfit for a day out, or a stunning statement piece for a special occasion, we've got you covered.</p>
        <p className='about-text'>We take pride in our commitment to sustainable and ethical fashion practices. Our clothing is made with the environment and our customers in mind, using eco-friendly materials and responsible manufacturing processes.</p>
        <p className='about-text'>We're passionate about empowering women to feel confident and beautiful in their own skin, and we believe that fashion is a powerful tool to help them achieve this. Join us on our journey to inspire, uplift, and celebrate the modern woman through fashion.</p>
      </div>
      <div className='option-container'>
      <div className="dropdown-category">
          <label htmlFor="category-select">Category:</label>
          <select id="category-select" value={category} onChange={handleCategoryChange} className='custom-select'>
            <option value="All">All</option>
            <option value="tops">Tops</option>
            <option value="bottoms">Bottoms</option>
            <option value="dresses">Dresses</option>
          </select>
        </div>
        <div className="dropdown-order">
          <label htmlFor="sort-order-select">Sort by:</label>
          <select id="sort-order-select" value={sortOrder} onChange={handleSortOrderChange} className='custom-select'>
            <option value="default">Default</option>
            <option value="low-to-high">Low to high</option>
            <option value="high-to-low">High to low</option>
          </select>
        </div>
      </div>  
      <div className="products">
        {sortedProducts.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>  
    </div>
  );
}

export default App;
