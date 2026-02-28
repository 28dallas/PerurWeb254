import type { BlogPost, Event, Program, Resource, SiteSettings, TeamMember, Testimonial } from "./types";
import { siteImages } from "./site-images";

export const fallbackPrograms: Program[] = [
  {
    _id: "women-empowerment",
    title: "Women Empowerment",
    slug: { current: "women-empowerment" },
    description:
      "Economic inclusion, savings groups, and entrepreneurship training for women-led households.",
    activities: ["Village savings groups", "Micro-business coaching", "Leadership mentorship"],
    impactStats: [
      { label: "Women trained", value: "480+" },
      { label: "Savings groups", value: "42" }
    ],
    image: { asset: { url: siteImages.programs.women }, alt: "Women in a savings and training session" }
  },
  {
    _id: "youth-empowerment",
    title: "Youth Empowerment",
    slug: { current: "youth-empowerment" },
    description:
      "Skills development and market-linked opportunities for youth 18+ under stewardship values.",
    activities: ["Vocational skilling", "Digital literacy", "Job readiness workshops"],
    impactStats: [
      { label: "Youth skilled", value: "620+" },
      { label: "Internships linked", value: "110" }
    ],
    image: { asset: { url: siteImages.programs.youth }, alt: "Youth vocational learning session" }
  },
  {
    _id: "child-protection",
    title: "Child Protection",
    slug: { current: "child-protection" },
    description: "Safeguarding systems that keep children safe, supported, and in school.",
    activities: ["Case management", "Caregiver support", "School retention"],
    impactStats: [
      { label: "Children reached", value: "1,500+" },
      { label: "Protection committees", value: "25" }
    ],
    image: { asset: { url: siteImages.programs.child }, alt: "Children participating in a learning activity" }
  },
  {
    _id: "education",
    title: "Education",
    slug: { current: "education" },
    description: "Access to quality education through support services and community engagement.",
    activities: ["School supplies", "Mentorship", "Teacher-community forums"],
    impactStats: [
      { label: "Learners supported", value: "2,000+" },
      { label: "Schools engaged", value: "18" }
    ],
    image: { asset: { url: siteImages.programs.education }, alt: "School learning materials and students" }
  },
  {
    _id: "environmental-conservation",
    title: "Environmental Conservation",
    slug: { current: "environmental-conservation" },
    description:
      "Climate-smart practices and ecosystem restoration to build resilient livelihoods.",
    activities: ["Tree planting", "Water harvesting", "Sustainable farming training"],
    impactStats: [
      { label: "Trees planted", value: "35,000+" },
      { label: "Households trained", value: "900+" }
    ],
    image: { asset: { url: siteImages.programs.environment }, alt: "Tree planting and environmental restoration activity" }
  }
];

export const fallbackTeam: TeamMember[] = [
  {
    _id: "team-1",
    name: "Jane N. Cherono",
    role: "Executive Director",
    bio: "Leads strategy, governance, and strategic partnerships.",
    image: { asset: { url: siteImages.team.director }, alt: "Executive Director portrait" }
  },
  {
    _id: "team-2",
    name: "Peter K. Lotee",
    role: "Programs Manager",
    bio: "Oversees child protection, youth, and women empowerment portfolios.",
    image: { asset: { url: siteImages.team.manager }, alt: "Programs Manager portrait" }
  },
  {
    _id: "team-3",
    name: "Grace A. Chemutai",
    role: "Finance & Compliance Officer",
    bio: "Drives accountability, transparent reporting, and donor compliance.",
    image: { asset: { url: siteImages.team.finance }, alt: "Finance and Compliance Officer portrait" }
  }
];

export const fallbackPosts: BlogPost[] = [
  {
    _id: "post-1",
    title: "Perur Rays of Hope Marks World Soil Day",
    slug: { current: "perur-rays-of-hope-marks-world-soil-day" },
    excerpt: "PRoH joined local communities to raise awareness on soil conservation and sustainable land use.",
    category: "Child Protection",
    publishedAt: "2023-12-05",
    author: { name: "PRoH Team" },
    featuredImage: { asset: { url: siteImages.blog.child }, alt: "Community safeguarding discussion" }
  },
  {
    _id: "post-2",
    title: "Empowering Women Through Economic Skills",
    slug: { current: "empowering-women-through-economic-skills" },
    excerpt: "Women-led groups continue to grow savings and enterprise resilience through PRoH programming.",
    category: "Women Empowerment",
    publishedAt: "2024-11-18",
    author: { name: "PRoH Team" },
    featuredImage: { asset: { url: siteImages.blog.women }, alt: "Women discussing business opportunities" }
  },
  {
    _id: "post-3",
    title: "Greener futures: youth climate action initiatives",
    slug: { current: "youth-climate-action-initiatives" },
    excerpt: "Young leaders scale tree nurseries and climate-smart farming demonstrations.",
    category: "Environment",
    publishedAt: "2025-08-19",
    author: { name: "PRoH Team" },
    featuredImage: { asset: { url: siteImages.blog.environment }, alt: "Youth involved in conservation work" }
  }
];

export const fallbackEvents: Event[] = [
  {
    _id: "event-1",
    title: "Annual Community Impact Forum",
    slug: { current: "annual-community-impact-forum" },
    date: "2026-05-14T09:00:00.000Z",
    location: "Kapenguria, West Pokot",
    description: "Stakeholder forum on program outcomes, governance updates, and future commitments.",
    image: { asset: { url: siteImages.events.forum }, alt: "Community forum participants" }
  },
  {
    _id: "event-2",
    title: "Youth Skills Fair",
    slug: { current: "youth-skills-fair" },
    date: "2026-06-28T10:00:00.000Z",
    location: "Makutano, West Pokot",
    description: "Internship pathways, practical demos, and mentorship for local youth.",
    image: { asset: { url: siteImages.events.youth }, alt: "Youth skills fair participants" }
  }
];

export const fallbackResources: Resource[] = [
  { _id: "resource-1", title: "Annual Report 2025", category: "Annual Reports", fileUrl: "#" },
  { _id: "resource-2", title: "Child Protection Policy", category: "Policies", fileUrl: "#" },
  { _id: "resource-3", title: "Safeguarding Guidelines", category: "Guidelines", fileUrl: "#" }
];

export const fallbackTestimonials: Testimonial[] = [
  {
    _id: "t-1",
    name: "Mary C.",
    role: "Caregiver",
    quote: "Our children are safer and staying in school because the community now acts quickly."
  },
  {
    _id: "t-2",
    name: "Stephen L.",
    role: "Youth trainee",
    quote: "Skills training helped me secure income and support my family with confidence."
  }
];

export const fallbackSiteSettings: SiteSettings = {
  organizationName: "Perur Rays of Hope",
  email: "info@perurraysofhope.org",
  phone: "+254 724 578225",
  address: "P.O. Box 0-30600, Kapenguria, West Pokot County, Kenya",
  socialLinks: {
    facebook: "",
    instagram: "",
    linkedin: "",
    x: ""
  }
};
