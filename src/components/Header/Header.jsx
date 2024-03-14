import { Flex, Box, Text, Dialog, Button } from "@radix-ui/themes";
import { motion, useScroll } from "framer-motion";
import {
    ThemeSwitcher,
    LanguageSwitcher,
    Services,
    Authorization,
} from "./components";

import "./style.scss";

export const Header = ({ AnimationWrapper, themeContext }) => {
    const { scrollYProgress } = useScroll();
    return (
        <>
            <AnimationWrapper
                className={"HeaderBlock"}
                componentType={"Header"}>
                <Flex
                    className="FatherWidth"
                    justify="between"
                    align="center"
                    gap="9"
                    py="4">
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
            {/* <motion.div
                className="ScrollYProgress"
                style={{ scaleX: scrollYProgress }}
            /> */}
        </>
    );
};
