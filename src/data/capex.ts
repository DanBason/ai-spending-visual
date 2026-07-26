import type { CapexRecord, CompanyMeta } from "./types";

/**
 * Hyperscaler capital expenditure by calendar year, billions USD.
 * Total capex is used as the closest public proxy for AI investment;
 * roughly 75% of 2026 spend is estimated to be AI-specific.
 * 2026 values are company guidance midpoints, not actuals — see isGuidance.
 * Compiled July 2026 from public filings and financial press (FT, CNBC,
 * Goldman Sachs, CreditSights).
 */
export const CAPEX_BY_YEAR: CapexRecord[] = [
  { year: 2020, amazon: 40, microsoft: 18, alphabet: 22, meta: 16, total: 96, isGuidance: false },
  { year: 2021, amazon: 61, microsoft: 21, alphabet: 25, meta: 19, total: 126, isGuidance: false },
  { year: 2022, amazon: 64, microsoft: 25, alphabet: 32, meta: 32, total: 153, isGuidance: false },
  { year: 2023, amazon: 53, microsoft: 32, alphabet: 32, meta: 28, total: 145, isGuidance: false },
  { year: 2024, amazon: 83, microsoft: 51, alphabet: 53, meta: 39, total: 226, isGuidance: false },
  { year: 2025, amazon: 125, microsoft: 129, alphabet: 85, meta: 71, total: 410, isGuidance: false },
  { year: 2026, amazon: 200, microsoft: 190, alphabet: 180, meta: 135, total: 705, isGuidance: true },
];

export const COMPANIES: CompanyMeta[] = [
  { key: "amazon", label: "Amazon", color: "var(--color-amazon)" },
  { key: "microsoft", label: "Microsoft", color: "var(--color-microsoft)" },
  { key: "alphabet", label: "Alphabet", color: "var(--color-alphabet)" },
  { key: "meta", label: "Meta", color: "var(--color-meta)" },
];

export const CAPEX_NOTE =
  "2026 figures are company guidance midpoints, not reported actuals. Meta later raised guidance toward $145B; Microsoft's figure is calendar-year (a fiscal-year figure of roughly $120B appears in some sources).";

/**
 * Perspective facts for the hero count-up and supporting copy.
 * All figures for the 2026 single-year run rate of $705B/yr.
 */
export const PERSPECTIVE_FACTS = {
  perSecond: 22_000,
  perDay: 1.9, // billions USD
  annualTotal: 705, // billions USD, 2026 guidance
  vsMegaprojectsCombined: 860, // billions USD, inflation-adjusted total of Manhattan + Apollo + Interstate combined
  gdpComparison: "roughly the GDP of Argentina",
  goldmanFiveYearCapex: 5.3, // trillions USD, FY2025-FY2030 projected combined hyperscaler capex
  analystRunRateBy2027: 1, // trillions USD/yr
  capitalIntensityLow: 45, // % of revenue
  capitalIntensityHigh: 57, // % of revenue
};
