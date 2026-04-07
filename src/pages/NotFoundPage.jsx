import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="container-main text-center py-32">
        <div className="text-8xl font-bold gradient-text mb-6">404</div>
        <h1 className="text-2xl md:text-3xl font-bold mb-4 font-sans">Страница не найдена</h1>
        <p className="text-text-secondary mb-8 max-w-md mx-auto">
          Запрашиваемая страница не существует или была перемещена. 
          Воспользуйтесь навигацией или вернитесь на главную.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-accent-500 to-accent-400 text-white font-semibold hover:shadow-glow transition-all duration-300"
          >
            На главную
          </Link>
          <a
            href="tel:+74954141113"
            className="px-6 py-3 rounded-xl glass-light text-text-primary font-medium hover:bg-white/10 transition-all"
          >
            📞 Позвонить
          </a>
        </div>
      </div>
    </section>
  )
}
