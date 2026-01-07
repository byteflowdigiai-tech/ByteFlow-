import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

interface CounterProps {
    value: string;
    duration?: number;
    delay?: number;
}

export default function Counter({ value, duration = 2, delay = 0 }: CounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    // Extract number and suffix/prefix
    const numericPart = value.match(/\d+/);
    const target = numericPart ? parseInt(numericPart[0]) : 0;

    // Safe way to get prefix and suffix
    const prefix = value.substring(0, value.indexOf(numericPart?.[0] || ""));
    const suffix = value.substring(value.indexOf(numericPart?.[0] || "") + (numericPart?.[0].length || 0));

    useEffect(() => {
        if (isInView) {
            const timeout = setTimeout(() => {
                const controls = animate(0, target, {
                    duration: duration,
                    ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for smooth finish
                    onUpdate(val) {
                        setCount(Math.round(val));
                    },
                });
                return () => controls.stop();
            }, delay * 1000);
            return () => clearTimeout(timeout);
        }
    }, [isInView, target, duration, delay]);

    return (
        <span ref={ref} className="tabular-nums">
            {prefix}{count}{suffix}
        </span>
    );
}
