/** Enterprise proof metrics shown beneath the hero. */

export type Metric = {
  value?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  display?: string;
  label: string;
};

export const metrics: Metric[] = [
  { value: 45, suffix: "+", label: "Countries Presence" },
  { value: 2.4, decimals: 1, suffix: "M+", label: "Verified Human Intelligence" },
  { value: 1250, prefix: "", suffix: "+", label: "Enterprise Partners" },
  { value: 96.7, decimals: 1, suffix: "%", label: "Deployment Assurance" },
  { display: "24/7", label: "Intelligence Network" },
];
