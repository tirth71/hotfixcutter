import { createFileRoute } from "@tanstack/react-router";

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
    <main className="fixed inset-0 bg-background">
      <iframe
        src="/tool/cutter.html"
        title="Hotfix Cutter"
        className="block h-[100dvh] w-full border-0"
        allow="camera; clipboard-write; fullscreen"
      />
    </main>
  );
}
