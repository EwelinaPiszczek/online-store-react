import React, { useState } from 'react';

function Product(props) {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseOver = () => {
      setIsHovered(true);
    };
  
    const handleMouseOut = () => {
      setIsHovered(false);
    };
  
    const hoverImage = isHovered ? props.hoverImage : props.productImage;
  
    return (
      <div className="product">
        <img
          src={hoverImage}
          alt="product"
          className="product-image"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
        <div className="info">
            <div className='product-name'>
                <h3>{props.name}</h3>
            </div>
            <div className='price'>
                <p>${props.price}</p>
            </div>
        </div>
      </div>
    );
  }

export default Product;




