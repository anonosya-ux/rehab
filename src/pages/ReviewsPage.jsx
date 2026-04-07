import React from 'react';

const reviews = [
  {
    id: 1,
    name: 'Елена М.',
    date: '12 Апреля 2026',
    rating: 5,
    tag: 'Алкоголизм',
    text: 'Благодаря специалистам центра мой муж вернулся к нормальной жизни. Программа детоксикации и последующая реабилитация (пакет Интенсив) дали потрясающий результат. Особая благодарность Козлову А.Г. за поддержку семьи в этот сложный период.',
  },
  {
    id: 2,
    name: 'Анонимный пациент',
    date: '05 Марта 2026',
    rating: 5,
    tag: 'Игровая зависимость',
    text: 'Был скептически настроен насчет технологии BOSlab, но это действительно работает. Снизилась импульсивность, я перестал срываться. Клиника в Жуково очень комфортная, как хороший санаторий.',
  },
  {
    id: 3,
    name: 'Сергей В.',
    date: '28 Февраля 2026',
    rating: 5,
    tag: 'Наркомания',
    text: 'После нескольких неудачных попыток в других клиниках, только здесь смогли найти подход к моему сыну. Спасибо психологам за их эмпатию и профессионализм.',
  },
  {
    id: 4,
    name: 'Мария К.',
    date: '15 Февраля 2026',
    rating: 5,
    tag: 'Созависимость',
    text: 'Посещала группы для родственников. Очень помогло выстроить правильные границы в общении с зависимым братом. Вы спасаете не только пациентов, но и их семьи!',
  },
];

function ReviewCard({ review }) {
  return (
    <div className="glass-card rounded-3xl border border-white/5 p-8 flex flex-col h-full hover:bg-white/10 transition-colors duration-300">
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-1 text-accent-400">
          {[...Array(review.rating)].map((_, i) => (
            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-xs font-medium text-white/40 uppercase tracking-wider">{review.date}</span>
      </div>
      
      <p className="text-white/80 leading-relaxed max-w-prose mb-8 flex-grow">
        "{review.text}"
      </p>

      <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500/20 to-primary-600/20 border border-primary-500/30 flex items-center justify-center text-primary-300 font-bold">
            {review.name.charAt(0)}
          </div>
          <span className="text-white font-medium">{review.name}</span>
        </div>
        <span className="text-xs font-semibold px-3 py-1 bg-white/5 rounded-full text-white/50 border border-white/5 hidden sm:block">
          {review.tag}
        </span>
      </div>
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <div className="w-full relative min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-surface-dark">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-accent-600/5 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-primary-600/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="container-main relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-white/60 uppercase tracking-widest mb-6">
            Истории пациентов
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
            Честные отзывы о <span className="text-accent-400 italic">компетенции</span> ЦПА «Цель»
          </h1>
          <p className="text-lg text-white/60 leading-relaxed">
            Мы гордимся результатами нашей работы. Более 90% наших выпускников успешно проходят программу ресоциализации и возвращаются к полноценной жизни без зависимостей.
          </p>
        </div>

        {/* Video Review Highlight */}
        <div className="mb-16 p-8 glass-light rounded-[2rem] border border-white/10 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 blur-[100px] rounded-full" />
          <div className="w-full md:w-1/2 aspect-video bg-surface-darker rounded-2xl relative group overflow-hidden border border-white/10 flex items-center justify-center">
            {/* Play Button Mockup */}
            <div className="w-16 h-16 bg-accent-500/90 rounded-full flex items-center justify-center text-white/90 group-hover:scale-110 group-hover:bg-accent-400 transition-all cursor-pointer shadow-glow z-10">
              <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/40 to-transparent group-hover:opacity-75 transition-opacity" />
            <div className="absolute bottom-4 left-4 text-white text-sm font-medium z-10 px-3 py-1 bg-black/50 backdrop-blur-md rounded-lg">
              Видео-отзыв выпускника программы «Интенсив»
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left relative z-10">
            <div className="flex gap-1 text-accent-400 justify-center md:justify-start mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-white mb-4">«Они вернули мне смысл жизни»</h3>
            <p className="text-white/60 mb-8 max-w-md mx-auto md:mx-0">
              Посмотрите откровенное интервью нашего выпускника о том, как проходила реабилитация, какие трудности он преодолел и какую поддержку оказал персонал Центра.
            </p>
            <a href="https://yandex.ru/maps" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary-400 font-medium hover:text-primary-300 transition-colors">
              Читать отзывы на Яндекс.Картах
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Text Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Call to Action Container */}
        <div className="text-center bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-16 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <h2 className="text-3xl font-playfair font-bold text-white mb-4 relative z-10">Ваша история тоже может быть со счастливым финалом</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto relative z-10">Сделайте первый шаг уже сегодня. Свяжитесь со специалистами горячей линии для бесплатной и анонимной консультации.</p>
          <button className="px-8 py-4 bg-primary-500 text-white font-semibold rounded-2xl hover:bg-primary-400 hover:shadow-[0_0_30px_rgba(45,126,230,0.4)] transition-all inline-flex items-center gap-3 relative z-10">
            Оставить заявку
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
          </button>
        </div>

      </div>
    </div>
  );
}
