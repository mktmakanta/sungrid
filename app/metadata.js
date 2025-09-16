const siteUrl = "https://www.sungridsolution.com";

const siteMetadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SunGrid Solutions | Solar & Electrical Services",
    template: "%s | SunGrid Solutions",
  },
  description:
    "Power your home and business with reliable, sustainable energy solutions. Sungrid delivers innovative solar and electrical services to create a cleaner, greener future.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "SunGrid Solutions | Solar & Electrical Services",
    description:
      "Reliable solar and electrical installation services in Nigeria. Build a sustainable future with SunGrid.",
    url: siteUrl,
    siteName: "SunGrid Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SunGrid Solar Installation",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SunGrid Solutions | Solar & Electrical Services",
    description:
      "Reliable solar and electrical installation services in Nigeria. Build a sustainable future with SunGrid.",
    images: ["/og-image.jpg"],
    // creator: "@sungrid",
  },
  other: {
    "linkedin:creator":
      "https://www.linkedin.com/company/sungrid-solutions-nig-ltd/",
    "tiktok:creator":
      "https://www.tiktok.com/@sungrid.solutions?_t=ZS-8zjiEP1clGb&_r=1",
    "whatsapp:contact": "https://wa.me/2348140818850",
    "facebook:page": "https://www.facebook.com/sungridsolutions",
  },

  // Individual pages
  about: {
    title: "About SunGrid Solutions | Trusted Solar Experts in Nigeria",
    description:
      "Learn about SunGrid Solutions, Nigeria’s trusted solar and electrical experts. We provide reliable, sustainable energy solutions for families and businesses.",
    openGraph: {
      title: "About Us | SunGrid Solutions",
      description:
        "Learn more about SunGrid Solutions, Nigeria’s trusted provider of solar and electrical installation services. Discover our mission to power homes, businesses, and communities with clean, sustainable energy. Available in Minna, lokoja, Abuja and accross 36 states in Nigeria",
      url: `${siteUrl}/about`,
      images: [
        {
          url: "/og-about.jpg",
          width: 1200,
          height: 630,
          alt: "About SunGrid Solutions",
        },
      ],
    },
  },

  projects: {
    title: "Our Solar Projects | SunGrid Solutions",
    description:
      "Explore completed solar and electrical projects by SunGrid Solutions. Discover how we deliver reliable, sustainable energy across Nigeria.",
    openGraph: {
      title: "Our Solar Projects | SunGrid Solutions",
      description:
        "Explore completed solar and electrical projects by SunGrid Solutions. Discover how we deliver reliable, sustainable energy across Nigeria.",
      url: `${siteUrl}/projects`,
      images: [
        {
          url: "/og-projects.jpg",
          width: 1200,
          height: 630,
          alt: "SunGrid Projects",
        },
      ],
    },
  },

  contact: {
    title: "Contact SunGrid Solutions | Solar & Energy Experts in Nigeria",
    description:
      "Get in touch with SunGrid Solutions for expert solar installation, electrical services, and sustainable energy solutions in Nigeria.",
    openGraph: {
      title: "Contact Us | SunGrid Solutions",
      description:
        "Get in touch with SunGrid Solutions for solar and electrical installation services in Nigeria. Let's power your future together.",
      url: `${siteUrl}/contact`,
      images: [
        {
          url: "/og-contact.jpg",
          width: 1200,
          height: 630,
          alt: "Contact SunGrid",
        },
      ],
    },
  },

  services: {
    title: "Solar & Electrical Services | SunGrid Solutions",
    description:
      "Discover SunGrid Solutions' range of solar and electrical installation services in Nigeria. Reliable, affordable, and sustainable energy solutions for homes and businesses.",
    openGraph: {
      title: "Solar & Electrical Services | SunGrid Solutions",
      description:
        "Discover SunGrid Solutions' range of solar and electrical installation services in Nigeria. Reliable, affordable, and sustainable energy solutions for homes and businesses. Solar Installation Services in Minna, lokoja and Abuja.",
      url: `${siteUrl}/services`,
      images: [
        {
          url: "/og-services.jpg",
          width: 1200,
          height: 630,
          alt: "SunGrid Services",
        },
      ],
    },
  },
};

export default siteMetadata;
