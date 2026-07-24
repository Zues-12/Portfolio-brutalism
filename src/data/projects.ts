export type Project = {
  number: string;
  title: string;
  category: "Platforms" | "Healthcare" | "Commerce" | "Community";
  services: string;
  domain: string;
  liveUrl?: string;
  slug: string;
  color: "blue" | "red" | "yellow" | "green" | "orange";
  hasDetails: boolean;
  summary: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "CareMD",
    category: "Healthcare",
    services: "Next.js / MongoDB / Telemedicine",
    domain: "thecaremd.com",
    liveUrl: "https://www.thecaremd.com/",
    slug: "caremd",
    color: "blue",
    hasDetails: true,
    summary:
      "A telemedicine platform that guides patients from condition selection through online consultation, treatment recommendations, and prescriptions.",
  },
  {
    number: "02",
    title: "RAK Mediation",
    category: "Platforms",
    services: "PERN / Custom CMS / RBAC",
    domain: "rak.arhamsoft.org",
    liveUrl: "https://rak.arhamsoft.org/",
    slug: "rak-mediation",
    color: "red",
    hasDetails: true,
    summary:
      "A government mediation platform with a custom CMS, more than 50 managed pages, eleven user types, and role-based administration.",
  },
  {
    number: "03",
    title: "Talentblocks",
    category: "Platforms",
    services: "Talent marketplace / Dynamic search",
    domain: "talentblocks.com",
    liveUrl: "https://talentblocks.com/",
    slug: "talentblocks",
    color: "yellow",
    hasDetails: true,
    summary:
      "A specialist marketplace with flexible hiring models, detailed skill ratings, and multi-dimensional talent search.",
  },
  {
    number: "04",
    title: "BidCaribbean",
    category: "Commerce",
    services: "Vehicle auctions / Marketplace",
    domain: "bidcaribbean.co",
    liveUrl: "https://bidcaribbean.co/",
    slug: "bidcaribbean",
    color: "green",
    hasDetails: true,
    summary:
      "An online vehicle auction experience connecting Caribbean buyers with verified inventory and delivery services.",
  },
  {
    number: "05",
    title: "Al-Mawrid",
    category: "Community",
    services: "Research / Publishing / E-commerce",
    domain: "al-mawrid.org",
    liveUrl: "https://www.al-mawrid.org/",
    slug: "al-mawrid",
    color: "blue",
    hasDetails: true,
    summary:
      "A multilingual research and education platform bringing courses, publications, media, events, and an online shop together.",
  },
  {
    number: "06",
    title: "Mutavaatir",
    category: "Community",
    services: "Digital publishing platform",
    domain: "mutavaatir.pk",
    liveUrl: "https://mutavaatir.pk/",
    slug: "mutavaatir",
    color: "orange",
    hasDetails: true,
    summary:
      "A focused digital publishing platform designed to make its growing body of content easier to access and explore.",
  },
  {
    number: "07",
    title: "Al-Mawrid Institute",
    category: "Community",
    services: "Education / Courses / Enrollment",
    domain: "almawridinstitute.org",
    liveUrl: "https://almawridinstitute.org/",
    slug: "al-mawrid-institute",
    color: "green",
    hasDetails: true,
    summary:
      "An education platform for live and self-study courses, enrollment, student sponsorships, and bilingual learning programs.",
  },
  {
    number: "08",
    title: "MedMind",
    category: "Healthcare",
    services: "Care programs / AI health platform",
    domain: "med-mind-next.vercel.app",
    liveUrl: "https://med-mind-next.vercel.app/",
    slug: "medmind",
    color: "red",
    hasDetails: true,
    summary:
      "A digital health product organizing remote patient monitoring, chronic care, medication, and clinical programs.",
  },
  {
    number: "09",
    title: "ValueConn",
    category: "Platforms",
    services: "Full-stack web application",
    domain: "valueconn.com",
    liveUrl: "https://valueconn.com/",
    slug: "valueconn",
    color: "yellow",
    hasDetails: true,
    summary:
      "A full-stack web platform centered on a secure, account-based product experience.",
  },
  {
    number: "10",
    title: "Staff Patrol",
    category: "Platforms",
    services: "Identity verification / Hiring",
    domain: "petrol.arhamsoft.org",
    liveUrl: "https://petrol.arhamsoft.org/",
    slug: "staff-patrol",
    color: "green",
    hasDetails: true,
    summary:
      "A domestic staff verification platform using identity checks, work history, and employer feedback to support safer hiring.",
  },
  {
    number: "11",
    title: "Uniwear",
    category: "Commerce",
    services: "E-commerce / Storefront",
    domain: "uniwear.arhamsoft.org",
    liveUrl: "https://uniwear.arhamsoft.org/",
    slug: "uniwear",
    color: "blue",
    hasDetails: true,
    summary:
      "A commerce storefront shaped around clear product discovery and a focused purchasing journey.",
  },
  {
    number: "12",
    title: "Rose AI",
    category: "Platforms",
    services: "Generative AI / Multi-service assistant",
    domain: "roseai.architected.solutions",
    liveUrl: "https://roseai.architected.solutions/",
    slug: "rose-ai",
    color: "orange",
    hasDetails: true,
    summary:
      "A multi-service AI interface that routes users into health, finance, and personal-assistant experiences.",
  },
  {
    number: "13",
    title: "Aalam Bibi",
    category: "Community",
    services: "Nonprofit / Education / Donations",
    domain: "aalambibi.org",
    liveUrl: "https://aalambibi.org/",
    slug: "aalam-bibi",
    color: "blue",
    hasDetails: true,
    summary:
      "A nonprofit platform presenting education, health, food, community programs, stories, volunteering, and donations.",
  },
  {
    number: "14",
    title: "JF Wholesales",
    category: "Commerce",
    services: "Wholesale commerce / Storefront",
    domain: "jfwholesales.com",
    liveUrl: "https://jfwholesales.com/",
    slug: "jf-wholesales",
    color: "red",
    hasDetails: true,
    summary:
      "A wholesale commerce experience providing a direct route from product browsing to purchase.",
  },
];
