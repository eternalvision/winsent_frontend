import { useContext } from "react";
import { Theme, ThemePanel, ScrollArea } from "@radix-ui/themes";
import { Header } from "./components";
import { Business } from "./pages";
import { AnimatePresence } from "framer-motion";
import { DarkModeContext, LanguageContext } from "./context";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import * as UI from "./ui";

export const App = () => {
    const themeContext = useContext(DarkModeContext);
    const languageContext = useContext(LanguageContext);
    const location = useLocation();

    return (
        <Theme
            appearance={themeContext.theme}
            accentColor="indigo"
            grayColor="slate"
            radius="medium"
            scaling="110%">
            {/* <ThemePanel /> */}
            <AnimatePresence>
                <header className="Header">
                    <Header
                        {...UI}
                        themeContext={themeContext}
                        languageContext={languageContext}
                    />
                </header>
            </AnimatePresence>
            <main className="Main">
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route
                            path="/business"
                            element={<Business {...UI} />}
                        />
                        <Route
                            path="*"
                            element={<Navigate to={"/business"} />}
                        />
                    </Routes>
                </AnimatePresence>
            </main>
        </Theme>
    );
};
