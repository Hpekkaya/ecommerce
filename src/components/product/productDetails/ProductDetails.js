// The product details component that appears when we click on the products on the home page
import React, { useEffect, useState } from 'react'
import styles from "./ProductDetails.module.scss";
import { Link, useParams } from 'react-router-dom';
import useFetchDocument from '../../../customHooks/useFetchDocument';
import spinnerImg from "../../../assets/spinner.gif"

const ProductDetails = () => {

  // To get the ID in the link above
  const {id} = useParams()

  // To keep product related details
  const [product, setProduct ] = useState(null)

  // 
  const document = useFetchDocument("product", id)

  useEffect(()=>{
    setProduct(document)
  },[document])

  return (
    <section>
      <div className={`container ${styles.product}`}>
        <h2>Product Details</h2>
        <Link to="/#products">&larr; Back to Products</Link>
      </div>
      {products === ? (
        <img src={spinnerImg} alt ="Loading..." style={{width:"50px"}}/>
      ):(
        <>
          <div className={styles.details}>
            <div className={styles.img}>
              <img src={product.imgURL} alt ="{product.name}"/>
            </div>
            <div className={styles.content}>
              <h3>{product.name}</h3> 
              <p className={styles.price}>{` $${product.price}`}</p>   
              <p>{product.desc}</p>  
              <p><b>SKU</b>{product.id}</p>
              <p><b>Brand</b>{product.brand}</p>
              <div></div>

            </div>
          </div>
        </>
      )}
    </section>         
  )
}

export default ProductDetails