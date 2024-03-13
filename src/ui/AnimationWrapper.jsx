import { motion } from "framer-motion";

const InitializeAnimation = ({ componentType }) => {
    let animation = {
        initial: "",
        animate: "",
        exit: "",
    };

    switch (componentType) {
        case "Header":
            animation.initial = { transform: "translateY(-80px)" };
            animation.animate = { transform: "translateY(0px)" };
            animation.exit = { transform: "translateY(-80px)" };
            break;
        default:
            animation.initial = { transform: " translateY(0)" };
            animation.animate = { transform: "scale(1)" };
            animation.exit = { transform: "scale(0)" };
    }

    return animation;
};

export const AnimationWrapper = ({ className, children, componentType }) => {
    const { initial, animate, exit } = InitializeAnimation({ componentType });
    return (
        <motion.section
            initial={initial}
            animate={animate}
            exit={exit}
            transition={{
                duration: "1",
            }}
            className={className}>
            {children}
        </motion.section>
    );
};
