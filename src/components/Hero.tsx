import { useReducedMotion } from "../lib/useReducedMotion";
import { useLiveCounter } from "../lib/useLiveCounter";
import { formatUsdFull } from "../lib/format";
import { PERSPECTIVE_FACTS } from "../data/capex";

export function Hero() {
  const reducedMotion = useReducedMotion();
  const dollarsSinceOpen = useLiveCounter(PERSPECTIVE_FACTS.perSecond, reducedMotion);

  return (
    <section
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-surface-0 px-6 text-center"
      aria-label="Introduction"
    >
      <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0 opacity-[0.06]" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-3 bg-led" />

      <p className="tabular relative z-10 mb-6 text-xs tracking-[0.3em] text-ink-3 uppercase sm:text-sm">
        A data story · compiled July 2026
      </p>

      <h1 className="relative z-10 max-w-4xl font-display text-4xl leading-[1.05] font-semibold text-ink-0 italic sm:text-6xl md:text-7xl">
        The Great AI Buildout
      </h1>

      <p className="relative z-10 mt-6 max-w-xl text-base text-ink-1 sm:text-lg">
        Four companies are spending more on AI infrastructure this year than the Manhattan
        Project, Apollo, and the Interstate Highway System cost, combined. Is it visionary
        capital allocation, or the biggest bet in corporate history?
      </p>

      <div className="relative z-10 mt-12 flex flex-col items-center border-2 border-outline bg-surface-2 px-8 py-6 shadow-[6px_6px_0_var(--color-outline)]">
        <span className="text-xs tracking-[0.2em] text-ink-3 uppercase">
          Spent on hyperscaler AI capex since you opened this page
        </span>
        <span
          className="tabular mt-3 text-3xl font-medium text-led sm:text-5xl md:text-6xl"
          role="status"
          aria-live={reducedMotion ? "polite" : "off"}
        >
          {formatUsdFull(dollarsSinceOpen)}
        </span>
        <span className="tabular mt-2 text-xs text-ink-3 sm:text-sm">
          at a run rate of ${PERSPECTIVE_FACTS.perSecond.toLocaleString("en-US")}/second
        </span>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-ink-3"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <span className="h-8 w-px bg-ink-3" />
      </div>
    </section>
  );
}
