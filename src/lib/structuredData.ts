import { UNITS } from "@/config/constants";

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Labclin - Laboratório de Análises Clínicas",
  alternateName: "Labclin",
  description:
    "Laboratório de análises clínicas com mais de 58 anos de experiência em Rio Pomba, Mercês, Guarani e Silveirânia - MG. Exames de rotina, especializados, coleta domiciliar e resultados online.",
  url: "https://www.labclinmg.com.br",
  logo: "https://www.labclinmg.com.br/logo.png",
  image: "https://www.labclinmg.com.br/og-image.jpg",
  telephone: "+55-32-99199-0239",
  email: "llabclin3@gmail.com",
  address: UNITS.map((unit) => ({
    "@type": "PostalAddress",
    streetAddress: unit.address,
    addressLocality: unit.city.split(" - ")[0],
    addressRegion: "MG",
    postalCode: unit.cep,
    addressCountry: "BR",
  })),
  priceRange: "$$",
  openingHours: [
    "Mo-Fr 06:30-17:30",
    "Sa 07:00-11:00"
  ],
  areaServed: UNITS.map((unit) => ({
    "@type": "City",
    name: unit.city.split(" - ")[0],
    containedIn: {
      "@type": "State",
      name: "Minas Gerais"
    }
  })),
  medicalSpecialty: ["Clinical Laboratory", "Pathology", "Medical Test"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    reviewCount: "500",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços Labclin",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalTest",
          name: "Exames de Rotina"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalTest",
          name: "Exames Especializados"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Coleta Domiciliar"
        }
      }
    ]
  }
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
      url: "https://www.labclinmg.com.br/logo.png",
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
  "@type": "MedicalTest",
  name: service.name,
  description: service.description,
  usedToDiagnose: "Various medical conditions",
  url: service.url,
  provider: {
    "@type": "MedicalBusiness",
    name: "Labclin - Laboratório de Análises Clínicas",
    url: "https://www.labclinmg.com.br"
  },
  availableService: {
    "@type": "MedicalProcedure",
    name: service.name,
    procedureType: "Laboratory Test"
  }
});

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
});
