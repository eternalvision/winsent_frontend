import { useContext } from "react";
import { Theme } from "@radix-ui/themes";
import { Header } from "./components";
import { AnimatePresence } from "framer-motion";
import { DarkModeContext, LanguageContext } from "./context";
import * as UI from "./ui";

export const App = () => {
    const themeContext = useContext(DarkModeContext);
    const languageContext = useContext(LanguageContext);

    return (
        <Theme
            appearance={themeContext.theme}
            accentColor="indigo"
            grayColor="mauve"
            panelBackground="solid"
            radius="large"
            scaling="110%">
            <AnimatePresence>
                <Header
                    {...UI}
                    themeContext={themeContext}
                    languageContext={languageContext}
                />
            </AnimatePresence>
        </Theme>
    );
};
