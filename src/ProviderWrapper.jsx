import * as Provider from "./context";

const { DarkModeProvider, LanguageProvider } = Provider;

export const ProviderWrapper = ({ children }) => {
    return (
        <LanguageProvider>
            <DarkModeProvider>{children}</DarkModeProvider>
        </LanguageProvider>
    );
};
