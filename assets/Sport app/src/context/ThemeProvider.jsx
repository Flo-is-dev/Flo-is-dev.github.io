import { createContext, useState , useEffect } from "react";

export const ThemeContext = createContext()

export default function ThemeProvider(props){

    const [callApi, setCallApi] = useState(false)

    // prevState permet se prémunir des click multiples
    function toggleCallData() {
        setCallApi(prevState => !prevState);
    }

    // on utilise useEffect pour réagir aux changements de callApi
    useEffect(() => {
        const bg = document.querySelector(".background");
        const bgApi = document.querySelector(".backgroundApi");

        // ce html n'existe pas (donc hors login.jsx) ce code ne se joue pas
        if (bg && bgApi) {
            if (callApi) {
                bg.classList.add("active");
                bgApi.classList.add("active");
            } else {
                bg.classList.remove("active");
                bgApi.classList.remove("active");
            }
        } 
    }, [callApi]);

    return (
        <ThemeContext.Provider value={{toggleCallData,callApi }}>
            {props.children}
        </ThemeContext.Provider>
    )
    
}