import { delay, type Variants } from "framer-motion";

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20},
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition:{
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

export const tweenIn = {
    type: "tween" as const,
    stiffness: 80,
    damping: 12,
};
