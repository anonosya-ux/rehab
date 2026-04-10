import { usePageContext } from 'vike-react/usePageContext';
import NotFoundPage from '@/pages/_error/+Page';
import { blogPosts } from '@/data/blog';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useContactModal } from '@/components/ContactModal';
import { useInView } from '@/hooks/useInView';

/**
 * Blog article page with Schema.org Article JSON-LD (seo-schema skill).
 * Article is an ACTIVE schema type per schema-types.md.
 * E-E-A-T: author with credentials, publisher info, dates.
 */
export default function BlogPost() {
  const pageContext = usePageContext();
  const slug = pageContext.routeParams.slug;
  const post = blogPosts[slug];
  const { setOpen } = useContactModal();
  const [ctaRef, ctaInView] = useInView({ threshold: 0.2 });

  if (!post) {
    return <NotFoundPage />;
  }

  // Related articles
  const relatedArticles = (post.relatedSlugs || [])
    .map(s => blogPosts[s])
    .filter(Boolean);

  // Schema.org Article JSON-LD — per seo-schema skill
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription || post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author,
      "jobTitle": post.authorTitle,
    },
    "publisher": {
      "@type": "Organization",
      "name": "ЦПА «Цель»",
      "url": "https://lechenie-narkomanii-alkogolizma.ru",
    },
    "datePublished": post.publishDate || "2026-04-01",
    "dateModified": post.publishDate || "2026-04-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://lechenie-narkomanii-alkogolizma.ru/blog/${slug}/`,
    },
    ...(post.keywords ? { "keywords": post.keywords.join(", ") } : {}),
  };

  return (
    <div className="w-full relative min-h-screen pt-32 pb-24">
      {/* Article Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-background">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <article className="container mx-auto px-4 max-w-4xl">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Breadcrumbs items={[
            { label: 'Главная', href: '/' },
            { label: 'Блог', href: '/blog' },
            { label: post.title },
          ]} />
        </div>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6 text-xs font-medium uppercase tracking-wider text-primary flex-wrap">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">{post.category}</span>
            <span className="w-1.5 h-1.5 bg-white/30 rounded-full" />
            <span className="text-text-muted">Чтение: {post.readTime}</span>
            <span className="w-1.5 h-1.5 bg-white/30 rounded-full" />
            <span className="text-text-muted">{post.date}</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-8 leading-tight">
            {post.title}
          </h1>

          {/* Author card — E-E-A-T signal */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-muted border border-white/5 inline-flex">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl font-bold">
              {post.author.charAt(0)}
            </div>
            <div>
              <div className="text-white font-medium">{post.author}</div>
              <div className="text-xs text-text-muted">{post.authorTitle}</div>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className="prose prose-invert prose-lg max-w-none text-white/80
          prose-headings:font-playfair prose-headings:text-white prose-headings:font-semibold
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-primary/90
          prose-p:leading-relaxed prose-p:mb-6
          prose-a:text-primary prose-a:no-underline hover:prose-a:text-primary/80
          prose-strong:text-white
          prose-blockquote:border-l-primary/50 prose-blockquote:bg-primary/5 prose-blockquote:rounded-r-xl prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:text-text-secondary prose-blockquote:not-italic
          prose-li:text-text-secondary
          prose-ul:space-y-2"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Related articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-white mb-6">Читайте также</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedArticles.map(related => (
                <a 
                  key={related.id}
                  href={`/blog/${related.id}`}
                  className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 group"
                >
                  <span className="text-xs text-primary/70 uppercase tracking-wider">{related.category}</span>
                  <h4 className="text-lg font-medium text-white mt-2 group-hover:text-primary transition-colors line-clamp-2">
                    {related.title}
                  </h4>
                  <p className="text-sm text-text-muted mt-2 line-clamp-2">{related.excerpt}</p>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Footer CTA — connected to ContactModal */}
        <div 
          ref={ctaRef}
          className="mt-20 p-8 md:p-12 glass-card rounded-3xl border border-primary/20 bg-primary/5 text-center"
          style={{
            opacity: ctaInView ? 1 : 0,
            transform: ctaInView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          }}
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Остались вопросы?</h3>
          <p className="text-text-secondary mb-8 max-w-xl mx-auto">
            Свяжитесь с нами для бесплатной анонимной консультации со специалистом клиники. Мы работаем круглосуточно.
          </p>
          <button 
            onClick={() => setOpen(true)}
            className="px-8 py-4 bg-primary text-background font-semibold rounded-full hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] transition-all transform hover:scale-105 inline-flex items-center gap-2"
          >
            Получить консультацию
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        {/* Medical disclaimer — YMYL compliance */}
        <p className="mt-8 text-xs text-white/30 text-center max-w-2xl mx-auto leading-relaxed">
          Информация носит ознакомительный характер и не является медицинской рекомендацией. 
          Для назначения лечения обратитесь к квалифицированному специалисту.
        </p>
      </article>
    </div>
  );
}
