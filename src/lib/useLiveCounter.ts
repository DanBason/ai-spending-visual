import { useEffect, useRef, useState } from "react";

/**
 * Counts up from 0 at `perSecond` units/second, starting when the
 * component mounts. In reduced-motion mode, updates once per second
 * with a plain value swap instead of a smooth per-frame animation.
 */
export function useLiveCounter(perSecond: number, reducedMotion: boolean): number {
  const [value, setValue] = useState(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    startRef.current = performance.now();

    if (reducedMotion) {
      const interval = setInterval(() => {
        const elapsedSeconds = (performance.now() - (startRef.current ?? 0)) / 1000;
        setValue(elapsedSeconds * perSecond);
      }, 1000);
      return () => clearInterval(interval);
    }

    let frame: number;
    const tick = (now: number) => {
      const elapsedSeconds = (now - (startRef.current ?? now)) / 1000;
      setValue(elapsedSeconds * perSecond);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [perSecond, reducedMotion]);

  return value;
}
