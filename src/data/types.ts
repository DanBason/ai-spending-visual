/** A single company's capex figure for one calendar year, in billions USD. */
export interface CapexRecord {
  year: number;
  amazon: number;
  microsoft: number;
  alphabet: number;
  meta: number;
  total: number;
  /** True for years that are company guidance midpoints, not reported actuals. */
  isGuidance: boolean;
}

export type CompanyKey = "amazon" | "microsoft" | "alphabet" | "meta";

export interface CompanyMeta {
  key: CompanyKey;
  label: string;
  color: string;
}
