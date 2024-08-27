import { useState } from "react";
import { createContext } from "react";

// TODO: PETIT BUTTON QUI PERMET DE CHANGER DE THEME entre "MOCK" et "call API"

export const ThemeContext = createContext("mock")

export ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState("mock")
    const toggleTheme = () => {
        setTheme(theme === "mock" ? "callAPI" : "mock")
    }

    return <ThemeContext.Provider value={theme}>
        <button onClick={toggleTheme}> Changer de Thème</button>
        {children}
    </ThemeContext.Provider>
}

