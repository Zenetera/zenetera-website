import { Metadata } from "next";

const BASE_URL = "https://zenetera.co.uk";
const SITE_NAME = "Zenetera ITC";

interface BuildMetadataArgs {
  title: string;
  description: string;
  path: string;
}

export function buildMetadata({
  title,
  description,
  path,
}: BuildMetadataArgs): Metadata {
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
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
