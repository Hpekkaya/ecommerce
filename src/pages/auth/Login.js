// Login Page for registered users

import React, { useState } from 'react'
import styles from "./auth.module.scss"
import loginImg from "../../assets/login.png"
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import Card from '../../components/card/Card'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/config' 
import { toast } from 'react-toastify'


const Login = () => {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");

  const navigate = useNavigate
  
  const loginUser = (e) => {
    e.preventDefault();
    // console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        toast.success("Login is succesful...")
        navigate("/")
      })
      .catch((error) => {
         toast.error(error.message)
      });
  };

  return (

    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={loginImg} alt="LoginImage" width="400"/>
      </div>
      <Card cardClass={styles.form}>
        <h2>Login</h2>
        <form onSubmit={loginUser}>
        <input
              type="text"
              placeholder="eMail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          <button className='--btn --btn-primary --btn-block'>Login</button>
          <div className={styles.links}>
            <Link to="/reset">Reset Password</Link>
          </div>
          <p>-- or --</p>
        </form>
        <button className='--btn --btn-danger --btn-block'><FaGoogle color='#ffff'/>&nbsp; Login with Google</button>
        <span className={styles.register}>
          <p>Don't have an account? </p>
          <Link to="/register">&nbsp;Register</Link>
        </span>
      </Card>
    </section>
  )
}

export default Login