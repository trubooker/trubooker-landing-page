import { faqs } from "@/data/faqs";

export function HomeJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.trubooker.com/#org",
        name: "TruBooker",
        legalName: "Trubooker Ltd",
        url: "https://www.trubooker.com",
        logo: "https://www.trubooker.com/logo.png",
        email: "info@trubooker.com",
        sameAs: [
          "https://www.instagram.com/officialtrubooker/",
          "https://x.com/TruBookerApp",
        ],
      },
      {
        "@type": "WebSite",
        url: "https://www.trubooker.com",
        name: "TruBooker",
        publisher: { "@id": "https://www.trubooker.com/#org" },
      },
      {
        "@type": "MobileApplication",
        name: "TruBooker",
        operatingSystem: "ANDROID, iOS",
        applicationCategory: "TravelApplication",
        offers: { "@type": "Offer", price: "0", priceCurrency: "NGN" },
        installUrl: [
          "https://play.google.com/store/apps/details?id=com.trubooker.trubooker",
          "https://apps.apple.com/ng/app/trubooker/id6743930941",
        ],
        publisher: { "@id": "https://www.trubooker.com/#org" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}