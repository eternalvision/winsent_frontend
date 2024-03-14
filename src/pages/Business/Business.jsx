import { Title, Introduction, Process } from "./components";
import { Flex } from "@radix-ui/themes";

import "./style.scss";

export const Business = ({ AnimationWrapper, Authorization }) => {
    return (
        <AnimationWrapper className={"Business"} componentType={"Business"}>
            <Flex
                // style={{ gap: "95px" }}
                className="FatherWidth"
                direction="column"
                gap="5"
                align="center">
                <Title
                    Authorization={Authorization}
                    AnimationWrapper={AnimationWrapper}
                />
                <Introduction AnimationWrapper={AnimationWrapper} />
                <Process AnimationWrapper={AnimationWrapper} />
            </Flex>
        </AnimationWrapper>
    );
};
