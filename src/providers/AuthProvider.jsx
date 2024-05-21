import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create user
  const createUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }


  //login user
  const signIn = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }


  //log Out
  const logOut = ()=>{
    
    return signOut(auth)
   
  }

  //update profile
  const updateUserProfile = (name, photo) =>{
   return updateProfile(auth.currentUser, {
      displayName: name, PhotoURL: photo
    })
  }




  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        console.log('current user', currentUser);
        setLoading(false)
    })
    return ()=>{
       unsubscribe()
    }
  },[])

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile
  };



  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
