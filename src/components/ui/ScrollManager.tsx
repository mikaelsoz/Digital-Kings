import { ReactLenis } from '@studio-freight/react-lenis';

interface ScrollManagerProps {
    children: React.ReactNode;
}

export function ScrollManager({ children }: ScrollManagerProps) {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
            {children}
        </ReactLenis>
    );
}
