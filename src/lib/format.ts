const usdCompact = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  notation: "compact",
  maximumFractionDigits: 1,
});

const usdFull = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const plainInt = new Intl.NumberFormat("en-US");

/** Formats a billions-USD figure, e.g. 705 -> "$705B". */
export function formatBillions(value: number): string {
  return usdCompact.format(value * 1_000_000_000);
}

/** Formats a whole-dollar amount with full digit grouping, e.g. 1900000000 -> "$1,900,000,000". */
export function formatUsdFull(value: number): string {
  return usdFull.format(value);
}

export function formatInt(value: number): string {
  return plainInt.format(Math.round(value));
}

/** Formats a raw percentage number (e.g. 34.2), not a 0-1 fraction. */
export function formatPercent(value: number, fractionDigits = 1): string {
  const percent = new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  });
  return percent.format(value / 100);
}
