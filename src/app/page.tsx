import { Hero } from "@/components/sections/Hero";
import { Challenge } from "@/components/sections/Challenge";
import { WhyWorkforce } from "@/components/sections/WhyWorkforce";
import { Capabilities } from "@/components/sections/Capabilities";
import { Industries } from "@/components/sections/Industries";
import { EnterpriseValue } from "@/components/sections/EnterpriseValue";
import { Global } from "@/components/sections/Global";
import { Philosophy } from "@/components/sections/Philosophy";
import { FinalCta } from "@/components/sections/FinalCta";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Challenge />
      <WhyWorkforce />
      <Capabilities />
      <Industries />
      <EnterpriseValue />
      <Global />
      <Philosophy />
      <FinalCta />
    </main>
  );
}
