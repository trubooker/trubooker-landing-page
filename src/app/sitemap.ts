import type { MetadataRoute } from "next";
import { routes } from "../data/routes"; // see step 7

const base = "https://www.trubooker.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/driver", "/contact", "/driver/policy", "/routes"].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.7,
  }));
  const routePages = routes.map((r) => ({
    url: `${base}/routes/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));
  return [...staticPages, ...routePages];
}