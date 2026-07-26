export interface DebatePoint {
  claim: string;
  source?: string;
}

export const BULL_CASE: DebatePoint[] = [
  {
    claim:
      "Funded largely by operating cash flow, not debt or hype.",
    source: "Goldman Sachs",
  },
  {
    claim: "Valuations remain far below dot-com era multiples.",
  },
  {
    claim:
      "Real revenue stands behind the spend: AWS is at roughly a $142B annualized run rate, and Google Cloud's backlog is around $460B.",
  },
  {
    claim:
      "\"Capacity is getting monetized as fast as we install it.\"",
    source: "Amazon CEO",
  },
  {
    claim: "The Magnificent 7 earn roughly 70% of S&P 500 economic profit.",
  },
];

export const BEAR_CASE: DebatePoint[] = [
  {
    claim:
      "AI-specific revenues remain a small fraction of the infrastructure spend behind them.",
  },
  {
    claim:
      "Hyperscalers are increasingly issuing debt, including Alphabet's 100-year bonds, as free cash flow compresses.",
  },
  {
    claim:
      "Models show negative free cash flow for Meta through 2028 — \"somewhat shocking… likely what we eventually see for all companies.\"",
    source: "Barclays",
  },
  {
    claim:
      "GPUs depreciate in roughly 3–5 years versus decades for fiber or highways, so the spend must recur rather than compound.",
  },
  {
    claim:
      "Concentration and tech-investment share of GDP now exceed dot-com era levels.",
  },
  {
    claim:
      "An August 2025 selloff followed an MIT report questioning measurable AI returns.",
  },
];

export const DEBATE_CLOSING =
  "The open question isn't whether the money is being spent — it's the ratio of that investment to AI-specific returns.";
