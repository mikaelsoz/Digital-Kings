import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
    const [isPointer, setIsPointer] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smoother, more luxurious spring for the outer ring
    const ringSpring = { damping: 30, stiffness: 200, mass: 0.5 };
    const ringX = useSpring(cursorX, ringSpring);
    const ringY = useSpring(cursorY, ringSpring);

    // Faster spring for the inner dot
    const dotSpring = { damping: 50, stiffness: 500 };
    const dotX = useSpring(cursorX, dotSpring);
    const dotY = useSpring(cursorY, dotSpring);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            const target = e.target as HTMLElement;
            const computedCursor = window.getComputedStyle(target).cursor;
            setIsPointer(computedCursor === 'pointer' || target.tagName === 'A' || target.tagName === 'BUTTON');
        };

        const handleMouseEnter = () => setIsHidden(false);
        const handleMouseLeave = () => setIsHidden(true);

        window.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [cursorX, cursorY]);

    if (isHidden) return null;

    return (
        <>
            {/* Outer Ring */}
            <motion.div
                className="fixed pointer-events-none z-[99999] rounded-full border-2 border-[#2F9EEC]/60"
                style={{
                    width: isPointer ? 50 : 40,
                    height: isPointer ? 50 : 40,
                    x: ringX,
                    y: ringY,
                    translateX: isPointer ? -25 : -20,
                    translateY: isPointer ? -25 : -20,
                }}
                animate={{
                    scale: isPointer ? 1.2 : 1,
                    borderColor: isPointer ? 'rgba(47, 158, 236, 0.9)' : 'rgba(47, 158, 236, 0.4)',
                }}
                transition={{ duration: 0.2 }}
            />

            {/* Inner Dot */}
            <motion.div
                className="fixed pointer-events-none z-[99999] rounded-full bg-[#2F9EEC]"
                style={{
                    width: 8,
                    height: 8,
                    x: dotX,
                    y: dotY,
                    translateX: -4,
                    translateY: -4,
                }}
                animate={{
                    scale: isPointer ? 0 : 1,
                    opacity: isPointer ? 0 : 1,
                }}
                transition={{ duration: 0.15 }}
            />
        </>
    );
}
