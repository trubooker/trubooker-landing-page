import { notFound } from "next/navigation";
import { routes } from "@/data/routes";

export function generateStaticParams() {
  return routes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = routes.find((x) => x.slug === slug);
  if (!r) return {};
  return {
    title: `${r.from} to ${r.to} Bus  Book Tickets from ₦${r.fromPrice.toLocaleString()}`,
    description: `Compare buses from ${r.from} to ${r.to}. See prices, pickup points and departure times, book your seat and track your trip live on TruBooker.`,
    alternates: { canonical: `/routes/${r.slug}` },
  };
}

export default async function RoutePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = routes.find((x) => x.slug === slug);
  if (!r) notFound();

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.trubooker.com" },
      { "@type": "ListItem", position: 2, name: "Routes", item: "https://www.trubooker.com/routes" },
      { "@type": "ListItem", position: 3, name: `${r.from} to ${r.to}` },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <h1>{r.from} to {r.to} Bus Tickets</h1>
      <p>Travel time: about {r.duration}. Fares from ₦{r.fromPrice.toLocaleString()}.</p>
      <h2>Pickup points in {r.from}</h2>
      {/* real pickup parks */}
      <h2>How to book {r.from} to {r.to} on TruBooker</h2>
      {/* 3 steps + app buttons */}
      <h2>Frequently asked questions</h2>
      {/* route-specific FAQs */}
    </main>
  );
}