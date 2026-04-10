import { hubData } from '../../data/hubs.js';

export function onBeforePrerenderStart() {
  return Object.keys(hubData).map((hubId) => `/${hubId}`);
}
