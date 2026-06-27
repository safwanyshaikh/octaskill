import { Hero } from "@/components/sections/Hero";
import { Metrics } from "@/components/sections/Metrics";
import { Philosophy } from "@/components/sections/Philosophy";
import { IntelligenceLayers } from "@/components/sections/IntelligenceLayers";
import { Solutions } from "@/components/sections/Solutions";
import { Industries } from "@/components/sections/Industries";
import { Differentiators } from "@/components/sections/Differentiators";
import { Global } from "@/components/sections/Global";
import { FinalCta } from "@/components/sections/FinalCta";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Metrics />
      <Philosophy />
      <IntelligenceLayers />
      <Solutions />
      <Industries />
      <Differentiators />
      <Global />
      <FinalCta />
    </main>
  );
}
