import React, { createContext, useState } from "react";
import { personImageUrl } from "../mockData";
import { auth } from "../firebase/firebaseInit";

export const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(null);

  const createUser = (name, email, password) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        user
          .updateProfile({
            displayName: name,
            photoURL: personImageUrl[Math.floor(Math.random() * 6)],
          })
          .then(() => {
            setUserData(user);
          })
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const signInUser = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        setUserData(userCredential.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const signOutUser = () => {
    auth.signOut();
    setUserData({});
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        error,
        setError,
        onCreateUser: createUser,
        onSignInUser: signInUser,
        onSignOutUser: signOutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
