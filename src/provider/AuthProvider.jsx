import { createContext, useEffect, useState } from "react";
import { auth } from './../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createNewUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut =()=>{
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
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
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