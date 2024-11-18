import { createContext, useEffect, useState } from "react";
import { auth } from './../firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createNewUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle =()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut =()=>{
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = updatedData =>{
        return updateProfile(auth.currentUser, updatedData);
    }

    const authInfo ={
        user,
        setUser,
        createNewUser,
        userLogin,
        logOut,
        updateUserProfile,
        signInWithGoogle,
        loading,
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unsubscribe();
        }
    },[])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;