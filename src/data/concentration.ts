export interface ConcentrationRecord {
  year: number;
  mag7SharePct: number;
  /** True for years interpolated from published anchor points rather than directly reported. */
  isInterpolated: boolean;
}

/**
 * Magnificent 7 share of S&P 500 market capitalization, approximate
 * year-end values. 2016–2021 interpolated from published anchors.
 * Compiled July 2026.
 */
export const MAG7_SHARE: ConcentrationRecord[] = [
  { year: 2015, mag7SharePct: 12.4, isInterpolated: false },
  { year: 2016, mag7SharePct: 13, isInterpolated: true },
  { year: 2017, mag7SharePct: 15, isInterpolated: true },
  { year: 2018, mag7SharePct: 16, isInterpolated: true },
  { year: 2019, mag7SharePct: 18, isInterpolated: true },
  { year: 2020, mag7SharePct: 23, isInterpolated: true },
  { year: 2021, mag7SharePct: 25, isInterpolated: true },
  { year: 2022, mag7SharePct: 21.6, isInterpolated: false },
  { year: 2023, mag7SharePct: 30, isInterpolated: false },
  { year: 2024, mag7SharePct: 33, isInterpolated: false },
  { year: 2025, mag7SharePct: 35, isInterpolated: false },
  { year: 2026, mag7SharePct: 34, isInterpolated: false },
];

export const DOT_COM_TOP10_PEAK_PCT = 27;

export const CONCENTRATION_CONTEXT = {
  top10ShareJuly2026: 38,
  mag7MarketCapTrillions: 23,
  mag7ShareOfIndexEconomicProfitPct: 70,
  mag7Share2026EarningsGrowthPct: 46,
};
