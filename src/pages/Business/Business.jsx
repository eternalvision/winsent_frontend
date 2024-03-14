import { Title } from "./components";
import { Flex } from "@radix-ui/themes";

import "./style.scss";

export const Business = ({ AnimationWrapper }) => {
    return (
        <AnimationWrapper className={"Business"} componentType={"Business"}>
            <Flex className="FatherWidth" direction="column" align="center">
                <Title AnimationWrapper={AnimationWrapper} />
            </Flex>
        </AnimationWrapper>
    );
};
