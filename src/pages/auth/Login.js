// Login Page for registered users
import React from 'react'
import styles from "./auth.module.scss"
import loginImg from "../../assets/login.png"

const Login = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={loginImg} alt="Login" width="400"/>
      </div>
    </section>
  )
}

export default Login