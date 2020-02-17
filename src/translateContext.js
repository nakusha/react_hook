import React, { useState, useContext } from "react";

const LangContext = React.createContext();

const Lang = ({defaultLang, children, translations}) => {
    const [lang, setLang] = useState(defaultLang);
    const translateText = (text) => {
        if (lang === defaultLang) {
            return text;
        }else{
            return translations[lang][text];
        }
    }
    return (
        <LangContext.Provider value={{setLang, translateText}}>
            {children}
        </LangContext.Provider>
    )
}

export const useSetLang = lang => {
    const { setLang } = useContext(LangContext);
    return setLang;
}

export const useTranlateText = () => {
    const {translateText} = useContext(LangContext);
    return translateText;
}

export default Lang;