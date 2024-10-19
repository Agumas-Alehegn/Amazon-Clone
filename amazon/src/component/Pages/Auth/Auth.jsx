import React from "react";
import classes from "./auth.module.css";
import LayOut from "../../LayOut/LayOut";
import amazon_logo from "../../../assets/images/amazon_logo.png";
import { Link } from "react-router-dom";

function Auth() {
  return (
    <LayOut>
      <section className={classes.login}>
        <Link className={classes.authPage_logo_wrap}>
          <img src={amazon_logo} alt="amazon logo" />
        </Link>{" "}
        <div className={classes.login_container}>
          <form action="">
            <h1>Sign in</h1>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="mail" id="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="pass" id="password" />
            </div>
            <button className={classes.btn_signIn} type="submit">
              Continue
            </button>
          </form>
          <p>
            By continuing, you agree to Amazon-Clone
            <a href=""> Conditions of Use </a> and
            <a href=""> Privacy Notice.</a>
          </p>
          <div className={classes.new_to_amazon}>
            <hr />
            <span> New to Amazon?</span>
            <hr />
          </div>
          <button className={classes.btn_create_account} type="button">
            Create your Amazon account
          </button>
        </div>
      </section>
    </LayOut>
  );
}

export default Auth;
