import { Flex, Box, Text } from "@radix-ui/themes";

export const Introduction = ({ AnimationWrapper, Authorization }) => {
    return (
        <AnimationWrapper
            className={"Introduction"}
            componentType={"Component"}>
            <Flex className="IntroductionBlock" justify="center" gap="5">
                <Box>
                    <img
                        className="BusinessImage"
                        src="/images/window2.jpg"
                        alt=""
                    />
                </Box>
                <Flex
                    className="IntroductionBlockFlex"
                    direction="column"
                    gap="5">
                    <Box>
                        <Text
                            weight="medium"
                            size="8"
                            color="var(--accent-color)">
                            Вам нужно идеально убрать в офисе, доме или
                            квартире?
                        </Text>
                    </Box>
                    <Box>
                        <Text color="var(--accent-color)">
                            Наше агентство по уборке обладает значительным
                            опытом в чистке общественных мест. Мы являемся
                            экспертами в сфере клининговых услуг и в первую
                            очередь стремимся удовлетворить все ваши запросы. В
                            соответствии с вашими пожеланиями, мы можем
                            осуществить чистку общих пространств вашего здания в
                            любое удобное для вас время, включая ночные часы, а
                            также выходные и праздничные дни. Благодаря нашей
                            гибкости и применению передовых технологий и
                            экологически чистых средств, мы способны устранить
                            любые виды загрязнений. Ваше пространство всегда
                            будет идеально чистым.
                        </Text>
                    </Box>
                    <Box>
                        <Text color="var(--accent-color)">
                            Наша компания по уборке предлагает комплексные
                            услуги по очистке жилых и рабочих пространств. Наш
                            коллектив высококвалифицированных специалистов не
                            только отлично подготовлен, но и заслуживает полного
                            доверия, что позволяет вам без опасений поручить нам
                            заботу о чистоте. Используя профессиональное
                            оборудование и высококачественные средства для
                            уборки, мы гарантируем исключительное качество наших
                            услуг, от которого вы будете в восторге. Мы уделяем
                            особое внимание деталям, обеспечивая безупречный
                            блеск вашего интерьера.
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        </AnimationWrapper>
    );
};
