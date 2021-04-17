import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebase.config";
import { useHistory, useLocation } from "react-router";
import login from "../../../images/login.jpg";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { UserContext } from "../../../App";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const admincheck = (user) => {
    fetch("https://thawing-earth-88805.herokuapp.com/admins", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        const newuser = {
          signed: user.signed,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          isAdmin: data,
        };
        setLoggedInUser(newuser);
        history.replace(from);
      });
  };

  const provider = new firebase.auth.GoogleAuthProvider();
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const googleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const credential = result.credential;
        const token = credential.accessToken;
        const user = result.user;
        const { displayName, email, photoURL } = user;
        const signeduser = {
          signed: true,
          displayName: displayName,
          email: email,
          photoURL: photoURL,
          isAdmin: isAdmin,
        };
        admincheck(signeduser);
      })
      .catch((error) => {});
  };

  return (
    <div className="container row">
      <div className="col-md-6">
        <Button
          style={{ marginTop: "10%" }}
          variant="contained"
          color="secondary"
          onClick={googleSignIn}
        >
          Sign in with Google
        </Button>
      </div>
      <div className="col-md-6">
        <img src={login} alt="" />
      </div>
    </div>
  );
};

export default Login;
