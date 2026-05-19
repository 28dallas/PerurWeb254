import type { BlogPostDetail, Event, HomepageContent, Program, Resource, SiteSettings, TeamMember, Testimonial } from "./types";
import { siteImages } from "./site-images";

const rayImages = {
  solarTraining: "/images/rays/photo_2026-05-19_13-57-27.jpg",
  graduationWide: "/images/rays/photo_2026-05-19_13-57-30.jpg",
  graduationJoy: "/images/rays/photo_2026-05-19_13-57-34.jpg",
  graduationWalk: "/images/rays/photo_2026-05-19_13-57-40.jpg",
  communityGathering: "/images/rays/photo_2026-05-19_13-57-42 (2).jpg",
  leadership: "/images/rays/photo_2026-05-19_13-57-49.jpg"
};

export const fallbackHomepageData: HomepageContent = {
  heroEyebrow: "West Pokot, Kenya",
  heroTitle: "Empowering women, protecting children, and fostering a sustainable environment in West Pokot County, Kenya.",
  heroSubtitle: "",
  heroImage: { asset: { url: siteImages.hero }, alt: "Perur Rays of Hope community work" },
  visionTitle: "Vision",
  visionText: "A resilient and empowered community",
  missionTitle: "Mission",
  missionText: "Safe guarding children, empowering youths and women, and conserving the environment for resilient livelihoods.",
  impactTitle: "Impact at a Glance",
  impactSubtitle: "A snapshot of our reach across child protection, youth empowerment, women-led livelihoods, and environmental action.",
  impactStats: [
    { label: "Children supported", value: "1,500+" },
    { label: "Youth skilled (18+)", value: "620+" },
    { label: "Women in savings groups", value: "480+" },
    { label: "Trees planted", value: "35,000+" }
  ],
  storiesTitle: "Stories of Change",
  storiesSubtitle: "Voices from communities we serve.",
  successStory: "Voices from communities we serve.",
  ctaTitle: "Join us in building resilient livelihoods",
  ctaText: "Your support helps children thrive, youth gain skills, women grow enterprises, and communities adapt to climate risks.",
  ctaPrimaryLabel: "Donate Now",
  ctaPrimaryHref: "/donate",
  ctaSecondaryLabel: "Become a Partner",
  ctaSecondaryHref: "/get-involved",
  ctaImage: { asset: { url: siteImages.cta }, alt: "Community members participating in PRoH activities" }
};

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
    image: { asset: { url: siteImages.programs.women }, alt: "Women in a savings and training session" },
    fundingGoal: 10000,
    amountRaised: 6500
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
    image: { asset: { url: siteImages.programs.youth }, alt: "Youth vocational learning session" },
    fundingGoal: 15000,
    amountRaised: 3000
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

