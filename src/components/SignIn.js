import React from "react";
import { Button } from "@mui/material";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";
// import { TextField } from "@mui/material";

const SignIn = (props) => {
  const signInHandler = () => {
    //sign in with Google account
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div className="login">
      <h1>Create New Account</h1>
      <div className="buttons">
        <Button onClick={signInHandler}>Sign Up</Button>
      </div>
    </div>
  );
};

export default SignIn;
