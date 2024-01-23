// Header section with all links
import React, { useState } from 'react'
import styles from "./Header.module.scss"
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaTimes } from "react-icons/fa"
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Header = () => {
  //  Show-Hide Menu on left 
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = ()=> {
    setShowMenu(!showMenu)
  }
  const hideMenu =()=> {
    setShowMenu(false)
  }
  const logo = (
    <div className={styles.logo}>
      <Link to="/">
        <h2>
          e<span>Shop</span>
        </h2>
      </Link>
    </div>
  )
  const cart = (
    <span className={styles.cart}>
      <Link to="/cart">
        Cart
        <FaShoppingCart size={20}/>
        <p>0</p>
      </Link>

    </span>
  )
  return (
    <header>
      <div className={styles.header}>
        {logo}
        <nav className={showMenu ? `${styles["show-nav"]}` :` ${styles["hide-nav"]}`}>

          {/* According to show menu (Canopy ) */}
          <div className={showMenu ? `${styles["nav-wrapper"]}${styles["show-nav-wrapper"]}` : `${styles["nav-wrapper"]}`} onClick={hideMenu}>
          </div>

          {/* Logo and close button added to the toggle menu */}
          <ul onClick={hideMenu}>
          <li className={styles["logo-mobile"]}>
              {logo}
              <FaTimes size={22} color="#fff" onClick={hideMenu}/>
            </li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
          <div className={styles["header-right"]} onClick={hideMenu}>
            <span className={styles.links}>
              <Link to="/login">Login</Link>
              <Link to="/order-history">My Orders</Link>
            </span>
            {cart}
          </div>
        </nav>
        {/* Hamburger/Toggle Menu */}
        <div className={styles["menu-icon"]}>
          {cart}
          <HiOutlineMenuAlt3 size={27} onClick={toggleMenu}/>
        </div>
      </div>
    </header>
  )
}

export default Header