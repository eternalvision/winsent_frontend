import { useEffect, useRef } from "react";
import { IconButton } from "@radix-ui/themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

export const ThemeSwitcher = ({ theme, setTheme }) => {
    const bodyRef = useRef(document.body);

    useEffect(() => {
        const { current } = bodyRef;
        current.classList.remove("light", "dark");
        current.classList.add(theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };
    return (
        <IconButton
            variant="ghost"
            className="ThemeButton"
            onClick={toggleTheme}>
            {theme === "light" ? <SunIcon /> : <MoonIcon />}
        </IconButton>
    );
};
