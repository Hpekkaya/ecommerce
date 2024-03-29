// Login Page for registered users

import React, { useState } from "react";
import styles from "./auth.module.scss";
import loginImg from "../../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Card from "../../components/card/Card";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup  } from  "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
                   
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    // console.log(email, password);
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        setIsLoading(false);
        toast.success("Login Successfully...");
        navigate("/");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        toast.success("Login with Google is succesful..")
        navigate("/")
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
      })
      .catch((error) => {
        // Handle Errors here.
        toast.error(error.message)
      });
  };


  return (
    <>
      {isLoading && <Loader/>} 
      <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={loginImg} alt="loginImage" width="400" />
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
            <button  type="submit" className="--btn --btn-primary --btn-block">Login</button>
            {/* {console.log()} */}
            <div className={styles.links}>
              <Link to="/reset">Reset Password</Link>
            </div>
            <p>-- or --</p>
          </form>
          <button className="--btn --btn-danger --btn-block" onClick={signInWithGoogle}>
            <FaGoogle color="#fff" />
            &nbsp; Login with Google
          </button>
          <span className={styles.register}>
            <p>Don't have an account? </p>
            <Link to="/register">&nbsp;Register</Link>
          </span>
        </Card>
      </section>
    </>
  );
};

export default Login;
