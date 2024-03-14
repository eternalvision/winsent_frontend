import { Dialog, Flex, Button, Text, TextField, Tabs } from "@radix-ui/themes";
import { Cross2Icon } from "@radix-ui/react-icons";

const TextFieldRender = ({ type, placeholder }) => {
    return (
        <TextField.Root>
            <TextField.Input
                name={type}
                type={type}
                autoComplete={`current-${type}`}
                variant="surface"
                placeholder={placeholder}
                size="2"
            />
            <TextField.Slot>
                <Cross2Icon height="16" width="16" />
            </TextField.Slot>
        </TextField.Root>
    );
};

export const Authorization = () => {
    return (
        <Dialog.Content style={{ maxWidth: 450 }}>
            <Tabs.Root defaultValue="login" position="relative">
                <Tabs.List>
                    <Tabs.Trigger value="login">Авторизация</Tabs.Trigger>
                    <Tabs.Trigger value="registration">
                        Регистрация
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="login">
                    <form>
                        <Flex direction="column" py="3" gap="3">
                            <label>
                                <Text as="div" size="2" mb="1" weight="bold">
                                    Емейл
                                </Text>
                                <TextFieldRender
                                    type="email"
                                    placeholder="Введите свой емейл"
                                />
                            </label>
                            <label>
                                <Text as="div" size="2" mb="1" weight="bold">
                                    Пароль
                                </Text>
                                <TextFieldRender
                                    type="password"
                                    placeholder="Введите свой пароль"
                                />
                            </label>
                        </Flex>
                        <Flex gap="3" mt="4" justify="end">
                            <Dialog.Close>
                                <Button variant="soft" color="gray">
                                    Отмена
                                </Button>
                            </Dialog.Close>
                            <Button type="submit">Войти</Button>
                        </Flex>
                    </form>
                </Tabs.Content>
                <Tabs.Content value="registration">
                    <form>
                        <Flex direction="column" py="3" gap="3">
                            <label>
                                <Text as="div" size="2" mb="1" weight="bold">
                                    Пользоватеское имя
                                </Text>
                                <TextFieldRender
                                    type="text"
                                    placeholder="Введите свое пользоватеское имя"
                                />
                            </label>
                            <label>
                                <Text as="div" size="2" mb="1" weight="bold">
                                    Имя
                                </Text>
                                <TextFieldRender
                                    type="name"
                                    placeholder="Введите свое имя"
                                />
                            </label>
                            <label>
                                <Text as="div" size="2" mb="1" weight="bold">
                                    Фамилия
                                </Text>
                                <TextFieldRender
                                    type="surname"
                                    placeholder="Введите свою фамилию"
                                />
                            </label>
                            <label>
                                <Text as="div" size="2" mb="1" weight="bold">
                                    Емейл
                                </Text>
                                <TextFieldRender
                                    type="email"
                                    placeholder="Введите свой емейл"
                                />
                            </label>
                            <label>
                                <Text as="div" size="2" mb="1" weight="bold">
                                    Пароль
                                </Text>
                                <TextFieldRender
                                    type="password"
                                    placeholder="Введите свой пароль"
                                />
                            </label>
                        </Flex>
                        <Flex gap="3" mt="4" justify="end">
                            <Dialog.Close>
                                <Button variant="soft" color="gray">
                                    Отмена
                                </Button>
                            </Dialog.Close>
                            <Button type="submit">Зарегестрироваться</Button>
                        </Flex>
                    </form>
                </Tabs.Content>
            </Tabs.Root>
        </Dialog.Content>
    );
};
