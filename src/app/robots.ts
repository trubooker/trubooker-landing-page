import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/account-delete", "/api/"] }],
    sitemap: "https://www.trubooker.com/sitemap.xml",
  };
}