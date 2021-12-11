import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "./Auth";

const Register = () => {
  const authUser = Auth();
  const [error, setError] = useState();
  const handleInput = (e) => {
    let userInfo = { ...authUser.user };
    userInfo[e.target.name] = e.target.value;
    authUser.setUser(userInfo);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (authUser.user.password === authUser.user.repassword) {
      authUser.createUser(authUser.user.email, authUser.user.password);
      authUser.updataUserName(authUser.user.username);
    } else {
      setError("Password Does not match ");
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign-Up</h1>

        <form onSubmit={handleSubmit}>
          <h5>Username</h5>
          <input
            value={authUser.user.username}
            name="username"
            onChange={handleInput}
            type="text"
          />
          <h5>E-mail</h5>
          <input
            value={authUser.user.email}
            name="email"
            onChange={handleInput}
            type="email"
          />

          <h5>Password</h5>
          <input
            value={authUser.user.password}
            name="password"
            onChange={handleInput}
            type="password"
          />
          <h5>Re-Password</h5>
          <input
            value={authUser.user.repassword}
            name="repassword"
            onChange={handleInput}
            type="password"
          />

          <button type="submit" className="login__signInButton">
            Sign up
          </button>
          <span className="text-center text-danger mt-2">{error && error}</span>
          <span className="text-center text-danger mt-2">
            {authUser.user.error && authUser.user.error}
          </span>
          <p className="mt-2">
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
