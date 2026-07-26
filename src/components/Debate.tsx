import { BEAR_CASE, BULL_CASE, DEBATE_CLOSING, type DebatePoint } from "../data/debate";
import { ScrollReveal } from "./ScrollReveal";

function DebateColumn({
  title,
  points,
  edgeColor,
}: {
  title: string;
  points: DebatePoint[];
  edgeColor: string;
}) {
  return (
    <div className="border-2 border-outline bg-surface-2 p-6 shadow-[4px_4px_0_var(--color-outline)] sm:p-8">
      <div className="flex items-center gap-3">
        <span aria-hidden="true" className="h-3 w-3 shrink-0" style={{ background: edgeColor }} />
        <h3 className="font-display text-lg font-semibold text-ink-0 sm:text-xl">{title}</h3>
      </div>
      <ul className="mt-5 space-y-4">
        {points.map((point) => (
          <li key={point.claim} className="text-sm leading-relaxed text-ink-1 sm:text-base">
            {point.claim}
            {point.source && <span className="ml-2 text-xs text-ink-3">— {point.source}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Debate() {
  return (
    <section className="bg-surface-0 px-6 py-24 sm:py-32" aria-labelledby="debate-heading">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 id="debate-heading" className="font-display text-2xl font-semibold text-ink-0 sm:text-3xl">
            The bubble debate
          </h2>
          <span aria-hidden="true" className="mt-3 block h-1.5 w-14 bg-led" />
          <p className="mt-4 max-w-2xl text-ink-1">
            Both readings of the same numbers are held by serious people. Neither is presented
            here as the answer.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <ScrollReveal>
            <DebateColumn title="Not a bubble" points={BULL_CASE} edgeColor="var(--color-bull-edge)" />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <DebateColumn title="Warning signs" points={BEAR_CASE} edgeColor="var(--color-bear-edge)" />
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.15}>
          <p className="mt-10 max-w-2xl text-sm text-ink-2 italic sm:text-base">{DEBATE_CLOSING}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
