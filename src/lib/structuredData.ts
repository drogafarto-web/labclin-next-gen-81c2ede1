import { UNITS } from "@/config/constants";

// Organization schema with departments for each unit
export const generateOrganizationWithDepartments = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Labclin - Laboratório de Análises Clínicas",
  alternateName: "Labclin MG",
  description:
    "Rede de laboratórios de análises clínicas com mais de 58 anos de experiência atendendo a Zona da Mata Mineira. Unidades em Rio Pomba, Mercês, Guarani e Silveirânia.",
  url: "https://www.labclinmg.com.br",
  logo: "https://www.labclinmg.com.br/labclin-logo.png",
  image: "https://www.labclinmg.com.br/og-image.jpg",
  telephone: "+55-32-99199-0239",
  email: "llabclin3@gmail.com",
  foundingDate: "1966",
  areaServed: {
    "@type": "State",
    name: "Minas Gerais",
    containsPlace: [
      { "@type": "City", name: "Rio Pomba" },
      { "@type": "City", name: "Mercês" },
      { "@type": "City", name: "Guarani" },
      { "@type": "City", name: "Silveirânia" },
    ],
  },
  department: [
    {
      "@type": "MedicalBusiness",
      name: "Labclin Rio Pomba",
      url: "https://www.labclinmg.com.br/unidades/rio-pomba",
      telephone: "+55-32-3571-1599",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Floripes Maria de Jesus, 05, loja 02 - Centro",
        addressLocality: "Rio Pomba",
        addressRegion: "MG",
        postalCode: "36180-000",
        addressCountry: "BR",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "06:30",
          closes: "17:30",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "07:00",
          closes: "11:00",
        },
      ],
    },
    {
      "@type": "MedicalBusiness",
      name: "Labclin Mercês",
      url: "https://www.labclinmg.com.br/unidades/merces",
      telephone: "+55-32-99967-1581",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Praça Dr. Castelões, 40 - Centro",
        addressLocality: "Mercês",
        addressRegion: "MG",
        postalCode: "36190-000",
        addressCountry: "BR",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "06:45",
          closes: "11:45",
        },
      ],
    },
    {
      "@type": "MedicalBusiness",
      name: "Labclin Guarani",
      url: "https://www.labclinmg.com.br/unidades/guarani",
      telephone: "+55-32-99199-0239",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua José Ladeira Pinto, 70 - Bairro Sossego",
        addressLocality: "Guarani",
        addressRegion: "MG",
        postalCode: "36160-000",
        addressCountry: "BR",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "06:45",
          closes: "15:30",
        },
      ],
    },
    {
      "@type": "MedicalBusiness",
      name: "Labclin Silveirânia",
      url: "https://www.labclinmg.com.br/unidades/silveirania",
      telephone: "+55-32-99199-0239",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Padre Cerqueira, 20 - Centro",
        addressLocality: "Silveirânia",
        addressRegion: "MG",
        postalCode: "36245-000",
        addressCountry: "BR",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "11:00",
        },
      ],
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    reviewCount: "500",
  },
});

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

export const generateReviewSchema = (review: {
  author: string;
  rating: number;
  text: string;
  datePublished?: string;
  service?: string;
}) => ({
  "@type": "Review",
  author: {
    "@type": "Person",
    name: review.author
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: review.rating.toString(),
    bestRating: "5"
  },
  reviewBody: review.text,
  datePublished: review.datePublished || new Date().toISOString().split('T')[0],
  ...(review.service && { itemReviewed: { "@type": "MedicalTest", name: review.service } })
});

// Social media links for Labclin
export const LABCLIN_SOCIAL_LINKS = [
  "https://www.instagram.com/labclin_analises",
  "https://www.facebook.com/labclinanalises"
];

// Parent organization schema
export const LABCLIN_PARENT_ORGANIZATION = {
  "@type": "Organization",
  "name": "Labclin - Laboratório de Análises Clínicas",
  "url": "https://www.labclinmg.com.br",
  "logo": "https://www.labclinmg.com.br/labclin-logo.png"
};

// Reviews data for each unit
export const UNIT_REVIEWS = {
  rioPomba: [
    { author: "Maria Silva", rating: 5, text: "Atendimento excelente! Equipe muito profissional e resultados rápidos.", datePublished: "2024-10-15" },
    { author: "João Oliveira", rating: 5, text: "Faço meus exames há mais de 10 anos. Confiança total no Labclin!", datePublished: "2024-09-20" },
    { author: "Ana Costa", rating: 5, text: "Ambiente limpo e acolhedor. Recomendo muito para toda a família!", datePublished: "2024-08-10" },
    { author: "Carlos Santos", rating: 5, text: "A coleta domiciliar salvou minha vida com minha mãe idosa. Muito obrigado!", datePublished: "2024-07-25" },
    { author: "Fernanda Lima", rating: 5, text: "Únicos que abrem sábado na região. Muito prático para quem trabalha!", datePublished: "2024-06-18" }
  ],
  merces: [
    { author: "Paula Mendes", rating: 5, text: "Ótimo atendimento na unidade de Mercês! Profissionais muito atenciosos.", datePublished: "2024-10-08" },
    { author: "Juliana Alves", rating: 5, text: "Fiz minha sexagem fetal aqui. Super recomendo, resultado rápido!", datePublished: "2024-09-12" },
    { author: "Roberto Freitas", rating: 5, text: "Equipe atenciosa e resultado rápido online. Excelente!", datePublished: "2024-08-05" }
  ],
  guarani: [
    { author: "Marcos Ribeiro", rating: 5, text: "Finalmente um laboratório de qualidade em Guarani! Atendimento nota 10.", datePublished: "2024-10-01" },
    { author: "Luciana Pereira", rating: 5, text: "Toxicológico para CNH sem complicação. Processo rápido e eficiente.", datePublished: "2024-09-05" },
    { author: "Camila Souza", rating: 5, text: "Coleta infantil excelente, meu filho nem chorou. Equipe maravilhosa!", datePublished: "2024-08-15" }
  ],
  silveirania: [
    { author: "Ricardo Gomes", rating: 5, text: "Que bom ter o Labclin aqui em Silveirânia! Não preciso mais viajar.", datePublished: "2024-10-05" },
    { author: "Beatriz Santos", rating: 5, text: "Atendimento humanizado e profissional. Parabéns pela nova unidade!", datePublished: "2024-09-18" },
    { author: "André Martins", rating: 5, text: "Resultados online muito prático. Recomendo a todos!", datePublished: "2024-08-22" }
  ]
};

// Generate review array for schema
export const generateReviewsArray = (reviews: Array<{ author: string; rating: number; text: string; datePublished: string }>) => 
  reviews.map(review => ({
    "@type": "Review",
    "author": { "@type": "Person", "name": review.author },
    "datePublished": review.datePublished,
    "reviewBody": review.text,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating.toString(),
      "bestRating": "5"
    }
  }));
