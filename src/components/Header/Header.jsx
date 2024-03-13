import { Flex, Box, Text, Dialog, Button } from "@radix-ui/themes";
import {
    ThemeSwitcher,
    LanguageSwitcher,
    Services,
    Authorization,
} from "./components";

import "./style.scss";

export const Header = ({ AnimationWrapper, themeContext }) => {
    return (
        <AnimationWrapper className={"Header"} componentType={"Header"}>
            <Flex
                className="HeaderBlock"
                style={{ justifyContent: "space-around" }}
                align="center"
                gap="9"
                top="0"
                left="0"
                right="0"
                py="4"
                px="8">
                <Box>
                    <Text color="accentColor" size="6" weight="bold">
                        Winsent
                    </Text>
                </Box>
                <Flex gap="5" align="center">
                    <ThemeSwitcher {...themeContext} />
                    <Flex gap="2" align="center">
                        <Services />
                        <Button>Цены</Button>
                    </Flex>
                    <LanguageSwitcher />
                    <Box>
                        <Dialog.Root>
                            <Dialog.Trigger>
                                <Button>Зарегистрироваться | Войти</Button>
                            </Dialog.Trigger>
                            <Authorization />
                        </Dialog.Root>
                    </Box>
                </Flex>
            </Flex>
        </AnimationWrapper>
    );
};
