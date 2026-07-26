import { useState } from "react";
import { Bar, BarChart, Cell, LabelList, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { MEGAPROJECTS } from "../data/megaprojects";
import { ScrollReveal } from "./ScrollReveal";

type ViewMode = "perYear" | "pctGdp";

const VIEWS: { key: ViewMode; label: string }[] = [
  { key: "perYear", label: "$ / year" },
  { key: "pctGdp", label: "% of GDP at peak" },
];

export function MegaprojectComparison() {
  const [view, setView] = useState<ViewMode>("perYear");

  const data = MEGAPROJECTS.map((project) => ({
    ...project,
    value: view === "perYear" ? project.perYearBillions : project.pctGdpPeak,
  }));

  return (
    <section className="bg-surface-0 px-6 py-24 sm:py-32" aria-labelledby="megaproject-heading">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 id="megaproject-heading" className="font-display text-2xl font-semibold text-ink-0 sm:text-3xl">
                Bigger than the Manhattan Project
              </h2>
              <span aria-hidden="true" className="mt-3 block h-1.5 w-14 bg-led" />
              <p className="mt-4 max-w-2xl text-ink-1">
                Measured against the megaprojects of the 20th century, annualized and adjusted to
                2025 dollars, one year of hyperscaler AI capex dwarfs them all — whether measured
                in dollars or as a share of the economy that funded them.
              </p>
            </div>
            <div
              role="group"
              aria-label="Chart view"
              className="flex shrink-0 gap-1 border-2 border-outline bg-surface-2 p-1"
            >
              {VIEWS.map((v) => (
                <button
                  key={v.key}
                  type="button"
                  onClick={() => setView(v.key)}
                  aria-pressed={view === v.key}
                  className={`px-3 py-1.5 text-xs font-medium transition-colors sm:text-sm ${
                    view === v.key ? "bg-led text-surface-2" : "text-ink-2 hover:text-ink-0"
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-12">
          <div
            role="img"
            aria-label={`Horizontal bar chart comparing ${
              view === "perYear" ? "annualized dollars per year" : "peak share of GDP"
            } across the Manhattan Project, the Interstate Highway System, the Apollo Program, and 2026 hyperscaler AI capex. AI capex leads every comparison.`}
            className="h-[280px] w-full sm:h-[320px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                layout="vertical"
                margin={{ top: 8, right: 48, left: 8, bottom: 8 }}
                barCategoryGap={20}
              >
                <XAxis
                  type="number"
                  tickFormatter={(v: number) => (view === "perYear" ? `$${v}B` : `${v}%`)}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "var(--color-ink-3)", fontSize: 12, fontFamily: "var(--font-mono)" }}
                />
                <YAxis
                  type="category"
                  dataKey="label"
                  axisLine={false}
                  tickLine={false}
                  width={150}
                  tick={{ fill: "var(--color-ink-1)", fontSize: 13 }}
                />
                <Bar dataKey="value" stroke="var(--color-outline)" strokeWidth={1}>
                  {data.map((project) => (
                    <Cell key={project.id} fill={project.isAiCapex ? "var(--color-led)" : "var(--color-ink-3)"} />
                  ))}
                  <LabelList
                    dataKey="value"
                    position="right"
                    formatter={(v: string | number | boolean | null | undefined) =>
                      view === "perYear" ? `$${v}B` : `${v}%`
                    }
                    className="tabular"
                    fill="var(--color-ink-1)"
                    fontSize={12}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ScrollReveal>

        <p className="mt-6 text-xs text-ink-3">
          Apollo Program figure reflects average annual spend across 1960–73; it peaked near $50B/yr.
          US tech equipment and software investment broadly reached 4.4% of GDP in 2025, near the
          dot-com era peak.
        </p>

        <table className="sr-only">
          <caption>Megaproject spending comparison, annualized and inflation-adjusted to 2025 dollars</caption>
          <thead>
            <tr>
              <th scope="col">Project</th>
              <th scope="col">Period</th>
              <th scope="col">$ per year (billions)</th>
              <th scope="col">% of GDP at peak</th>
            </tr>
          </thead>
          <tbody>
            {MEGAPROJECTS.map((project) => (
              <tr key={project.id}>
                <th scope="row">{project.label}</th>
                <td>{project.period}</td>
                <td>${project.perYearBillions}B</td>
                <td>{project.pctGdpPeak}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
