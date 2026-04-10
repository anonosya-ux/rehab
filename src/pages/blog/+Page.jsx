import { blogPosts } from '@/data/blog';

export default function BlogArchive() {
  const posts = Object.values(blogPosts);

  return (
    <div className="w-full relative min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-primary-900 mb-6">
            Блог и <span className="text-accent-600 italic">экспертные статьи</span>
          </h1>
          <p className="text-xl text-primary-900/60 max-w-2xl mx-auto">
            Полезные материалы о лечении зависимостей, психологии и методах реабилитации от наших экспертов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <a href={`/blog/${post.id}`} 
              key={post.id}
              className="glass-card hover:bg-surface-dark/10 transition-all duration-300 rounded-3xl border border-primary-200 overflow-hidden group flex flex-col h-full"
            >
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-4 text-xs font-medium uppercase tracking-wider text-primary">
                  <span>{post.category}</span>
                  <span className="w-1 h-1 bg-white/30 rounded-full" />
                  <span className="text-primary-900/40">{post.readTime}</span>
                </div>
                
                <h2 className="text-2xl font-bold text-primary-900 mb-4 group-hover:text-accent-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-primary-900/60 mb-8 line-clamp-3 leading-relaxed flex-grow">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-surface-dark">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-accent-600 font-bold">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm text-primary-900 font-medium">{post.author}</div>
                      <div className="text-xs text-primary-900/40">{post.date}</div>
                    </div>
                  </div>
                  <div className="text-accent-600 group-hover:translate-x-2 transition-transform">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
