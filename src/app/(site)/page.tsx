import { ContentProvider } from "@/components/content/ContentProvider";
import { getContent } from "@/lib/server/content-repo";
import { Hero } from "@/components/sections/Hero";
import { Metrics } from "@/components/sections/Metrics";
import { Philosophy } from "@/components/sections/Philosophy";
import { IntelligenceLayers } from "@/components/sections/IntelligenceLayers";
import { Solutions } from "@/components/sections/Solutions";
import { Industries } from "@/components/sections/Industries";
import { Differentiators } from "@/components/sections/Differentiators";
import { Founder } from "@/components/sections/Founder";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { Insights } from "@/components/sections/Insights";
import { Global } from "@/components/sections/Global";
import { FinalCta } from "@/components/sections/FinalCta";

// Render per request so published edits go live for every visitor immediately.
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const content = await getContent();

  return (
    <ContentProvider initial={content}>
      <main id="main">
        <Hero />
        <Metrics />
        <Philosophy />
        <IntelligenceLayers />
        <Solutions />
        <Industries />
        <Differentiators />
        <Founder />
        <Team />
        <Testimonials />
        <Insights />
        <Global />
        <FinalCta />
      </main>
    </ContentProvider>
  );
}
