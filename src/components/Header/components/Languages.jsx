import { Select } from "@radix-ui/themes";

export const Languages = () => {
    return (
        <Select.Root defaultValue="cs">
            <Select.Trigger />
            <Select.Content>
                <Select.Group>
                    <Select.Label>Языки</Select.Label>
                    <Select.Item value="cs">Чешский</Select.Item>
                    <Select.Item value="en">Английский</Select.Item>
                    <Select.Item value="ru">Русский</Select.Item>
                    <Select.Item value="ua">Украинский</Select.Item>
                </Select.Group>
            </Select.Content>
        </Select.Root>
    );
};
