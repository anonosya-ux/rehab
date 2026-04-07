import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import HubPage from './pages/HubPage'
import GeoPage from './pages/GeoPage'
import BlogArchive from './pages/BlogArchive'
import BlogPost from './pages/BlogPost'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        {/* Hub Pages */}
        <Route path="/:hubId" element={<HubPage />} />
        {/* GEO Pages */}
        <Route path="/geo/:city" element={<GeoPage />} />
        {/* Blog */}
        <Route path="/blog" element={<BlogArchive />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        {/* 404 */}
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
