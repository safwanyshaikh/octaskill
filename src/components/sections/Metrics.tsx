import { Container } from "@/components/primitives/Container";
import { Stat } from "@/components/primitives/Stat";
import { metrics } from "@/content/metrics";

/** Enterprise proof bar that sits directly beneath the hero. */
export function Metrics() {
  return (
    <section aria-label="WORKFORCE by the numbers" className="bg-[var(--color-bg)]">
      <Container>
        <dl className="grid grid-cols-2 gap-x-8 gap-y-12 border-b border-[var(--color-grey-200)] py-16 sm:grid-cols-3 lg:grid-cols-5">
          {metrics.map((metric) => (
            <Stat key={metric.label} {...metric} />
          ))}
        </dl>
      </Container>
    </section>
  );
}
