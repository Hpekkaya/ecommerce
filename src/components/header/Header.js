// Header section with all links
import React, { useEffect, useState } from 'react'
import styles from "./Header.module.scss"
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaShoppingCart, FaTimes, FaUserCircle } from "react-icons/fa"
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase/config';
import { toast } from 'react-toastify';


const Header = () => {

  //  Show-Hide Menu on left 
  const [showMenu, setShowMenu] = useState(false)
  
  const [displayName, setDisplayName] = useState("")

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, 
        
        const uid = user.uid;
        // console.log(user)
        setDisplayName(user.displayName)
      } else {
        // User is signed out
        setDisplayName("")
         
      }
    });
  }, []);

  const toggleMenu = ()=> {
    setShowMenu(!showMenu)
  }
  const hideMenu =()=> {
    setShowMenu(false)
  }

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout is succesful..")
        navigate("/")
      })
      .catch((error) => {
        toast.error(error.message)
      });
  };

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

  const activeLink =(({isActive})=> (isActive ? `${styles.active}` : ""))
  return (
    <header>
      <div className={styles.header}>
        {logo}
        {/* Listen showMenu show/hide menu */}
        <nav className={showMenu ? `${styles["show-nav"]}` :` ${styles["hide-nav"]}`}>

          {/* According to show menu (Canopy ) */}
          <div className={showMenu ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}` : `${styles["nav-wrapper"]}`} onClick={hideMenu}>
          </div>

          {/* Logo and close button added to the toggle menu */}
          <ul onClick={hideMenu}>
          <li className={styles["logo-mobile"]}>
              {logo}
              <FaTimes size={22} color="#fff" onClick={hideMenu}/>
            </li>
            <li><NavLink to="/" className={activeLink}>Home</NavLink></li>
            <li><NavLink to="/contact" className={activeLink}>Contact Us</NavLink></li>
          </ul>
          <div className={styles["header-right"]} onClick={hideMenu}>
            <span className={styles.links}>
              <NavLink to="/login" className={activeLink}>Login</NavLink>
              <a href="#home" style={{color:"#ff7722", fontSize:"10px"}}>
                <FaUserCircle size={16}/>&nbsp;
                Wellcome {displayName}
              </a>   
              <NavLink to="/order-history" className={activeLink}>My Orders</NavLink>
              <NavLink to="/" onClick={logoutUser}>Logout</NavLink>
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