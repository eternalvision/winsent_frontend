import { Flex, Box, Text, Button, Dialog } from "@radix-ui/themes";

export const Title = ({ AnimationWrapper, Authorization }) => {
    return (
        <AnimationWrapper className={"Title"} componentType={"Component"}>
            <Flex className="TitleBlock" justify="center">
                <img
                    className="TitleImage"
                    src="/images/clean1.jpg"
                    alt="TitleImage"
                />
                <Box className="TitleBox">
                    <Flex
                        p="5"
                        className="TitleBoxFlex"
                        direction="column"
                        justify="between">
                        <Flex gap="5" direction="column">
                            <Box className="TitleText">
                                <Text
                                    color="var(--accent-color)"
                                    weight="medium"
                                    size="9">
                                    Уборка офисов домов и квартир
                                </Text>
                            </Box>
                        </Flex>
                        <Box className="TitleDescription">
                            <Text size="3" color="var(--accent-color)">
                                Приветствуем вас в нашей профессиональной
                                клининговой компании! <br /> Мы активно
                                противостоим главным врагам чистоты, таким как
                                пыль, пылевые клещи, грязь, плесень и другие
                                виды загрязнений. Мы осознаем вред, который они
                                могут нанести вашему имуществу и здоровью. Не
                                переживайте, наша задача — обеспечить вашу
                                защиту. <br /> Откройте для себя мощь
                                профессиональной чистки, заказав наши выдающиеся
                                услуги прямо сейчас!
                            </Text>
                        </Box>
                        <Box className="TitleBoxButton">
                            <Dialog.Root>
                                <Dialog.Trigger>
                                    <Button size="4">Заказать уборку</Button>
                                </Dialog.Trigger>
                                <Authorization />
                            </Dialog.Root>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </AnimationWrapper>
    );
};
