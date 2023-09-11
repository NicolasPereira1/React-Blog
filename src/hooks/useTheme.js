import {createContext, useContext, useState} from "react";
import {lightMode} from "../css/lightMode";
import {darkMode} from "../css/darkMode";

export const ThemeContext = createContext(null);
export const useTheme = () => useContext(ThemeContext);

const ContextProvider = ({children}) => {
    const [theme, setTheme] = useState(
        window.matchMedia('(prefers-color-scheme: dark)')
            .matches ? darkMode : lightMode
    );
    const setDarkMode = () => setTheme(() => darkMode);
    const setLightMode = () => setTheme(() => lightMode);
    return(
        <ThemeContext.Provider value={{theme, setLightMode, setDarkMode}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ContextProvider;