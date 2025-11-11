import { UNITS } from "@/config/constants";

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Labclin - Laboratório de Análises Clínicas",
  description:
    "Laboratório de análises clínicas com 58+ anos de experiência em Rio Pomba, Mercês, Guarani e Silveirânia - MG.",
  url: "https://labclin.com.br",
  logo: "https://labclin.com.br/logo.png",
  image: "https://labclin.com.br/og-image.jpg",
  telephone: "+55-32-99199-0239",
  email: "contato@labclin.com.br",
  address: UNITS.map((unit) => ({
    "@type": "PostalAddress",
    streetAddress: unit.address,
    addressLocality: unit.city,
    addressRegion: "MG",
    addressCountry: "BR",
  })),
  priceRange: "$$",
  openingHours: "Mo-Fr 07:00-17:00, Sa 07:00-12:00",
  areaServed: UNITS.map((unit) => unit.city),
  medicalSpecialty: "Clinical Laboratory",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "500",
  },
});

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const generateBlogPostSchema = (post: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  description: post.description,
  image: post.image,
  datePublished: post.datePublished,
  dateModified: post.dateModified,
  author: {
    "@type": "Organization",
    name: post.author || "Labclin",
  },
  publisher: {
    "@type": "Organization",
    name: "Labclin",
    logo: {
      "@type": "ImageObject",
      url: "https://labclin.com.br/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": post.url,
  },
});

export const generateServiceSchema = (service: {
  name: string;
  description: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: service.name,
  description: service.description,
  procedureType: "Laboratory Test",
  url: service.url,
  provider: {
    "@type": "MedicalBusiness",
    name: "Labclin",
  },
});
