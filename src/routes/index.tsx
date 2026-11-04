import { createFileRoute } from "@tanstack/react-router";
import { ImageIcon, Box, SlidersHorizontal, Scissors } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hotfix Cutter — 3D Workflow" },
      { name: "description", content: "Mobile-friendly hotfix cutter with 3D machine preview and gallery upload." },
      { property: "og:title", content: "Hotfix Cutter — 3D Workflow" },
      { property: "og:description", content: "Mobile-friendly hotfix cutter with 3D machine preview and gallery upload." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      {/* Hero */}
      <section className="mx-auto w-full max-w-3xl px-4 pt-10 pb-6 sm:pt-14">
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-primary">
            <Scissors className="h-3.5 w-3.5" aria-hidden="true" />
            Hotfix Cutter
          </span>
        </div>
        <h1 className="mt-4 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Cut hotfix patterns with precision
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
          Trace your design, preview the machine path in 3D, and send clean cutlines to the cutter — right from your phone.
        </p>
      </section>

      {/* Tool */}
      <section className="mx-auto w-full max-w-3xl px-4 pb-12">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Cutter workspace
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
              Ready
            </span>
          </div>
          <iframe
            src="/tool/cutter.html"
            title="Hotfix Cutter"
            className="block h-[80dvh] min-h-[520px] w-full border-0 sm:h-[720px]"
            allow="camera; clipboard-write; fullscreen"
          />
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-secondary/50">
        <div className="mx-auto w-full max-w-3xl px-4 py-12">
          <h2 className="text-center text-xl font-semibold tracking-tight sm:text-2xl">
            Everything in one place
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: ImageIcon,
                title: "Gallery upload",
                text: "Pick a pattern photo straight from your gallery or camera and trace it in seconds.",
              },
              {
                icon: Box,
                title: "3D machine preview",
                text: "Watch the cutting path play out on a 3D machine before anything touches the table.",
              },
              {
                icon: SlidersHorizontal,
                title: "Cut controls",
                text: "Tune radius, speed and merge distance, then run or stop the cut with one tap.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-3 text-sm font-semibold">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-center px-4 py-6">
          <p className="text-xs text-muted-foreground">Hotfix Cutter · 3D workflow tool</p>
        </div>
      </footer>
    </main>
  );
}
