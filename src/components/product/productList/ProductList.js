// It is the place where all product cards are displayed, along with the section where you can view, search and sort the products on the home page. 
// Product cards will be processed in the component named (productitem).

import React, { useEffect, useState } from 'react'
import styles from "./ProductList.module.scss";
import { BsFillGridFill } from "react-icons/bs";
import { FaListAlt } from "react-icons/fa";
import Search from '../../search/Search';
import ProductItem from '../productItem/ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { FILTER_BY_SEARCH, SORT_PRODUCTS, selectFilteredProducts } from "../../../redux/slice/filterSlice";

const ProductList = ({products}) => {

  const [grid, setGrid] = useState(true);
  const [search,setSearch] = useState("")

  const filteredProducts = useSelector(selectFilteredProducts)

  const dispatch = useDispatch();

  // To send when data inside(products and search info) filtered data
  useEffect(()=>{
    dispatch(FILTER_BY_SEARCH({products,search}))
  },[dispatch,products,search])

  return (
    <div className={styles["product-list"]} id="products">
      <div className={styles.top}>
        <div className={styles.icons}>
          <BsFillGridFill size={22} color="orangered" onClick={() => setGrid(true)}/>
          <FaListAlt size={24} color="#0066d4" onClick={() => setGrid(false)} />
          <p><b>{filteredProducts.length}</b> Products found</p>
        </div>
      
        <div>  {/* Real-time changes to the value and onChange sections will occur with Search.js. */}
         <Search value={search} onChange={(e)=>setSearch(e.target.value)}/>
        </div>
        <div className={styles.sort}>
          <label>Sort by:</label>
          <select name="category">
            <option value="latest">Latest</option>
            <option value="lowest-price">Lowest-to-Highest </option>
            <option value="highest-price">Highest-to-Lowest </option>
            <option value="a-z">A - Z</option>
            <option value="z-a">Z - A</option>
          </select>
        </div>

      </div>
      {/* Controls the grid system */}
      <div className={grid ? `${styles.grid}` : `${styles.list}`}>
        
        {products.length === 0 ? (
          <p>No product found</p>
        ) : ( 
          // Filtered products listed real-time
          <>          
          {filteredProducts.map((product)=>{
            // console.log(product)
            return (
              <div key={product.id}>
                <ProductItem {...product} grid={grid} product={product}/>
              </div>
            )
          })}
          </>
        )}
      </div>

    </div>
  )
}

export default ProductList