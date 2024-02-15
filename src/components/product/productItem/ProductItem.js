// Product cards on the home page
import React from 'react'
import Card from '../../card/Card';
import styles from "./ProductItem.module.scss"
import { Link } from 'react-router-dom';


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
    <Card cardClass={grid ? `${styles.grid}` : `${styles.list}`}>
      {/* List products- Image ,price, Name and Button and Link to Product detais  */}
      <Link to={`/product-details/${id}`}>
        <div className={styles.img}>
          <img src={imageURL} alt={name} />
        </div>
        <div className={styles.content}>
          <div className={styles.details}>
            <p>{`$${price}`}</p>
            <h4>{shortenText(name, 18)}</h4>
          </div>
          {/* Displaying text depending on the list view (not a grid view) */}
          {!grid && <p>{shortenText(desc, 200)}</p>}
          <button className="--btn --btn-danger">Add To Cart</button>
        </div>
      </Link>
    </Card>
  );
}

export default ProductItem