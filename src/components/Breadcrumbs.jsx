import { Fragment } from 'react';

/**
 * SEO-Optimized Breadcrumbs with JSON-LD microdata fallback
 */
export default function Breadcrumbs({ items = [] }) {
  // Always include Home
  const breadcrumbs = [
    { label: 'Главная', href: '/' },
    ...items
  ];

  return (
    <nav aria-label="Вы здесь:" className="relative z-20">
      <ol 
        className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-text-muted"
        itemScope 
        itemType="https://schema.org/BreadcrumbList"
      >
        {breadcrumbs.map((item, index) => {
          const isLast = index === breadcrumbs.length - 1;

          return (
            <Fragment key={index}>
              <li 
                itemProp="itemListElement" 
                itemScope 
                itemType="https://schema.org/ListItem"
                className="flex items-center"
              >
                {!isLast ? (
                  <a 
                    href={item.href} 
                    itemProp="item"
                    className="hover:text-primary-400 transition-colors py-1"
                  >
                    <span itemProp="name">{item.label}</span>
                  </a>
                ) : (
                  <span 
                    itemProp="name" 
                    className="text-text-primary pointer-events-none py-1"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                )}
                <meta itemProp="position" content={index + 1} />
              </li>
              
              {!isLast && (
                <li className="select-none text-white/20 px-1 transform translate-y-px" aria-hidden="true">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
