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
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-surface-soft">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-primary-200/20 rounded-full blur-[150px]" />
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

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-playfair font-bold text-slate-900 mb-8 leading-tight">
            {post.title}
          </h1>

          {/* Author card — E-E-A-T signal */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm inline-flex">
            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-xl font-bold">
              {post.author.charAt(0)}
            </div>
            <div>
              <div className="text-slate-900 font-medium">{post.author}</div>
              <div className="text-xs text-slate-500">{post.authorTitle}</div>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className="prose prose-lg max-w-none text-slate-700
          prose-headings:font-display prose-headings:text-slate-900 prose-headings:font-bold
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-primary-800
          prose-p:leading-relaxed prose-p:mb-6
          prose-a:text-primary-600 prose-a:no-underline hover:prose-a:text-primary-500
          prose-strong:text-slate-900
          prose-blockquote:border-l-primary-500 prose-blockquote:bg-primary-50 prose-blockquote:rounded-r-xl prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:text-slate-600 prose-blockquote:not-italic
          prose-li:text-slate-700
          prose-ul:space-y-2"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Related articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Читайте также</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedArticles.map(related => (
                <a 
                  key={related.id}
                  href={`/blog/${related.id}`}
                  className="bg-white shadow-sm hover:shadow-md p-6 rounded-2xl border border-slate-200 hover:border-primary-300 transition-all duration-300 group"
                >
                  <span className="text-xs text-primary-600 font-bold uppercase tracking-wider">{related.category}</span>
                  <h4 className="text-lg font-medium text-slate-900 mt-2 group-hover:text-primary-700 transition-colors line-clamp-2">
                    {related.title}
                  </h4>
                  <p className="text-sm text-slate-500 mt-2 line-clamp-2">{related.excerpt}</p>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Footer CTA — connected to ContactModal */}
        <div 
          ref={ctaRef}
          className="mt-20 p-8 md:p-12 bg-white rounded-3xl shadow-xl border border-primary-100 text-center"
          style={{
            opacity: ctaInView ? 1 : 0,
            transform: ctaInView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          }}
        >
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Остались вопросы?</h3>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Свяжитесь с нами для бесплатной анонимной консультации со специалистом клиники. Мы работаем круглосуточно.
          </p>
          <button 
            onClick={() => setOpen(true)}
            className="px-8 py-4 bg-primary-600 text-white font-semibold rounded-full hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all transform hover:scale-105 inline-flex items-center gap-2"
          >
            Получить консультацию
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        {/* Medical disclaimer — YMYL compliance */}
        <p className="mt-8 text-xs text-slate-400 text-center max-w-2xl mx-auto leading-relaxed">
          Информация носит ознакомительный характер и не является медицинской рекомендацией. 
          Для назначения лечения обратитесь к квалифицированному специалисту.
        </p>
      </article>
    </div>
  );
}
