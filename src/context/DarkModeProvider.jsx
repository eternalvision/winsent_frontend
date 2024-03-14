import { createContext } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children, Hooks }) => {
    const { useLocalStorageState } = Hooks;

    const [theme, setTheme] = useLocalStorageState({
        key: "theme",
        initialValue: "light",
    });

    return (
        <DarkModeContext.Provider value={{ theme, setTheme }}>
            {children}
        </DarkModeContext.Provider>
    );
};
