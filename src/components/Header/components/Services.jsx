import { DropdownMenu, Button } from "@radix-ui/themes";
import { CaretDownIcon } from "@radix-ui/react-icons";

const { Root, Trigger, Content, Item, Separator, Sub, SubTrigger, SubContent } =
    DropdownMenu;

export const Services = () => {
    return (
        <Root>
            <Trigger>
                <Button variant="soft">
                    Услуги
                    <CaretDownIcon />
                </Button>
            </Trigger>
            <Content>
                <Item>Уборка квартир</Item>
                <Item>Уборка домов</Item>
                <Item>Уборка офисов</Item>
                <Separator />
                <Sub>
                    <SubTrigger>Доп. услуги</SubTrigger>
                    <SubContent>
                        <Item>Мойка окон</Item>
                        <Item>Мойка духовок</Item>
                        <Separator />
                        <Item>Смена постельного белья</Item>
                        <Separator />
                        <Item>Глажка</Item>
                    </SubContent>
                </Sub>
            </Content>
        </Root>
    );
};
