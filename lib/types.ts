export type Slug = { current: string };

export interface ImageAsset {
  _type?: string;
  asset?: {
    _ref?: string;
    _type?: string;
    url?: string;
  };
  alt?: string;
}

export interface ImpactStat {
  label: string;
  value: string;
}

export interface Program {
  _id: string;
  title: string;
  slug: Slug;
  description: string;
  activities?: string[];
  impactStats?: ImpactStat[];
  image?: ImageAsset;
  fundingGoal?: number;
  amountRaised?: number;
}

export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio?: string;
  image?: ImageAsset;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: Slug;
  excerpt?: string;
  category?: string;
  featuredImage?: ImageAsset;
  publishedAt?: string;
  author?: { name: string };
}

export interface BlogPostDetail extends BlogPost {
  body?: unknown;
  seoTitle?: string;
  seoDescription?: string;
}

export interface Event {
  _id: string;
  title: string;
  slug: Slug;
  date: string;
  location: string;
  description?: string;
  image?: ImageAsset;
}

export interface Resource {
  _id: string;
  title: string;
  category: string;
  fileUrl?: string;
}

export interface Testimonial {
  _id: string;
  name: string;
  role?: string;
  quote: string;
}

export interface SiteSettings {
  organizationName?: string;
  email?: string;
  phone?: string;
  address?: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    x?: string;
  };
}
