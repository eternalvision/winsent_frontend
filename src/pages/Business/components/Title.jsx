import { Flex, Box, Text, Button } from "@radix-ui/themes";

export const Title = ({ AnimationWrapper }) => {
    return (
        <AnimationWrapper className={"Title"} componentType={"Component"}>
            <Flex className="TitleBlock" justify="center">
                <img
                    className="TitleImage"
                    src="/public/images/clean1.jpg"
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
                            <Box className="TitleDescription">
                                <Text color="var(--accent-color)">
                                    Речь идет не только об уборке дома. В
                                    комплексах многоквартирных зданий, а также в
                                    индивидуальных жилищах, есть общественные
                                    пространства. Именно они склонны собирать
                                    пыль и грязь, становясь загрязненными
                                    вследствие ежедневной активности.
                                </Text>
                            </Box>
                        </Flex>
                        <Box className="TitleBoxButton">
                            <Button size="3">Заказать уборку</Button>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </AnimationWrapper>
    );
};
