// Search component used in the product list on the home page and in all product components in the admin panel

import React from 'react'
import styles from "./Search.module.scss"
import {BiSearch} from "react-icons/bi"

// Real-time changes to the value and onChange sections will occur here.
const Search = ({value,onChange}) => {
  return (
    <div className={styles.search}>
      <BiSearch size={18} className={styles.icon}/>
      <input type='text' placeholder='Search By Name' value={value} onChange={onChange}/>
    </div>
  )
}

export default Search

