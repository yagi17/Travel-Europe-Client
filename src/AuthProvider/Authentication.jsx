import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
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

  // update user
  const updateUserProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  // sign in user
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

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
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setUser(user);
    }

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setLoading(false);
        setUser(currentUser);

        // Also save user in localStorage
        localStorage.setItem("user", JSON.stringify(currentUser));
      } else {
        setLoading(false);
        setUser(currentUser);

        // Remove user from localStorage
        localStorage.removeItem("user");
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
    updateUserProfile,
    setLoading
  };
  return (
    <div>
      <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    </div>
  );
};

export default Authentication;
