// Product cards on the home page
import React from 'react'

const ProductItem = ({product,grid,id,name,price,desc,imageURL}) => {

  // Shortens text over a certain length to create appearance standards
  const shortenText = (text,n) => {
    if(text.length > n) {
      const shortenedText = text.substring(0,n).concat("...")
      return shortenedText;
    }
    else {
      return text;
    }
  }
  return (
    <div>
      
    </div>
  )
}

export default ProductItem