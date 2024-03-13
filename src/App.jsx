import { Theme } from "@radix-ui/themes";
import { Header } from "./components";
import { AnimatePresence } from "framer-motion";
import * as UI from "./ui";

export const App = () => {
    return (
        <Theme
            appearance="light"
            accentColor="cyan"
            grayColor="mauve"
            panelBackground="solid"
            radius="large"
            scaling="110%">
            <AnimatePresence>
                <Header {...UI} />
            </AnimatePresence>
        </Theme>
    );
};
