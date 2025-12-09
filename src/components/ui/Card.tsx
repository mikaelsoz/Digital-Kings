import { motion, useMotionTemplate, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { MouseEvent, ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    spotlight?: boolean;
    tilt?: boolean;
}

export const Card = ({
    children,
    className = '',
    spotlight = true,
    tilt = true
}: CardProps) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    const tiltX = useSpring(rotateX, { stiffness: 160, damping: 15 });
    const tiltY = useSpring(rotateY, { stiffness: 160, damping: 15 });

    const shouldReduceMotion = useReducedMotion();

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        if (shouldReduceMotion) return;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();

        // Spotlight calculations
        if (spotlight) {
            mouseX.set(clientX - left);
            mouseY.set(clientY - top);
        }

        // Tilt calculations
        if (tilt) {
            const rotateAmountX = ((clientY - top) / height - 0.5) * -12;
            const rotateAmountY = ((clientX - left) / width - 0.5) * 12;
            rotateX.set(rotateAmountX);
            rotateY.set(rotateAmountY);
        }
    }

    function handleMouseLeave() {
        if (spotlight) {
            mouseX.set(0);
            mouseY.set(0);
        }
        if (tilt) {
            rotateX.set(0);
            rotateY.set(0);
        }
    }

    // Base transformations
    const motionStyle = shouldReduceMotion || !tilt
        ? undefined
        : { rotateX: tiltX, rotateY: tiltY, transformStyle: 'preserve-3d' as const };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={motionStyle}
            className={`group relative rounded-3xl border border-white/10 bg-gradient-to-b from-gray-900 to-black overflow-hidden transition-all duration-500 hover:border-[#2F9EEC]/30 hover:shadow-[0_25px_80px_-40px_rgba(47,158,236,0.5)] ${className}`}
        >
            {/* Spotlight Effect */}
            {spotlight && (
                <motion.div
                    className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100 z-0"
                    style={{
                        background: useMotionTemplate`
              radial-gradient(
                500px circle at ${mouseX}px ${mouseY}px,
                rgba(47, 158, 236, 0.08),
                transparent 70%
              )
            `,
                    }}
                />
            )}

            {/* Decorative gradient line at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F9EEC]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

            {/* Content wrapper to ensure relative z-index above spotlight */}
            <div className="relative z-10 h-full">
                {children}
            </div>
        </motion.div>
    );
};
