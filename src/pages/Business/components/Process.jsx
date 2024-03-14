import { Flex, Box, Text } from "@radix-ui/themes";

export const Process = ({ AnimationWrapper }) => {
    return (
        <AnimationWrapper className={"Process"} componentType={"Component"}>
            <Flex p="5" justify="between" className="ProcessBlock" gap="5">
                <Flex
                    justify="between"
                    className="ProcessBlockFlex"
                    direction="column"
                    gap="5">
                    <Box>
                        <Text
                            weight="medium"
                            size="8"
                            color="var(--accent-color)">
                            Идеальная чистота за 3 шага
                        </Text>
                    </Box>
                    <Box>
                        <Flex
                            className="ProcessList"
                            direction="column"
                            gap="4">
                            <Box className="ProcessListItem">
                                <Text color="var(--accent-color)">
                                    Вы регистрируетесь на нашем сервисе.
                                </Text>
                            </Box>
                            <Box className="ProcessListItem">
                                <Text color="var(--accent-color)">
                                    Вы выбираете подходящую дату и время.
                                </Text>
                            </Box>
                            <Box className="ProcessListItem">
                                <Text color="var(--accent-color)">
                                    В выбранное время мы произведем генеральную
                                    уборку <br /> вашего помещения.
                                </Text>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
                <Box className="BusinessImageBox">
                    <img
                        src="/public/images/vacuum1.jpg"
                        className="BusinessImage ProcessImage"
                        alt=""
                    />
                </Box>
            </Flex>
        </AnimationWrapper>
    );
};
