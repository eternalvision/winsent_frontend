import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const InitializeAnimation = ({ componentType }) => {
    let animation = {
        initial: {},
        animate: {},
        exit: {},
    };

    switch (componentType) {
        case "Header":
            animation.initial = { y: -25 };
            animation.animate = { y: 0 };
            animation.exit = { y: -95 };
            break;
        default:
            //             animation.initial = {
            //                 scale: 0.9,
            //                 rotateX: -5,
            //                 opacity: 0.2,
            //             };
            //             animation.animate = {
            //                 scale: 1,
            //                 opacity: 1,
            //                 rotateX: 0,
            //             };
            //             animation.exit = {
            //                 scale: 0.9,
            //                 rotateX: -5,
            //                 opacity: 0.2,
            //             };
            animation.initial = {
                opacity: 0.3,
            };
            animation.animate = {
                opacity: 1,
            };
            animation.exit = {
                opacity: 0.3,
            };
    }

    return animation;
};

export const AnimationWrapper = ({ className, children, componentType }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.2,
            },
        );

        const currentElement = ref.current;

        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, []);

    const { initial, animate, exit } = InitializeAnimation({ componentType });

    return (
        <motion.div
            ref={ref}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            exit="exit"
            variants={{ initial, animate, exit }}
            transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}
            className={className}>
            {children}
        </motion.div>
    );
};
