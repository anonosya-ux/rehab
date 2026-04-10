import React from 'react';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    author: "Анна М.",
    role: "Мать пациента",
    text: "Огромное спасибо персоналу центра. Мой сын вернулся к нормальной жизни после 5 лет употребления. Условия отличные, врачи от Бога.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=47"
  },
  {
    author: "Михаил",
    role: "Выпускник программы",
    text: "Долго не хотел признавать проблему с алкоголем. Прошел курс реабилитации, сейчас не пью больше года. Жизнь наладилась, вернулась семья.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    author: "Елена В.",
    role: "Выпускница программы",
    text: "Прекрасный центр с потрясающим отношением к пациентам. Я чувствовала себя как дома. Психотерапия здесь на высшем уровне.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=32"
  },
  {
    author: "Денис",
    role: "Выпускник программы",
    text: "Благодаря индивидуальной работе с психологом я смог найти первопричины своей зависимости. Спасибо за второй шанс на жизнь.",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?img=60"
  },
  {
    author: "Сергей П.",
    role: "Брат пациента",
    text: "Анонимность и профессионализм - вот что отличает этот центр. Огромная территория, комфорт. Спасибо за спасение моего брата!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=52"
  }
];

// Duplicate for infinite scrolling effect
const MARQUEE_REVIEWS = [...REVIEWS, ...REVIEWS];

export default function ReviewsSection() {
  // Schema.org AggregateRating — per seo-schema skill (ACTIVE type)
  const avgRating = REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length;
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Реабилитационный центр «Цель»",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": avgRating.toFixed(1),
      "reviewCount": REVIEWS.length,
      "bestRating": "5",
      "worstRating": "1",
    },
    "review": REVIEWS.map(r => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": r.rating,
      },
      "author": {
        "@type": "Person",
        "name": r.author,
      },
      "reviewBody": r.text,
    })),
  };

  return (
    <section className="py-24 relative overflow-hidden bg-surface-soft">
      {/* Schema.org AggregateRating + Reviews JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      {/* Background gradients */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-surface-soft to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-surface-soft to-transparent z-10 pointer-events-none" />
      <div className="absolute left-0 inset-y-0 w-32 bg-gradient-to-r from-surface-soft to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-32 bg-gradient-to-l from-surface-soft to-transparent z-10 pointer-events-none" />

      <div className="container-main relative z-20 mx-auto max-w-6xl text-center mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium uppercase tracking-widest mb-6">
          Истории успеха
        </div>
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-text-primary mb-6">
          Отзывы наших <span className="text-primary italic">резидентов</span>
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto text-lg">
          Реальные истории людей, которые смогли преодолеть зависимость и начать новую жизнь с чистого листа.
        </p>
      </div>

      <div className="flex overflow-hidden group">
        <div className="flex gap-6 min-w-full pl-6 animate-marquee">
          {MARQUEE_REVIEWS.map((review, idx) => (
            <div 
              key={idx} 
              className="w-[350px] md:w-[400px] shrink-0 rounded-3xl glass border border-surface-dark p-8 hover:border-primary/30 transition-all duration-300 relative group/card"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < review.rating ? 'text-accent-400 fill-accent-400' : 'text-surface-dark fill-surface-dark'}`} 
                  />
                ))}
              </div>
              <p className="text-text-secondary text-lg leading-relaxed mb-8 font-light italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={review.avatar} 
                  alt={review.author} 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20 group-hover/card:ring-primary/50 transition-all"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-text-primary font-medium">{review.author}</h4>
                  <p className="text-text-muted text-sm">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
