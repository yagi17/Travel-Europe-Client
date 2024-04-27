import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase,config";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

const Authentication = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);

  // google and github
  const google = new GoogleAuthProvider();
  const github = new GithubAuthProvider();

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user
  const signIn = (email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  // google login
  const googleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, google);
  };

  //  Github login
  const gitHubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, github);
  };

  // signOut
  const logout = () => {
    setUser(null);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setLoading(false);
        setUser(currentUser);
      } else {
        setLoading(false);
        setUser(currentUser);
      }
    });
    return () => unsubscribe();
  }, [reload]);

  const values = {
    user,
    loading,
    logout,
    signIn,
    setReload,
    createUser,
    googleLogIn,
    gitHubLogin,
  };
  return (
    <div>
      <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    </div>
  );
};

export default Authentication;
