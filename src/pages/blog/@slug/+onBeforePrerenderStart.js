import { blogPosts } from '../../../data/blog.js';
export function onBeforePrerenderStart() {
  return Object.keys(blogPosts).map((slug) => `/blog/${slug}`);
}
