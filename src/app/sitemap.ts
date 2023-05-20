import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://lecreateurjewel.com/",
      lastModified: new Date(),
    },
    {
      url: "https://www.lecreateurjewel.com/",
      lastModified: new Date(),
    },
  ];
}
