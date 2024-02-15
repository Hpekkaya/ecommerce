// It is the place where all product cards are displayed, along with the section where you can view, search and sort the products on the home page. 
// Product cards will be processed in the component named (productitem).

import React, { useState } from 'react'
import styles from "./ProductList.module.scss";
import { BsFillGridFill } from "react-icons/bs";
import { FaListAlt } from "react-icons/fa";
import Search from '../../search/Search';

const ProductList = () => {

  const [grid, setGrid] = useState(true);
  const [search,setSearch] = useState("")

  return (
    <div className={styles["product-list"]} id="products">
      <div className={styles.top}>
        <div className={styles.icons}>
          <BsFillGridFill size={22} color="orangered" onClick={() => setGrid(true)}/>
          <FaListAlt size={24} color="#0066d4" onClick={() => setGrid(false)} />
          <p><b>10</b> Products found</p>
        </div>
        <div>
          <p> <Search value={search} onChange={(e)=>setSearch(e.target.value)}/></p>
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
    </div>
  )
}

export default ProductList