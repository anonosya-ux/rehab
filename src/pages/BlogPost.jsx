import { useParams, Navigate, Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts[slug];

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="w-full relative min-h-screen pt-32 pb-24">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-background">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <article className="container mx-auto px-4 max-w-4xl">
        {/* Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/50 hover:text-primary transition-colors text-sm font-medium">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Вернуться ко всем статьям
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6 text-xs font-medium uppercase tracking-wider text-primary">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">{post.category}</span>
            <span className="w-1.5 h-1.5 bg-white/30 rounded-full" />
            <span className="text-white/50">Чтение: {post.readTime}</span>
            <span className="w-1.5 h-1.5 bg-white/30 rounded-full" />
            <span className="text-white/50">{post.date}</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 inline-flex">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl font-bold">
              {post.author.charAt(0)}
            </div>
            <div>
              <div className="text-white font-medium">{post.author}</div>
              <div className="text-xs text-white/50">{post.authorTitle}</div>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className="prose prose-invert prose-lg max-w-none text-white/80
          prose-headings:font-playfair prose-headings:text-white prose-headings:font-semibold
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-primary/90
          prose-p:leading-relaxed prose-p:mb-6
          prose-a:text-primary prose-a:no-underline hover:prose-a:text-primary/80
          prose-strong:text-white"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer / CTA */}
        <div className="mt-20 p-8 md:p-12 glass-card rounded-3xl border border-primary/20 bg-primary/5 text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">Остались вопросы?</h3>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Свяжитесь с нами для бесплатной анонимной консультации со специалистом клиники. Мы работаем круглосуточно.
          </p>
          <button className="px-8 py-4 bg-primary text-background font-semibold rounded-full hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] transition-all transform hover:scale-105 inline-flex items-center gap-2">
            Получить консультацию
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </article>
    </div>
  );
}
