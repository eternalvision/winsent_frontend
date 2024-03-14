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
            animation.initial = { opacity: 0 };
            animation.animate = { opacity: 1 };
            animation.exit = { opacity: 0 };
    }

    return animation;
};

export const AnimationWrapper = ({ className, children, componentType }) => {
    const { initial, animate, exit } = InitializeAnimation({ componentType });
    return (
        <motion.section
            viewport={{ once: true }}
            initial={initial}
            animate={animate}
            exit={exit}
            transition={{
                duration: "1.5",
            }}
            className={className}>
            {children}
        </motion.section>
    );
};

// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";

// const InitializeAnimation = ({ componentType }) => {
//     let animation = {
//         initial: {},
//         animate: {},
//         exit: {},
//     };

//     switch (componentType) {
//         case "Header":
//             animation.initial = { y: -25 };
//             animation.animate = { y: 0 };
//             animation.exit = { y: -95 };
//             break;
//         default:
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
//     }

//     return animation;
// };

// export const AnimationWrapper = ({ className, children, componentType }) => {
//     const [isVisible, setIsVisible] = useState(false);
//     const ref = useRef();

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 setIsVisible(entry.isIntersecting);
//             },
//             {
//                 threshold: 0.2,
//             },
//         );

//         if (ref.current) {
//             observer.observe(ref.current);
//         }

//         return () => {
//             if (ref.current) {
//                 observer.unobserve(ref.current);
//             }
//         };
//     }, []);

//     const { initial, animate, exit } = InitializeAnimation({ componentType });

//     return (
//         <motion.div
//             ref={ref}
//             initial="initial"
//             animate={isVisible ? "animate" : "initial"}
//             exit="exit"
//             variants={{ initial, animate, exit }}
//             transition={{ duration: 0.5 }}
//             className={className}>
//             {children}
//         </motion.div>
//     );
// };
