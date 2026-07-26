import { Suspense, lazy } from "react";
import { Hero } from "./components/Hero";
import { Debate } from "./components/Debate";
import { Footer } from "./components/Footer";

const SpendingCurve = lazy(() =>
  import("./components/SpendingCurve").then((m) => ({ default: m.SpendingCurve })),
);
const MegaprojectComparison = lazy(() =>
  import("./components/MegaprojectComparison").then((m) => ({ default: m.MegaprojectComparison })),
);
const MarketConcentration = lazy(() =>
  import("./components/MarketConcentration").then((m) => ({ default: m.MarketConcentration })),
);

function ChartFallback() {
  return <div className="min-h-[400px] bg-surface-1" aria-hidden="true" />;
}

function App() {
  return (
    <div className="bg-surface-0">
      <Hero />
      <Suspense fallback={<ChartFallback />}>
        <SpendingCurve />
      </Suspense>
      <Suspense fallback={<ChartFallback />}>
        <MegaprojectComparison />
      </Suspense>
      <Suspense fallback={<ChartFallback />}>
        <MarketConcentration />
      </Suspense>
      <Debate />
      <Footer />
    </div>
  );
}

export default App;
