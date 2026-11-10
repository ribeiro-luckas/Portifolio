import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return siteUrl
    ? {
        rules: { userAgent: "*", allow: "/" },
        sitemap: new URL("/sitemap.xml", siteUrl).href,
        host: siteUrl.origin,
      }
    : { rules: { userAgent: "*", disallow: "/" } };
}
