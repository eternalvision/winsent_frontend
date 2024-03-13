import { Flex, Text, Separator, Button } from "@radix-ui/themes";

export const LanguageSwitcher = () => {
    return (
        <Flex align="center">
            <Button mx="1" variant="ghost">
                <Text>CS</Text>
            </Button>
            <Separator mx="2" orientation="vertical" />
            <Button mx="1" variant="ghost">
                <Text>EN</Text>
            </Button>
            <Separator mx="2" orientation="vertical" />
            <Button mx="1" variant="ghost">
                <Text>UA</Text>
            </Button>
            <Separator mx="2" orientation="vertical" />
            <Button mx="1" variant="ghost">
                <Text>RU</Text>
            </Button>
        </Flex>
    );
};
