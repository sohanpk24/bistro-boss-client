import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";


export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider()
  const axiosPublic = useAxiosPublic()

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

  //social login
  const googleSignIn = ()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
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
        if(currentUser){
            //get token and store client
            const userInfo = {email: currentUser.email}
            axiosPublic.post('/jwt', userInfo)
            .then(res =>{
              if(res.data.token){
                localStorage.setItem('access-token', res.data.token)
              }
            })
        }
        else{
          // remove token (if token stored in the client side)
          localStorage.removeItem('access-token')
        }
        setLoading(false)
    })
    return ()=>{
       unsubscribe()
    }
  },[axiosPublic])

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    logOut,
    updateUserProfile
  };



  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
