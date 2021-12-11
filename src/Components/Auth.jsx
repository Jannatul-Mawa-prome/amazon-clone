import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../App";
import firebaseConfig from "./firebase.config";

const Auth = () => {
  initializeApp(firebaseConfig);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [users, setUsers] = useState({});
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    repassword: "",
    error: "",
  });
  const auth = getAuth();
  const history = useHistory();
  const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        history.push("/login");
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        const userInfo = { ...user };
        userInfo.error = errorMessage;
        setUser(userInfo);
        console.log(errorMessage);
      });
  };
  const signIn = () => {
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setLoggedInUser(user);
        history.push("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        const userInfo = { ...user };
        userInfo.error = errorMessage;
        setUser(userInfo);
      });
  };
  const updataUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        console.log("profile updated");
        setUsers(users.username);
      })
      .catch((error) => {
        // An error occurred
        console.log(error);
        console.log("profile not updated");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (newUser) => {
      if (newUser) {
        // User is signed
        const currUser = newUser;
        setUsers(currUser);

        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);
  return {
    signIn,
    user,
    setUser,
    createUser,
    updataUserName,
    users,
  };
};

export default Auth;
