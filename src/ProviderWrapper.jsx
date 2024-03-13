import * as Provider from "./context";
import * as Hooks from "./hooks";

const { DarkModeProvider, LanguageProvider } = Provider;

export const ProviderWrapper = ({ children }) => {
    return (
        <LanguageProvider Hooks={Hooks}>
            <DarkModeProvider Hooks={Hooks}>{children}</DarkModeProvider>
        </LanguageProvider>
    );
};
