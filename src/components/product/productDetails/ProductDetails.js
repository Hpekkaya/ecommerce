// The product details component that appears when we click on the products on the home page
import React, { useEffect, useState } from 'react'
import styles from "./ProductDetails.module.scss";
import { useParams } from 'react-router-dom';
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
    <div>
      {JSON.stringify(document)}
    </div>
  )
}

export default ProductDetails