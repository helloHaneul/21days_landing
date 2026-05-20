import type {MetadataRoute} from "next";
import {SITE_URL} from "@/lib/site";

const routes = [
  "",
  "/ko",
  "/en",
  "/ko/faq",
  "/en/faq",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: route.includes("/faq") ? "monthly" : "weekly",
    priority: route === "" ? 1 : route.includes("/faq") ? 0.6 : 0.8,
  }));
}
