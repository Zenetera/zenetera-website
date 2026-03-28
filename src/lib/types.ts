export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  tags: string[];
  coverImage: string;
}
