export interface MegaprojectRecord {
  id: string;
  label: string;
  period: string;
  perYearBillions: number;
  pctGdpPeak: number;
  isAiCapex: boolean;
  note?: string;
}

/**
 * Megaproject spending, annualized and inflation-adjusted to 2025 dollars,
 * compared against 2026 hyperscaler AI capex. Sources: public historical
 * estimates compiled July 2026.
 */
export const MEGAPROJECTS: MegaprojectRecord[] = [
  {
    id: "manhattan",
    label: "Manhattan Project",
    period: "1942–46",
    perYearBillions: 8,
    pctGdpPeak: 0.4,
    isAiCapex: false,
  },
  {
    id: "interstate",
    label: "Interstate Highway System",
    period: "1956–92",
    perYearBillions: 16,
    pctGdpPeak: 0.6,
    isAiCapex: false,
  },
  {
    id: "apollo",
    label: "Apollo Program",
    period: "1960–73",
    perYearBillions: 22,
    pctGdpPeak: 0.6,
    isAiCapex: false,
    note: "Average annual spend; peaked near $50B/yr.",
  },
  {
    id: "ai-capex-2026",
    label: "Hyperscaler AI Capex",
    period: "2026",
    perYearBillions: 705,
    pctGdpPeak: 2.3,
    isAiCapex: true,
    note: "Single year, four companies.",
  },
];

/**
 * US tech equipment & software investment reached 4.4% of GDP in 2025,
 * near the dot-com era peak — broader context than the megaproject
 * comparison above, which is capex-only.
 */
export const TECH_INVESTMENT_SHARE_OF_GDP_2025 = 4.4;

export const MEGAPROJECTS_COMBINED_INFLATION_ADJUSTED_TOTAL = {
  manhattan: 30, // billions USD, inflation-adjusted total
  apollo: 280,
  interstate: 550,
  get combined() {
    return this.manhattan + this.apollo + this.interstate;
  },
};
