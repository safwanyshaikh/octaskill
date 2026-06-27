"use client";

import { useEffect, useRef, useState } from "react";
import { useContent } from "@/components/content/ContentProvider";
import { loadContent } from "@/lib/content-store";
import { defaultContent } from "@/content/defaults";
import {
  sectionKeys,
  sectionLabels,
  type SectionKey,
  type SiteContent,
} from "@/lib/content-types";
import {
  AddButton,
  ImageField,
  ItemCard,
  NumberField,
  TextArea,
  TextField,
} from "@/components/admin/fields";

const uid = () => Math.random().toString(36).slice(2, 9);

export function AdminEditor() {
  const { publish, reset } = useContent();
  const [draft, setDraft] = useState<SiteContent>(defaultContent);
  const [active, setActive] = useState<SectionKey>("hero");
  const [saved, setSaved] = useState(false);
  const importRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setDraft(loadContent());
  }, []);

  // --- helpers -------------------------------------------------------------
  function patch<K extends SectionKey>(key: K, partial: Partial<SiteContent[K]>) {
    setDraft((d) => ({ ...d, [key]: { ...d[key], ...partial } }));
    setSaved(false);
  }

  function save() {
    publish(draft);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function exportJson() {
    const blob = new Blob([JSON.stringify(draft, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "workforce-content.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  function importJson(file: File | undefined) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        setDraft(JSON.parse(String(reader.result)));
        setSaved(false);
      } catch {
        alert("That file is not valid JSON.");
      }
    };
    reader.readAsText(file);
  }

  function resetAll() {
    if (!confirm("Reset all content to the built-in defaults?")) return;
    reset();
    setDraft(defaultContent);
  }

  // --- toolbar -------------------------------------------------------------
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-ink)]">
      <header className="sticky top-0 z-10 border-b border-[var(--color-grey-200)] bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-[80rem] flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div>
            <p className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.14em]">
              WORKFORCE · CONTENT STUDIO
            </p>
            <p className="text-xs text-[var(--color-muted)]">
              Edits save to this browser. Export JSON to publish for everyone.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="/"
              target="_blank"
              className="rounded-full border border-[var(--color-grey-200)] px-4 py-2 text-sm font-medium hover:border-[var(--color-gold)]"
            >
              View site ↗
            </a>
            <button
              onClick={() => importRef.current?.click()}
              className="rounded-full border border-[var(--color-grey-200)] px-4 py-2 text-sm font-medium hover:border-[var(--color-gold)]"
            >
              Import
            </button>
            <button
              onClick={exportJson}
              className="rounded-full border border-[var(--color-grey-200)] px-4 py-2 text-sm font-medium hover:border-[var(--color-gold)]"
            >
              Export JSON
            </button>
            <button
              onClick={resetAll}
              className="rounded-full border border-[var(--color-grey-200)] px-4 py-2 text-sm font-medium text-[var(--color-muted)] hover:border-red-400 hover:text-red-600"
            >
              Reset
            </button>
            <button
              onClick={save}
              className="rounded-full bg-[var(--color-gold)] px-5 py-2 text-sm font-semibold text-[var(--color-navy-900)] hover:bg-[var(--color-gold-soft)]"
            >
              {saved ? "Saved ✓" : "Save"}
            </button>
            <input
              ref={importRef}
              type="file"
              accept="application/json"
              className="hidden"
              onChange={(e) => importJson(e.target.files?.[0])}
            />
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[80rem] gap-8 px-6 py-8 lg:grid-cols-[16rem_1fr]">
        {/* Tabs */}
        <nav className="flex h-max flex-wrap gap-2 lg:sticky lg:top-24 lg:flex-col">
          {sectionKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                active === key
                  ? "bg-[var(--color-ink)] text-white"
                  : "text-[var(--color-muted)] hover:bg-[var(--color-surface)]"
              }`}
            >
              {sectionLabels[key]}
            </button>
          ))}
        </nav>

        {/* Form */}
        <div className="grid max-w-3xl gap-5">
          <h1 className="font-[family-name:var(--font-display)] text-2xl font-semibold">
            {sectionLabels[active]}
          </h1>
          {renderTab(active, draft, patch, setDraft)}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Per-section forms
// ---------------------------------------------------------------------------
function renderTab(
  key: SectionKey,
  d: SiteContent,
  patch: <K extends SectionKey>(k: K, p: Partial<SiteContent[K]>) => void,
  setDraft: React.Dispatch<React.SetStateAction<SiteContent>>,
) {
  switch (key) {
    case "hero":
      return (
        <>
          <TextField label="Eyebrow" value={d.hero.eyebrow} onChange={(v) => patch("hero", { eyebrow: v })} />
          <TextField label="Tagline" value={d.hero.tagline} onChange={(v) => patch("hero", { tagline: v })} />
          <TextArea label="Supporting line" value={d.hero.supporting} onChange={(v) => patch("hero", { supporting: v })} />
          <div className="grid gap-4 sm:grid-cols-2">
            <TextField label="Primary button" value={d.hero.primaryCta.label} onChange={(v) => patch("hero", { primaryCta: { ...d.hero.primaryCta, label: v } })} />
            <TextField label="Primary link" value={d.hero.primaryCta.href} onChange={(v) => patch("hero", { primaryCta: { ...d.hero.primaryCta, href: v } })} />
            <TextField label="Secondary button" value={d.hero.secondaryCta.label} onChange={(v) => patch("hero", { secondaryCta: { ...d.hero.secondaryCta, label: v } })} />
            <TextField label="Secondary link" value={d.hero.secondaryCta.href} onChange={(v) => patch("hero", { secondaryCta: { ...d.hero.secondaryCta, href: v } })} />
          </div>
        </>
      );

    case "metrics":
      return (
        <>
          {d.metrics.map((m, i) => (
            <ItemCard key={m.id} title={`Metric ${i + 1}`} onRemove={() => setDraft((s) => ({ ...s, metrics: s.metrics.filter((x) => x.id !== m.id) }))}>
              <TextField label="Label" value={m.label} onChange={(v) => setDraft((s) => ({ ...s, metrics: s.metrics.map((x) => x.id === m.id ? { ...x, label: v } : x) }))} />
              <div className="grid gap-4 sm:grid-cols-3">
                <NumberField label="Value" value={m.value} onChange={(v) => setDraft((s) => ({ ...s, metrics: s.metrics.map((x) => x.id === m.id ? { ...x, value: v } : x) }))} />
                <TextField label="Suffix" value={m.suffix ?? ""} onChange={(v) => setDraft((s) => ({ ...s, metrics: s.metrics.map((x) => x.id === m.id ? { ...x, suffix: v } : x) }))} />
                <TextField label="Static text (e.g. 24/7)" value={m.display ?? ""} onChange={(v) => setDraft((s) => ({ ...s, metrics: s.metrics.map((x) => x.id === m.id ? { ...x, display: v || undefined } : x) }))} />
              </div>
            </ItemCard>
          ))}
          <AddButton onClick={() => setDraft((s) => ({ ...s, metrics: [...s.metrics, { id: uid(), value: 0, suffix: "+", label: "New metric" }] }))}>+ Add metric</AddButton>
        </>
      );

    case "philosophy":
      return (
        <>
          <TextField label="Eyebrow" value={d.philosophy.eyebrow} onChange={(v) => patch("philosophy", { eyebrow: v })} />
          <TextField label="Lead" value={d.philosophy.lead} onChange={(v) => patch("philosophy", { lead: v })} />
          <TextArea label="Emphasis (muted)" value={d.philosophy.emphasis} onChange={(v) => patch("philosophy", { emphasis: v })} />
          <TextField label="Accent (gold)" value={d.philosophy.accent} onChange={(v) => patch("philosophy", { accent: v })} />
          <TextArea label="Body" value={d.philosophy.body} onChange={(v) => patch("philosophy", { body: v })} />
        </>
      );

    case "layers":
      return (
        <>
          <TextField label="Eyebrow" value={d.layers.eyebrow} onChange={(v) => patch("layers", { eyebrow: v })} />
          <TextField label="Heading" value={d.layers.heading} onChange={(v) => patch("layers", { heading: v })} />
          <TextArea label="Intro" value={d.layers.intro} onChange={(v) => patch("layers", { intro: v })} />
          {d.layers.items.map((it, i) => (
            <ItemCard key={it.id} title={`Layer ${i + 1}`} onRemove={() => setDraft((s) => ({ ...s, layers: { ...s.layers, items: s.layers.items.filter((x) => x.id !== it.id) } }))}>
              <div className="grid gap-4 sm:grid-cols-[6rem_1fr]">
                <TextField label="No." value={it.index} onChange={(v) => setDraft((s) => ({ ...s, layers: { ...s.layers, items: s.layers.items.map((x) => x.id === it.id ? { ...x, index: v } : x) } }))} />
                <TextField label="Title" value={it.title} onChange={(v) => setDraft((s) => ({ ...s, layers: { ...s.layers, items: s.layers.items.map((x) => x.id === it.id ? { ...x, title: v } : x) } }))} />
              </div>
              <TextArea label="Description" value={it.description} onChange={(v) => setDraft((s) => ({ ...s, layers: { ...s.layers, items: s.layers.items.map((x) => x.id === it.id ? { ...x, description: v } : x) } }))} />
            </ItemCard>
          ))}
          <AddButton onClick={() => setDraft((s) => ({ ...s, layers: { ...s.layers, items: [...s.layers.items, { id: uid(), index: String(s.layers.items.length + 1).padStart(2, "0"), title: "New layer", description: "" }] } }))}>+ Add layer</AddButton>
        </>
      );

    case "solutions":
    case "industries":
      return (
        <>
          <TextField label="Eyebrow" value={d[key].eyebrow} onChange={(v) => patch(key, { eyebrow: v } as never)} />
          <TextField label="Heading" value={d[key].heading} onChange={(v) => patch(key, { heading: v } as never)} />
          <TextArea label="Intro" value={d[key].intro} onChange={(v) => patch(key, { intro: v } as never)} />
          <ListEditor items={d[key].items} onChange={(items) => patch(key, { items } as never)} label="Item" />
        </>
      );

    case "differentiators":
      return (
        <>
          <TextField label="Eyebrow" value={d.differentiators.eyebrow} onChange={(v) => patch("differentiators", { eyebrow: v })} />
          <TextField label="Heading" value={d.differentiators.heading} onChange={(v) => patch("differentiators", { heading: v })} />
          {d.differentiators.items.map((it, i) => (
            <ItemCard key={it.id} title={`Point ${i + 1}`} onRemove={() => setDraft((s) => ({ ...s, differentiators: { ...s.differentiators, items: s.differentiators.items.filter((x) => x.id !== it.id) } }))}>
              <TextField label="Title" value={it.title} onChange={(v) => setDraft((s) => ({ ...s, differentiators: { ...s.differentiators, items: s.differentiators.items.map((x) => x.id === it.id ? { ...x, title: v } : x) } }))} />
              <TextField label="Description" value={it.description} onChange={(v) => setDraft((s) => ({ ...s, differentiators: { ...s.differentiators, items: s.differentiators.items.map((x) => x.id === it.id ? { ...x, description: v } : x) } }))} />
            </ItemCard>
          ))}
          <AddButton onClick={() => setDraft((s) => ({ ...s, differentiators: { ...s.differentiators, items: [...s.differentiators.items, { id: uid(), title: "New point", description: "" }] } }))}>+ Add point</AddButton>
        </>
      );

    case "founder":
      return (
        <>
          <TextField label="Eyebrow" value={d.founder.eyebrow} onChange={(v) => patch("founder", { eyebrow: v })} />
          <ImageField label="Founder photo" name={d.founder.name} value={d.founder.image} onChange={(v) => patch("founder", { image: v })} />
          <div className="grid gap-4 sm:grid-cols-2">
            <TextField label="Name" value={d.founder.name} onChange={(v) => patch("founder", { name: v })} />
            <TextField label="Title" value={d.founder.title} onChange={(v) => patch("founder", { title: v })} />
          </div>
          <TextArea label="Message" rows={6} value={d.founder.message} onChange={(v) => patch("founder", { message: v })} />
        </>
      );

    case "team":
      return (
        <>
          <TextField label="Eyebrow" value={d.team.eyebrow} onChange={(v) => patch("team", { eyebrow: v })} />
          <TextField label="Heading" value={d.team.heading} onChange={(v) => patch("team", { heading: v })} />
          <TextArea label="Intro" value={d.team.intro} onChange={(v) => patch("team", { intro: v })} />
          {d.team.members.map((m, i) => (
            <ItemCard key={m.id} title={`Member ${i + 1}`} onRemove={() => setDraft((s) => ({ ...s, team: { ...s.team, members: s.team.members.filter((x) => x.id !== m.id) } }))}>
              <ImageField label="Photo" name={m.name} value={m.image} onChange={(v) => setDraft((s) => ({ ...s, team: { ...s.team, members: s.team.members.map((x) => x.id === m.id ? { ...x, image: v } : x) } }))} />
              <div className="grid gap-4 sm:grid-cols-2">
                <TextField label="Name" value={m.name} onChange={(v) => setDraft((s) => ({ ...s, team: { ...s.team, members: s.team.members.map((x) => x.id === m.id ? { ...x, name: v } : x) } }))} />
                <TextField label="Role" value={m.role} onChange={(v) => setDraft((s) => ({ ...s, team: { ...s.team, members: s.team.members.map((x) => x.id === m.id ? { ...x, role: v } : x) } }))} />
              </div>
              <TextArea label="Bio" rows={2} value={m.bio ?? ""} onChange={(v) => setDraft((s) => ({ ...s, team: { ...s.team, members: s.team.members.map((x) => x.id === m.id ? { ...x, bio: v } : x) } }))} />
            </ItemCard>
          ))}
          <AddButton onClick={() => setDraft((s) => ({ ...s, team: { ...s.team, members: [...s.team.members, { id: uid(), name: "New member", role: "Role", bio: "", image: "" }] } }))}>+ Add member</AddButton>
        </>
      );

    case "testimonials":
      return (
        <>
          <TextField label="Eyebrow" value={d.testimonials.eyebrow} onChange={(v) => patch("testimonials", { eyebrow: v })} />
          <TextField label="Heading" value={d.testimonials.heading} onChange={(v) => patch("testimonials", { heading: v })} />
          {d.testimonials.items.map((it, i) => (
            <ItemCard key={it.id} title={`Quote ${i + 1}`} onRemove={() => setDraft((s) => ({ ...s, testimonials: { ...s.testimonials, items: s.testimonials.items.filter((x) => x.id !== it.id) } }))}>
              <TextArea label="Quote" value={it.quote} onChange={(v) => setDraft((s) => ({ ...s, testimonials: { ...s.testimonials, items: s.testimonials.items.map((x) => x.id === it.id ? { ...x, quote: v } : x) } }))} />
              <div className="grid gap-4 sm:grid-cols-2">
                <TextField label="Name / role" value={it.name} onChange={(v) => setDraft((s) => ({ ...s, testimonials: { ...s.testimonials, items: s.testimonials.items.map((x) => x.id === it.id ? { ...x, name: v } : x) } }))} />
                <TextField label="Company" value={it.company} onChange={(v) => setDraft((s) => ({ ...s, testimonials: { ...s.testimonials, items: s.testimonials.items.map((x) => x.id === it.id ? { ...x, company: v } : x) } }))} />
              </div>
            </ItemCard>
          ))}
          <AddButton onClick={() => setDraft((s) => ({ ...s, testimonials: { ...s.testimonials, items: [...s.testimonials.items, { id: uid(), quote: "", name: "", company: "" }] } }))}>+ Add quote</AddButton>
          <div className="mt-2">
            <ListEditor items={d.testimonials.logos} onChange={(logos) => patch("testimonials", { logos })} label="Logo name" />
          </div>
        </>
      );

    case "insights":
      return (
        <>
          <TextField label="Eyebrow" value={d.insights.eyebrow} onChange={(v) => patch("insights", { eyebrow: v })} />
          <TextField label="Heading" value={d.insights.heading} onChange={(v) => patch("insights", { heading: v })} />
          <TextArea label="Intro" value={d.insights.intro} onChange={(v) => patch("insights", { intro: v })} />
          {d.insights.items.map((it, i) => (
            <ItemCard key={it.id} title={`Article ${i + 1}`} onRemove={() => setDraft((s) => ({ ...s, insights: { ...s.insights, items: s.insights.items.filter((x) => x.id !== it.id) } }))}>
              <div className="grid gap-4 sm:grid-cols-[1fr_10rem]">
                <TextField label="Title" value={it.title} onChange={(v) => setDraft((s) => ({ ...s, insights: { ...s.insights, items: s.insights.items.map((x) => x.id === it.id ? { ...x, title: v } : x) } }))} />
                <TextField label="Date" value={it.date} onChange={(v) => setDraft((s) => ({ ...s, insights: { ...s.insights, items: s.insights.items.map((x) => x.id === it.id ? { ...x, date: v } : x) } }))} />
              </div>
              <TextArea label="Excerpt" value={it.excerpt} onChange={(v) => setDraft((s) => ({ ...s, insights: { ...s.insights, items: s.insights.items.map((x) => x.id === it.id ? { ...x, excerpt: v } : x) } }))} />
            </ItemCard>
          ))}
          <AddButton onClick={() => setDraft((s) => ({ ...s, insights: { ...s.insights, items: [...s.insights.items, { id: uid(), title: "New article", date: "", excerpt: "" }] } }))}>+ Add article</AddButton>
        </>
      );

    case "network":
      return (
        <>
          <TextField label="Eyebrow" value={d.network.eyebrow} onChange={(v) => patch("network", { eyebrow: v })} />
          <TextField label="Heading" value={d.network.heading} onChange={(v) => patch("network", { heading: v })} />
          <TextArea label="Body" value={d.network.body} onChange={(v) => patch("network", { body: v })} />
        </>
      );

    case "finalCta":
      return (
        <>
          <TextArea label="Heading" value={d.finalCta.heading} onChange={(v) => patch("finalCta", { heading: v })} />
          <div className="grid gap-4 sm:grid-cols-2">
            <TextField label="Primary button" value={d.finalCta.primaryCta.label} onChange={(v) => patch("finalCta", { primaryCta: { ...d.finalCta.primaryCta, label: v } })} />
            <TextField label="Primary link" value={d.finalCta.primaryCta.href} onChange={(v) => patch("finalCta", { primaryCta: { ...d.finalCta.primaryCta, href: v } })} />
            <TextField label="Secondary button" value={d.finalCta.secondaryCta.label} onChange={(v) => patch("finalCta", { secondaryCta: { ...d.finalCta.secondaryCta, label: v } })} />
            <TextField label="Secondary link" value={d.finalCta.secondaryCta.href} onChange={(v) => patch("finalCta", { secondaryCta: { ...d.finalCta.secondaryCta, href: v } })} />
          </div>
        </>
      );
  }
}

function ListEditor({
  items,
  onChange,
  label,
}: {
  items: string[];
  onChange: (items: string[]) => void;
  label: string;
}) {
  return (
    <div className="grid gap-3">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <input
            className="w-full rounded-lg border border-[var(--color-grey-200)] bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[var(--color-gold)]"
            value={item}
            onChange={(e) => onChange(items.map((x, j) => (j === i ? e.target.value : x)))}
          />
          <button
            type="button"
            onClick={() => onChange(items.filter((_, j) => j !== i))}
            className="shrink-0 rounded-md border border-[var(--color-grey-200)] px-3 py-2 text-xs text-[var(--color-muted)] hover:text-red-600"
          >
            ✕
          </button>
        </div>
      ))}
      <AddButton onClick={() => onChange([...items, ""])}>+ Add {label.toLowerCase()}</AddButton>
    </div>
  );
}
