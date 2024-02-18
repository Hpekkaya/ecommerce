//home sayfasında productlist ve productfilterin beraber sergilendiği yer
import React, { useEffect } from 'react'
import styles from "./Product.module.scss"
import ProductFilter from './productFilter/ProductFilter'
import ProductList from './productList/ProductList'
import useFetchCollection from '../../customHooks/useFetchCollection'
import { useDispatch, useSelector } from 'react-redux'
import { STORE_PRODUCTS, selectProducts } from '../../redux/slice/productSlice'
import spinnerImg from "../../assets/spinner.gif"

const Product = () => {

  // will retrieved from db (Hook) then store in redux
  const {data,isLoading} = useFetchCollection("products")

  // hook data from Redux- (A hook to access the redux store's state.)
  const products = useSelector(selectProducts)
  // console.log(products)

  // A hook to access the redux   store in redux
  const dispatch = useDispatch()

  // dispatch will store the data to redux
  useEffect(()=>{
    dispatch(STORE_PRODUCTS({
      products:data    //  sends data info to products
    }))
  },[dispatch,data])

  return (
    <section>
      <div className={`container ${styles.product}`}>
        <aside className={styles.filter}>
          {isLoading ? null : <ProductFilter />}
        </aside>
        <div className={styles.content}>
          {/* If isLoading is true, spinner img will be displayed and if it is false, ProductList will be returned. */}
          {isLoading ? (
            <img
              src={spinnerImg}
              alt="Loading..."
              style={{ width: "50px" }}
              className="--center-all"
            />
          ) : (
            <ProductList products={products} />
          )}
        </div>
      </div>
    </section>
  );
}

export default Product