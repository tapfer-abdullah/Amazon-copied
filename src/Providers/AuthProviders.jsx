import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from '../Config/firebase.config';

export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {
    const auth = getAuth(app);

    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logoutUser = () =>{
        return signOut(auth);
    }

    //checking if the user log in or not
    useEffect( () =>{
        const unSubscribed = onAuthStateChanged(auth, currentUser=>{
            // if(currentUser){
            setUser(currentUser);
            setLoading(false);
        })
        //unmount 
        return () =>{
            return unSubscribed();
        }
    } , [])






    const authInfo = {
        user,
        createUser,
        loginUser,
        logoutUser,
        loading,
    };

    
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;