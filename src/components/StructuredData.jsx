import React from 'react';
import { Head } from 'vike-react/Head';

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "ЦПА «Цель» — Центр практической аддиктологии",
    "alternateName": "Реабилитационный центр Цель",
    "url": "https://lechenie-narkomanii-alkogolizma.ru/",
    "logo": "https://lechenie-narkomanii-alkogolizma.ru/assets/logo-main.svg",
    "image": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop",
    "description": "Специализированный центр лечения наркомании, алкоголизма и поведенческих зависимостей. Более 10 лет опыта, 3 кандидата наук.",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "д. Жуково, д. 1",
        "addressLocality": "Солнечногорск",
        "addressRegion": "Московская область",
        "postalCode": "141500",
        "addressCountry": "RU"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "ул. Академика Королёва, д. 13, стр. 1, офис 88",
        "addressLocality": "Москва",
        "addressRegion": "Москва",
        "postalCode": "129515",
        "addressCountry": "RU"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 56.184323,
      "longitude": 36.980486
    },
    "telephone": "+74954141113",
    "email": "info@lechenie-narkomanii-alkogolizma.ru",
    "priceRange": "$$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "hasMap": "https://yandex.ru/maps/-/CDuPQ8nF",
    "department": [
      {
        "@type": "MedicalClinic",
        "name": "Стационарное лечение",
        "medicalSpecialty": "Psychiatric"
      },
      {
        "@type": "MedicalClinic",
        "name": "Амбулаторная реабилитация",
        "medicalSpecialty": "Psychiatric"
      }
    ]
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
      {/* Global Open Graph Defaults */}
      <meta property="og:site_name" content="ЦПА «Цель» — Центр практической аддиктологии" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:image" content="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1200&auto=format&fit=crop" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
