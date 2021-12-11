import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../App";
import Auth from "./Auth";

function Login() {
  const authUser = Auth();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const handleInput = (e) => {
    let userInfo = { ...authUser.user };
    userInfo[e.target.name] = e.target.value;
    authUser.setUser(userInfo);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    authUser.signIn(authUser.user.email, authUser.user.password);
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
        <h1>Sign-in</h1>

        <form onSubmit={handleSubmit}>
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

          <button type="submit" className="login__signInButton">
            Sign In
          </button>
          <span className="text-center text-danger mt-2">
            {authUser.user.error && authUser.user.error}
          </span>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <NavLink to="/register">
          <button className="login__registerButton">
            Create your Amazon Account
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Login;
