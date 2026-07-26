import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceDot,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { TooltipContentProps } from "recharts";
import { CONCENTRATION_CONTEXT, DOT_COM_TOP10_PEAK_PCT, MAG7_SHARE } from "../data/concentration";
import { formatPercent } from "../lib/format";
import { ScrollReveal } from "./ScrollReveal";

function ChartTooltip({ active, payload, label }: TooltipContentProps) {
  if (!active || !payload?.length) return null;
  const value = payload[0]?.value;
  return (
    <div className="border-2 border-outline bg-surface-2 px-3 py-2 text-sm shadow-[3px_3px_0_var(--color-outline)]">
      <p className="tabular text-ink-0">
        {label}: <span className="text-led">{typeof value === "number" ? formatPercent(value) : ""}</span>
      </p>
    </div>
  );
}

export function MarketConcentration() {
  const point2022 = MAG7_SHARE.find((d) => d.year === 2022);
  const point2023 = MAG7_SHARE.find((d) => d.year === 2023);

  return (
    <section className="bg-surface-1 px-6 py-24 sm:py-32" aria-labelledby="concentration-heading">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 id="concentration-heading" className="font-display text-2xl font-semibold text-ink-0 sm:text-3xl">
            Market concentration
          </h2>
          <span aria-hidden="true" className="mt-3 block h-1.5 w-14 bg-led" />
          <p className="mt-4 max-w-2xl text-ink-1">
            The spending is concentrated in a handful of companies — and so is the market's bet on
            them. The Magnificent 7's share of S&amp;P 500 market cap dipped in the 2022 drawdown,
            then crossed 30% in 2023 and has stayed above the dot-com era top-10 peak ever since.
            As of July 2026, the Mag 7 are worth a combined{" "}
            <span className="tabular text-ink-0">${CONCENTRATION_CONTEXT.mag7MarketCapTrillions}T</span>, and the
            top 10 S&amp;P 500 companies make up{" "}
            <span className="tabular text-ink-0">{CONCENTRATION_CONTEXT.top10ShareJuly2026}%</span> of the index.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-12">
          <div
            role="img"
            aria-label={`Line chart of Magnificent 7 share of S&P 500 market cap from 2015 to 2026, rising from 12.4% to a peak of 35% in 2025, before easing to 34% in 2026. A dashed reference line marks the dot-com era top-10 peak of ${DOT_COM_TOP10_PEAK_PCT}%, crossed in 2023.`}
            className="h-[300px] w-full sm:h-[360px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MAG7_SHARE} margin={{ top: 24, right: 16, left: 0, bottom: 8 }}>
                <defs>
                  <linearGradient id="mag7Fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-led)" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="var(--color-led)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-hairline)" vertical={false} />
                <XAxis
                  dataKey="year"
                  axisLine={{ stroke: "var(--color-hairline)" }}
                  tickLine={false}
                  tick={{ fill: "var(--color-ink-3)", fontSize: 11, fontFamily: "var(--font-mono)" }}
                  interval={1}
                />
                <YAxis
                  tickFormatter={(v: number) => `${v}%`}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "var(--color-ink-3)", fontSize: 12, fontFamily: "var(--font-mono)" }}
                  width={40}
                  domain={[0, 40]}
                />
                <Tooltip content={ChartTooltip} cursor={{ stroke: "var(--color-ink-3)", strokeDasharray: "3 3" }} />
                <ReferenceLine
                  y={DOT_COM_TOP10_PEAK_PCT}
                  stroke="var(--color-signal)"
                  strokeDasharray="5 5"
                  label={{
                    value: `Dot-com top-10 peak (${DOT_COM_TOP10_PEAK_PCT}%)`,
                    position: "insideTopLeft",
                    fill: "var(--color-signal)",
                    fontSize: 11,
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="mag7SharePct"
                  name="Mag 7 share"
                  stroke="var(--color-led)"
                  strokeWidth={2}
                  fill="url(#mag7Fill)"
                />
                {point2022 && (
                  <ReferenceDot
                    x={point2022.year}
                    y={point2022.mag7SharePct}
                    r={4}
                    fill="var(--color-surface-1)"
                    stroke="var(--color-led)"
                    strokeWidth={2}
                    label={{ value: "2022 drawdown", position: "bottom", fill: "var(--color-ink-2)", fontSize: 11 }}
                  />
                )}
                {point2023 && (
                  <ReferenceDot
                    x={point2023.year}
                    y={point2023.mag7SharePct}
                    r={4}
                    fill="var(--color-surface-1)"
                    stroke="var(--color-led)"
                    strokeWidth={2}
                    label={{ value: "Crosses 30%", position: "top", fill: "var(--color-ink-2)", fontSize: 11 }}
                  />
                )}
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </ScrollReveal>

        <p className="mt-6 text-xs text-ink-3">
          2016–2021 values interpolated from published anchor points. The Mag 7 generate roughly{" "}
          {CONCENTRATION_CONTEXT.mag7ShareOfIndexEconomicProfitPct}% of S&amp;P 500 economic profit and are
          projected to drive roughly {CONCENTRATION_CONTEXT.mag7Share2026EarningsGrowthPct}% of 2026 index
          earnings growth.
        </p>

        <table className="sr-only">
          <caption>Magnificent 7 share of S&amp;P 500 market capitalization by year</caption>
          <thead>
            <tr>
              <th scope="col">Year</th>
              <th scope="col">Mag 7 share</th>
            </tr>
          </thead>
          <tbody>
            {MAG7_SHARE.map((record) => (
              <tr key={record.year}>
                <th scope="row">{record.year}</th>
                <td>
                  {record.mag7SharePct}%{record.isInterpolated ? " (interpolated)" : ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
