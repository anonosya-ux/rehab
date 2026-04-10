import React from 'react';
import { motion } from 'framer-motion';
import { Marquee } from '@/components/magic-ui/marquee';

const testimonials = [
  {
    text: "Отличный центр! Сначала долго сомневались, но условия и профессионализм врачей просто на высшем уровне. Спасибо за новую жизнь.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Максим В.",
    role: "5.0 из 5 (Яндекс.Карты)",
  },
  {
    text: "Спасли брата от тяжелой зависимости. Огромная лесная территория, прозрачные условия, мы были всегда на связи с семейным психологом.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Елена С.",
    role: "5.0 из 5 (Яндекс.Карты)",
  },
  {
    text: "Индивидуальный подход и человеческое отношение. БОС-терапия реально работает, сын не употребляет второй год! Очень благодарны.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    name: "Сергей П.",
    role: "5.0 из 5 (Яндекс.Карты)",
  },
  {
    text: "Высокий уровень безопасности и 100% анонимность. Пациенты живут в комфортных условиях, как в хорошем санатории, прекрасное питание.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Анна М.",
    role: "5.0 из 5 (Яндекс.Карты)",
  },
  {
    text: "Специалисты центра сделали невозможное. После нескольких срывов в клиниках эконом-класса, именно здесь помогли найти и проработать причину.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Дмитрий К.",
    role: "5.0 из 5 (Яндекс.Карты)",
  },
  {
    text: "Лучший рехаб в Подмосковье по соотношению цены и отношения к людям. Спасибо психотерапевтам за работу с нашей созависимостью.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Ольга В.",
    role: "5.0 из 5 (Яндекс.Карты)",
  },
  {
    text: "Очень чисто, территория огромная, сосновый бор вокруг. С пациентами действительно работают каждый день, а не просто держат взаперти.",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    name: "Николай И.",
    role: "5.0 из 5 (Яндекс.Карты)",
  },
  {
    text: "Грамотный вывод из запоя, полное обследование и шикарная программа реабилитации 12 Шагов. Цены полностью оправдывают этот результат.",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    name: "Игорь Т.",
    role: "5.0 из 5 (Яндекс.Карты)",
  },
  {
    text: "Остался жив только благодаря вам. Учат заново радоваться жизни без стимуляторов. Низкий поклон всему медицинскому персоналу.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Алексей (Выпускник)",
    role: "5.0 из 5 (Яндекс.Карты)",
  },
];

const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

const ReviewCard = ({ text, image, name, role }) => (
  <div className="relative w-80 max-w-full flex-shrink-0 overflow-hidden rounded-3xl border border-white/40 bg-white/60 backdrop-blur-xl p-6 shadow-[0_10px_30px_-15px_rgba(30,58,138,0.1)] hover:shadow-[0_15px_40px_-15px_rgba(30,58,138,0.2)] transition-shadow duration-300">
    <div className="flex flex-row items-center gap-4 mb-4">
      <img className="rounded-full w-12 h-12 object-cover border-2 border-white shadow-sm" alt={name} src={image} />
      <div className="flex flex-col">
        <figcaption className="text-sm font-bold text-primary-900">{name}</figcaption>
        <p className="text-xs font-semibold text-accent-600">{role}</p>
      </div>
    </div>
    <blockquote className="mt-2 text-sm leading-relaxed text-slate-700 font-medium">"{text}"</blockquote>
  </div>
);

export default function ReviewsSection() {
  const avgRating = 5.0;
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Реабилитационный центр «Цель»",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": avgRating.toFixed(1),
      "reviewCount": testimonials.length,
      "bestRating": "5",
      "worstRating": "1",
    },
  };

  return (
    <section className="bg-surface-soft py-20 relative overflow-hidden" id="reviews-section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-400/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-main z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[800px] mx-auto text-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary-100 border border-primary-200 text-primary-800 text-sm font-bold uppercase tracking-widest mb-6">
            Истории успеха
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-primary-900 mb-6 drop-shadow-sm">
            Отзывы на <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-accent-400">Яндекс.Картах</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Десятки спасенных жизней. Реальные истории реабилитантов и благодарности от их семей, чья жизнь разделилась на «До» и «После».
          </p>
        </motion.div>

        <div className="mt-14 relative flex w-full flex-col items-center justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <Marquee pauseOnHover className="[--duration:40s]">
            {firstRow.map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:45s] mt-4">
            {secondRow.map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}
          </Marquee>
          
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-surface-soft dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-surface-soft dark:from-background"></div>
        </div>
      </div>
    </section>
  );
}