export const fallbackPosts: BlogPostDetail[] = [
  {
    _id: "post-1",
    title: "HER Lab West Pokot Graduation Celebrates Youth Skills",
    slug: { current: "her-lab-west-pokot-graduation-celebrates-youth-skills" },
    excerpt: "A celebration of young people gaining practical skills, confidence, and pathways toward dignified livelihoods.",
    category: "Youth Skills",
    publishedAt: "2026-05-19",
    author: { name: "PRoH Team" },
    featuredImage: { asset: { url: rayImages.graduationJoy }, alt: "HER Lab graduates celebrating" },
    body:
      "Perur Rays of Hope continues to support youth with practical learning opportunities that strengthen confidence, employability, and community leadership.\n\nThis placeholder story can later be replaced with the full graduation report, names, partner acknowledgements, and learner testimonies."
  },
  {
    _id: "post-2",
    title: "Solar PV Training Opens Clean Energy Pathways",
    slug: { current: "solar-pv-training-opens-clean-energy-pathways" },
    excerpt: "Hands-on solar installation training helps learners connect technical skills with local energy needs.",
    category: "Skills Training",
    publishedAt: "2026-05-18",
    author: { name: "PRoH Team" },
    featuredImage: { asset: { url: rayImages.solarTraining }, alt: "Solar PV installation training" },
    body:
      "Technical training is one way PRoH supports practical livelihoods for young people and community members.\n\nThis placeholder story can later include the training objectives, trainer details, participant numbers, and outcomes from the Solar PV installation program."
  },
  {
    _id: "post-3",
    title: "Entrepreneurship Training for Resilient Livelihoods",
    slug: { current: "entrepreneurship-training-for-resilient-livelihoods" },
    excerpt: "Business skills, mentorship, and practical planning help youth and women strengthen income opportunities.",
    category: "Livelihoods",
    publishedAt: "2026-05-17",
    author: { name: "PRoH Team" },
    featuredImage: { asset: { url: rayImages.graduationWalk }, alt: "Graduates walking at a community event" },
    body:
      "Entrepreneurship support helps participants move from ideas to practical plans, with attention to costing, customer care, savings, and market opportunities.\n\nThis placeholder can later be expanded with details from the training sessions and participant success stories."
  },
  {
    _id: "post-4",
    title: "Women and Youth Leading Community Change",
    slug: { current: "women-and-youth-leading-community-change" },
    excerpt: "Community gatherings create space for learning, leadership, and shared action across West Pokot.",
    category: "Women Empowerment",
    publishedAt: "2026-05-16",
    author: { name: "PRoH Team" },
    featuredImage: { asset: { url: rayImages.graduationWide }, alt: "Community graduation gathering" },
    body:
      "PRoH works with women, youth, children, and partners to build confidence and strengthen community-led solutions.\n\nThis placeholder can later include quotes, photos, and field notes from recent community engagement activities."
  },
  {
    _id: "post-5",
    title: "Safeguarding Children Through Community Action",
    slug: { current: "safeguarding-children-through-community-action" },
    excerpt: "Child protection depends on informed communities, trusted reporting pathways, and responsive local systems.",
    category: "Child Protection",
    publishedAt: "2026-05-15",
    author: { name: "PRoH Team" },
    featuredImage: { asset: { url: rayImages.communityGathering }, alt: "Community members gathered for a PRoH activity" },
    body:
      "Safeguarding remains central to PRoH's mission. Community awareness, caregiver support, and local coordination help children stay protected and supported.\n\nThis placeholder can later be replaced with a full safeguarding update or policy awareness story."
  },
  {
    _id: "post-6",
    title: "Conserving the Environment for Resilient Livelihoods",
    slug: { current: "conserving-the-environment-for-resilient-livelihoods" },
    excerpt: "Environmental conservation strengthens household resilience and protects the natural systems communities depend on.",
    category: "Environment",
    publishedAt: "2026-05-14",
    author: { name: "PRoH Team" },
    featuredImage: { asset: { url: rayImages.leadership }, alt: "PRoH community leadership moment" },
    body:
      "Environmental action is connected to livelihoods, education, and long-term community resilience.\n\nThis placeholder can later include tree planting updates, climate-smart practices, partner support, and community outcomes."
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
  { _id: "resource-1", title: "Annual Report 2025", category: "Annual Reports" },
  { _id: "resource-2", title: "Child Protection Policy", category: "Policies" },
  { _id: "resource-3", title: "Safeguarding Guidelines", category: "Guidelines" },
  { _id: "resource-6", title: "Organization Profile", category: "Organization" },
  { _id: "resource-7", title: "Partnership Brief", category: "Organization" },
  { _id: "resource-8", title: "Volunteer and Internship Guide", category: "Guidelines" },
  { _id: "resource-9", title: "Donation Information Sheet", category: "Donor Resources" },
  { _id: "resource-4", title: "Entrepreneurship Trainer Job Description", category: "Careers", fileUrl: "/jobs/entrepreneurship-trainer.pdf" },
  { _id: "resource-5", title: "Solar PV Installation Trainer Job Description", category: "Careers", fileUrl: "/jobs/solar-pv-installation-trainer.pdf" }
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
    facebook: "https://www.facebook.com/share/18huRdaCSr/",
    instagram: "https://www.instagram.com/perurrayofhope?igsh=MWRwc200ZXdrYnB1cQ==",
    linkedin: "",
    x: "https://x.com/PerurRayofHope"
  }
};
