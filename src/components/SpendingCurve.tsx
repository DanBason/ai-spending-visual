import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { TooltipContentProps, XAxisTickContentProps } from "recharts";
import { CAPEX_BY_YEAR, CAPEX_NOTE, COMPANIES } from "../data/capex";
import { formatBillions } from "../lib/format";
import { ScrollReveal } from "./ScrollReveal";

function ChartTooltip({ active, payload, label }: TooltipContentProps) {
  if (!active || !payload?.length) return null;
  const total = payload.reduce(
    (sum: number, entry) => sum + (typeof entry.value === "number" ? entry.value : 0),
    0,
  );
  return (
    <div className="border-2 border-outline bg-surface-2 px-4 py-3 text-sm shadow-[3px_3px_0_var(--color-outline)]">
      <p className="tabular mb-2 font-medium text-ink-0">
        {label} <span className="text-ink-3">·</span> total {formatBillions(total)}
      </p>
      <ul className="space-y-1">
        {[...payload].reverse().map((entry, index) => (
          <li key={index} className="flex items-center justify-between gap-6 text-ink-1">
            <span className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-block h-2 w-2 rounded-full"
                style={{ background: entry.color }}
              />
              {entry.name}
            </span>
            <span className="tabular">{formatBillions(typeof entry.value === "number" ? entry.value : 0)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function YearTick(props: XAxisTickContentProps) {
  const { x = 0, y = 0, payload } = props;
  const value = Number(payload?.value ?? 0);
  const isGuidance = value === 2026;
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        dy={16}
        textAnchor="middle"
        fontSize={12}
        fontFamily="var(--font-mono)"
        fill={isGuidance ? "var(--color-led)" : "var(--color-ink-2)"}
      >
        {value}
      </text>
      {isGuidance && (
        <text dy={30} textAnchor="middle" fontSize={8} letterSpacing="1.5px" fill="var(--color-led)">
          GUIDANCE
        </text>
      )}
    </g>
  );
}

export function SpendingCurve() {
  return (
    <section className="bg-surface-1 px-6 py-24 sm:py-32" aria-labelledby="spending-curve-heading">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 id="spending-curve-heading" className="font-display text-2xl font-semibold text-ink-0 sm:text-3xl">
            The spending curve
          </h2>
          <span aria-hidden="true" className="mt-3 block h-1.5 w-14 bg-led" />
          <p className="mt-4 max-w-2xl text-ink-1">
            Combined capex from Amazon, Microsoft, Alphabet, and Meta held roughly steady through
            the pandemic build-out, then broke sharply upward after ChatGPT's release: from{" "}
            <span className="tabular text-ink-0">$226B</span> in 2024 to{" "}
            <span className="tabular text-ink-0">$410B</span> in 2025 to a guided{" "}
            <span className="tabular text-ink-0">$705B</span> in 2026 — nearly triple in two years.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-12">
          <div
            role="img"
            aria-label="Stacked bar chart of hyperscaler capital expenditure by company, 2020 through 2026. Combined totals rose from $96 billion in 2020 to a guided $705 billion in 2026."
            className="h-[340px] w-full sm:h-[420px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CAPEX_BY_YEAR} margin={{ top: 8, right: 8, left: 0, bottom: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-hairline)" vertical={false} />
                <XAxis
                  dataKey="year"
                  axisLine={{ stroke: "var(--color-hairline)" }}
                  tickLine={false}
                  tick={YearTick}
                  height={40}
                />
                <YAxis
                  tickFormatter={(v: number) => `$${v}B`}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "var(--color-ink-3)", fontSize: 12, fontFamily: "var(--font-mono)" }}
                  width={48}
                />
                <Tooltip content={ChartTooltip} cursor={{ fill: "var(--color-surface-3)", opacity: 0.4 }} />
                {COMPANIES.map((company) => (
                  <Bar
                    key={company.key}
                    dataKey={company.key}
                    name={company.label}
                    stackId="capex"
                    fill={company.color}
                    stroke="var(--color-outline)"
                    strokeWidth={1}
                  >
                    {CAPEX_BY_YEAR.map((record) => (
                      <Cell key={record.year} fillOpacity={record.isGuidance ? 0.6 : 1} />
                    ))}
                  </Bar>
                ))}
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ScrollReveal>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {COMPANIES.map((company) => (
            <span key={company.key} className="flex items-center gap-2 text-sm text-ink-2">
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: company.color }} />
              {company.label}
            </span>
          ))}
        </div>

        <p className="mt-6 text-xs text-ink-3">{CAPEX_NOTE}</p>

        <table className="sr-only">
          <caption>Hyperscaler capital expenditure by company and year, billions USD</caption>
          <thead>
            <tr>
              <th scope="col">Year</th>
              {COMPANIES.map((c) => (
                <th key={c.key} scope="col">
                  {c.label}
                </th>
              ))}
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {CAPEX_BY_YEAR.map((record) => (
              <tr key={record.year}>
                <th scope="row">
                  {record.year}
                  {record.isGuidance ? " (guidance)" : ""}
                </th>
                <td>{formatBillions(record.amazon)}</td>
                <td>{formatBillions(record.microsoft)}</td>
                <td>{formatBillions(record.alphabet)}</td>
                <td>{formatBillions(record.meta)}</td>
                <td>{formatBillions(record.total)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
