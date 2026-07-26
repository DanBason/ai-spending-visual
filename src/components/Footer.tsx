export function Footer() {
  return (
    <footer className="border-t border-hairline bg-surface-1 px-6 py-12 text-xs text-ink-3 sm:text-sm">
      <div className="mx-auto max-w-4xl space-y-3">
        <h2 className="font-display text-sm font-semibold text-ink-1 sm:text-base">Methodology</h2>
        <p>
          Capex figures use total company capital expenditure as the closest public proxy for AI
          investment; analysts estimate roughly 75% of 2026 spend is AI-specific. Microsoft's
          figures are calendar-year, converted from its fiscal-year reporting — a fiscal-year
          figure near $120B for 2026 appears in some sources. 2026 values are company guidance
          midpoints supplied as of mid-2026, not reported actuals, and are subject to revision.
        </p>
        <p>
          Data compiled July 2026 from public filings and financial press, including the
          Financial Times, CNBC, Goldman Sachs, and CreditSights. Megaproject and GDP-share
          figures are historical estimates, inflation-adjusted to 2025 dollars and annualized
          across each project's active period.
        </p>
        <p className="pt-2 text-ink-3">
          This page is a data visualization, not investment advice. Nothing here is a
          recommendation to buy, sell, or hold any security.
        </p>
      </div>
    </footer>
  );
}
