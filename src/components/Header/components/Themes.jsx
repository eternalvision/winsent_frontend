import { Select } from "@radix-ui/themes";

const { Root, Trigger, Content, Group, Item } = Select;

export const Themes = () => {
    return (
        <Root defaultValue="light">
            <Trigger />
            <Content>
                <Group>
                    <Item value="light">Светлая тема</Item>
                    <Item value="dark">Темная тема</Item>
                </Group>
            </Content>
        </Root>
    );
};
