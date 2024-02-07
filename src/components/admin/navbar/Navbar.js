//Left Navbar in admin panel
import React from 'react'
import styles from "./Navbar.module.scss"
import { useSelector } from 'react-redux'
import { selectUserName } from '../../../redux/slice/authSlice'
import { FaUserCircle } from 'react-icons/fa'


const Navbar = () => {

  const activeLink = ({isActive}) => (isActive ? `${styles.active}` : "")
  const userName = useSelector

  return (
    <div className={styles.Navbar}>
      <div className={styles.user}>      
        <FaUserCircle size={40} color='#fff'/>
        <h4>{userName}</h4>
      </div>
    </div>
  )
}

export default Navbar