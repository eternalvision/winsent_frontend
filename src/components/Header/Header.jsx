import { Flex, Box, Text, Dialog, Button } from "@radix-ui/themes";
import { ThemeSwitcher, LanguageSwitcher, Services, Logo } from "./components";

import "./style.scss";

export const Header = ({ AnimationWrapper, Authorization, themeContext }) => {
    return (
        <AnimationWrapper className={"HeaderBlock"} componentType={"Header"}>
            <Box className="FatherWidth">
                <Flex justify="between" py="5" align="center" gap="9">
                    <Box className="Logo">
                        <Logo />
                        <Flex direction="column">
                            <Text color="accentColor" size="6" weight="bold">
                                Winsent
                            </Text>
                            <Text size="2" color="accentColor">
                                cleaning services
                            </Text>
                        </Flex>
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
            </Box>
        </AnimationWrapper>
    );
};
