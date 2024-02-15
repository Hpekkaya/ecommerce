// It is the place where all product cards are displayed, along with the section where you can view, search and sort the products on the home page. 
// Product cards will be processed in the component named (productitem).

import React, { useState } from 'react'
import styles from "./ProductList.module.scss";
import { BsFillGridFill } from "react-icons/bs";
import { FaListAlt } from "react-icons/fa";

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

      </div>
    </div>
  )
}

export default ProductList