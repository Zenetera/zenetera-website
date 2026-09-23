import { Metadata } from "next";

const BASE_URL = "https://www.zenetera.com";
const SITE_NAME = "ZENETERA ITC";

interface BuildMetadataArgs {
  title: string;
  description: string;
  path: string;
  /** Share image, as a path under /public or an absolute URL. */
  image?: string;
}

export function buildMetadata({ title, description, path, image }: BuildMetadataArgs): Metadata {
  const url = `${BASE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_GB",
      type: "website",
      ...(image && { images: [{ url: image }] }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image && { images: [image] }),
    },
  };
}
