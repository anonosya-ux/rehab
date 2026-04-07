import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import HubPage from './pages/HubPage'
import GeoPage from './pages/GeoPage'
import BlogArchive from './pages/BlogArchive'
import BlogPost from './pages/BlogPost'
import SpecialistsPage from './pages/SpecialistsPage'
import ReviewsPage from './pages/ReviewsPage'
import AboutPage from './pages/AboutPage'
import PricingPage from './pages/PricingPage'
import StagesPage from './pages/StagesPage'
import LicensesPage from './pages/LicensesPage'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        {/* Hub Pages */}
        <Route path="/:hubId" element={<HubPage />} />
        {/* Static Pages */}
        <Route path="/o-centre" element={<AboutPage />} />
        <Route path="/o-centre/vrachi" element={<SpecialistsPage />} />
        <Route path="/o-centre/otzyvy" element={<ReviewsPage />} />
        <Route path="/o-centre/licenzii" element={<LicensesPage />} />
        <Route path="/reabilitaciya/etapy" element={<StagesPage />} />
        <Route path="/reabilitaciya/pakety" element={<PricingPage />} />
        
        {/* Dynamic Hubs (catch all top-level paths except defined ones) */}
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
