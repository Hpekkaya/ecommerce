// Login Page for registered users
import React from 'react'
import styles from "./auth.module.scss"
import loginImg from "../../assets/login.png"
import { Link } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'

const Login = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={loginImg} alt="Login" width="400"/>
      </div>
      <div className={styles.form}>
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="eMail" required/>
          <input type="password" placeholder="Password" required/>
          <button className="--btn -btn-primary --btn-block">Login</button>
          <div className={styles.links}>
            <Link to="/reset">Reset Pasword</Link>
          </div>
          <p>-- or --</p>
        </form>
        <button className='=--btn --btn-danger --btn-block'><FaGoogle color='#ffff'/>&nbsp; Login with Google</button>
        <span className=''>

        </span>
      </div>
    </section>
  )
}

export default Login