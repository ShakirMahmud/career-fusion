import { createContext, useState } from "react";
import { auth } from './../firebase/firebase.config';
import { createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createNewUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo ={
        user,
        setUser,
        createNewUser,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;