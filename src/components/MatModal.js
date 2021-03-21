import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button, Input } from "@material-ui/core";
import { db, auth } from "../firebase";
import firebase from "firebase";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "center",
    marginLeft: "33vw",
    marginTop: "30vh",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 10,
  },
}));
var provider = new firebase.auth.GoogleAuthProvider();
export default function MatModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);
      } else {
        //user logged out
        setUser(null);
      }
    });

    return () => {
      //Perform CleanUp
      unsubscribe();
    };
  }, [user, username]);

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => alert(error.message));
    setOpen(false);
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const signIN = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
    setOpenSignIn(false);
  };

  //   const LogUser = () => {
  //     firebase.auth().signInWithPopup(provider);
  //   };

  return (
    <div>
      {/* <Button onClick={LogUser} variant="contained" color="primary">
        Google SignIn
      </Button> */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className={classes.paper}>
          <form className="app__signup">
            <h2>Sign UP PoPuP</h2>
            <Input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              onClick={signUp}
              variant="outlined"
              color="primary"
            >
              Sign UP
            </Button>
          </form>
        </div>
      </Modal>

      <Modal open={openSignIn} onClose={() => setOpenSignIn(false)}>
        <div className={classes.paper}>
          <form className="app__signup">
            <h2>SignInPoPuP</h2>

            <Input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              onClick={signIN}
              variant="outlined"
              color="primary"
            >
              Sign IN
            </Button>
          </form>
        </div>
      </Modal>

      {user ? (
        <Button
          onClick={() => auth.signOut()}
          variant="contained"
          color="secondary"
        >
          LogOut
        </Button>
      ) : (
        <div className="app__loginContainer">
          <Button
            onClick={() => setOpenSignIn(true)}
            variant="contained"
            color="primary"
          >
            Sign IN
          </Button>
          <Button
            onClick={() => setOpen(true)}
            variant="contained"
            color="primary"
          >
            Sign UP
          </Button>
        </div>
      )}
    </div>
  );
}
