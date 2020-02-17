import React from "react";
import { useSetLang, useTranlateText } from "./translateContext";

const TScreen = () => {
    const setLang = useSetLang();
    const translate = useTranlateText();
    return(
        <>
            <h1>{translate("Hello!")}</h1>
            <button onClick={() => setLang("es")}>{translate("Translate")}</button>
        </>
    )
};

export default TScreen
