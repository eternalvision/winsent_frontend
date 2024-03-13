import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = (props) => {
    const { children, initialLanguage } = props;

    const [selectedLang, setSelectedLang] = useState(initialLanguage || "cs");

    const handleLangChange = (lang) => {
        setSelectedLang(lang);
    };

    return (
        <LanguageContext.Provider value={{ selectedLang, handleLangChange }}>
            {children}
        </LanguageContext.Provider>
    );
};
