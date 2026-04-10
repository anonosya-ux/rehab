import React from 'react'

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "ЦПА «Цель» — Центр практической аддиктологии",
  "url": "https://lechenie-narkomanii-alkogolizma.ru",
  "logo": "https://lechenie-narkomanii-alkogolizma.ru/favicon.svg",
  "telephone": ["+7 495 414-11-13", "+7 977 895-85-99"],
  "address": [
    {
      "@type": "PostalAddress",
      "addressLocality": "деревня Жуково",
      "addressRegion": "Солнечногорский район, Московская область",
      "addressCountry": "RU",
      "streetAddress": "д. 1"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Москва",
      "addressRegion": "Москва",
      "addressCountry": "RU",
      "streetAddress": "ул. Академика Королёва, д. 13, стр. 1, офис 88"
    }
  ],
  "areaServed": ["Москва", "Московская область", "Солнечногорск", "Зеленоград", "Химки", "Мытищи", "Красногорск", "Балашиха", "Люберцы", "Одинцово", "Подольск", "Домодедово"],
  "medicalSpecialty": ["Наркология", "Аддиктология", "Психотерапия", "Психология"],
  "openingHours": "Mo-Su 00:00-23:59",
  "priceRange": "от 80 000 ₽/мес",
  "description": "Центр практической аддиктологии «Цель» — комплексная помощь при химических и поведенческих зависимостях. Более 10 лет опыта, 14+ специалистов, 3 кандидата наук."
}

export default function Head() {
  return (
    <>
      <meta name="theme-color" content="#0a0f1c" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="ЦПА «Цель» — Центр практической аддиктологии" />
      <meta property="og:description" content="Лечение наркомании, алкоголизма и поведенческих зависимостей. Более 10 лет опыта, 14+ специалистов." />
      <meta property="og:url" content="https://lechenie-narkomanii-alkogolizma.ru" />
      <meta property="og:locale" content="ru_RU" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://lechenie-narkomanii-alkogolizma.ru" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="manifest" href="/manifest.webmanifest" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script dangerouslySetInnerHTML={{ __html: `
        if ('serviceWorker' in navigator) {
          window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js').catch(() => {});
          });
        }
      `}} />
    </>
  )
}
