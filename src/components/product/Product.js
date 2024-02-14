//home sayfasında productlist ve productfilterin beraber sergilendiği yer
import React, { useEffect } from 'react'
import styles from "./Product.module.scss"
import ProductFilter from './productFilter/ProductFilter'
import ProductList from './productList/ProductList'
import useFetchCollection from '../../customHooks/useFetchCollection'
import { useDispatch, useSelector } from 'react-redux'
import { STORE_PRODUCTS, selectProducts } from '../../redux/slice/productSlice'

const Product = () => {

  // will retrieved from db (Hook) then store in redux
  const {data,isLoading} = useFetchCollection("products")

  // hook data from Redux- (A hook to access the redux store's state.)
  const products = useSelector(selectProducts)

  // A hook to access the redux   store in redux
  const dispatch = useDispatch()

  // dispatch will store the data to redux
  useEffect(()=>{
    dispatch(STORE_PRODUCTS({
      products:data
    }))
  },[dispatch,data])

  return (
    <section>
      <div className={`container ${styles.product}`}>
        <aside className={styles.filter}>
          <ProductFilter/>
        </aside>
        <div className={styles.content}>
          <ProductList/>
        </div>
      </div>
    </section>
  )
}

export default Product