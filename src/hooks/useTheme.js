import {createContext, useContext, useMemo, useState} from "react";
import {lightMode} from "../css/lightMode";
import {darkMode} from "../css/darkMode";

export const ThemeContext = createContext(null);
export const useTheme = () => useContext(ThemeContext);

const ContextProvider = ({children}) => {
    const darkTheme = useMemo(()=>darkMode, []);
    const lightTheme = useMemo(()=>lightMode, []);
    const [theme, setTheme] = useState(
        window.matchMedia('(prefers-color-scheme: dark)')
            .matches ? darkTheme : lightTheme
    );
    const toggleTheme = () => setTheme(
        previous => previous.name === 'dark' ? lightTheme : darkTheme
    );
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ContextProvider;