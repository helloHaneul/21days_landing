import type {MetadataRoute} from "next";
import {SITE_URL} from "@/lib/site";

const routes = [
  "",
  "/ko",
  "/en",
  "/ko/faq",
  "/en/faq",
  "/ko/support",
  "/en/support",
  "/account-deletion",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency:
      route.includes("/faq") || route.includes("/support") || route.includes("account-deletion")
        ? "monthly"
        : "weekly",
    priority:
      route === ""
        ? 1
        : route.includes("/faq") || route.includes("/support") || route.includes("account-deletion")
          ? 0.6
          : 0.8,
  }));
}
