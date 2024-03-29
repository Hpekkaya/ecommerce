////şifre resetleme sayfası
import React, { useState } from "react";
import styles from "./auth.module.scss";
import resetImg from "../../assets/forgot.png";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";

const Reset = () => {
  // store reset info
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const resetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // alert(email)
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        setIsLoading(false);
        toast.success(" Check your email adress for reset link");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  return (
    <>
      {isLoading && <Loader />}
      <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={resetImg} alt="resetImg" width="400" />
        </div>
        <Card cardClass={styles.form}>
          <h2>Reset</h2>
          <form onSubmit={resetPassword}>
            <input
              type="text"
              placeholder="eMail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="--btn --btn-primary --btn-block">
              Reset Password
            </button>
            <div className={styles.links}>
              <p>
                <Link to="/login">-Login</Link>
              </p>
              <p>
                <Link to="/register">-Register</Link>
              </p>
            </div>
          </form>
        </Card>
      </section>
    </>
  );
};

export default Reset;
