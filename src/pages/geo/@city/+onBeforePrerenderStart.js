import { geoCities } from '../../../data/geo.js';
export function onBeforePrerenderStart() {
  return Object.keys(geoCities).map((city) => `/geo/${city}`);
}
