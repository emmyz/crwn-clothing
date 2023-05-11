import { createContext, useState, useEffect } from "react";
import {
    onAuthStateChangedListener,
    signOutUser,
    createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

//acutal value, the storage
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

//alias component to wrap UserContext.Provider around <app />
//provider: allow {children}(child components) to access everything in its useState
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    //application initilize -> mount User Provider -> instantiate useEffect callback
    //-> call onAuthStateChangedListener -> give callback (whenever state change, log user)
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            console.log(user);
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
