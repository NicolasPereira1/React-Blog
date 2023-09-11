import {createContext, useContext, useState} from "react";

const AuthenticationContext = createContext(null);
export const useAuthentication = ()=> useContext(AuthenticationContext);

export default function UseAuthentication({children}){
    const [isAuthenticated, setAuthentication] = useState(false);
    const [username, setUsername] = useState(null);
    const providerValue = {isAuthenticated, setAuthentication, username, setUsername};
    return (
        <AuthenticationContext.Provider value={providerValue}>
            {children}
        </AuthenticationContext.Provider>
    );
}