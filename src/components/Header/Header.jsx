import { Flex, Box, Text, Dialog, Button } from "@radix-ui/themes";
import { Themes, Languages, Services, Authorization } from "./components";

import "./style.scss";

export const Header = ({ AnimationWrapper }) => {
    return (
        <AnimationWrapper className={"Header"} componentType={"Header"}>
            <Flex
                className="HeaderBlock"
                justify="between"
                position="fixed"
                gap="9"
                top="0"
                left="0"
                right="0"
                py="5"
                px="9">
                <Box>
                    <Text color="accentColor" size="6" weight="bold">
                        Winsent
                    </Text>
                </Box>
                <Flex gap="9" align="center">
                    <Flex gap="3" align="center">
                        <Services />
                        <Text color="accentColor" size="3">
                            Цены
                        </Text>
                    </Flex>
                    <Flex
                        align="center"
                        justify="center"
                        gap="3"
                        style={{ width: "280px" }}>
                        <Themes />
                        <Languages />
                    </Flex>
                    <Box>
                        <Dialog.Root>
                            <Dialog.Trigger>
                                <Button>Зарегистрироваться / Войти</Button>
                            </Dialog.Trigger>
                            <Authorization />
                        </Dialog.Root>
                    </Box>
                </Flex>
            </Flex>
        </AnimationWrapper>
    );
};
