import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AnalyticsProvider from './components/analytics/AnalyticsProvider';
import PixelProvider from './components/PixelProvider';

// Pages
import Home from './pages/Home';
import Guide from './pages/resources/Guide';
import Enrollment from './pages/resources/Enrollment';
import Documents from './pages/resources/Documents';
import FAQs from './pages/resources/FAQs';
import Blog from './pages/resources/Blog';
import BlogPost from './pages/resources/BlogPost';
import Videos from './pages/resources/Videos';
import MedigapComparison from './pages/MedigapComparison';
import WhyPinnacle from './pages/WhyPinnacle';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Quote from './pages/Quote';
import OriginalMedicare from './pages/plans/OriginalMedicare';
import MedicareAdvantage from './pages/plans/MedicareAdvantage';
import MedicareSupplementPlans from './pages/plans/MedicareSupplementPlans';
import PrescriptionDrugPlans from './pages/plans/PrescriptionDrugPlans';
import Privacy from './pages/legal/Privacy';
import Terms from './pages/legal/Terms';
import Accessibility from './pages/legal/Accessibility';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <AnalyticsProvider>
        <PixelProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Plan Routes */}
            <Route path="/plans/original-medicare" element={<OriginalMedicare />} />
            <Route path="/plans/medicare-advantage" element={<MedicareAdvantage />} />
            <Route path="/plans/medicare-supplement" element={<MedicareSupplementPlans />} />
            <Route path="/plans/prescription-drug" element={<PrescriptionDrugPlans />} />
            
            {/* Resource Routes */}
            <Route path="/resources/guide" element={<Guide />} />
            <Route path="/resources/enrollment" element={<Enrollment />} />
            <Route path="/resources/documents" element={<Documents />} />
            <Route path="/resources/faqs" element={<FAQs />} />
            <Route path="/resources/blog" element={<Blog />} />
            <Route path="/resources/blog/:id" element={<BlogPost />} />
            <Route path="/resources/videos" element={<Videos />} />
            
            {/* Company Routes */}
            <Route path="/medigap-comparison" element={<MedigapComparison />} />
            <Route path="/why-pinnacle" element={<WhyPinnacle />} />
            <Route path="/team" element={<Team />} />
            <Route path="/quote" element={<Quote />} />
            
            {/* Redirects for common URL variations */}
            <Route path="/teams" element={<Navigate to="/team" replace />} />
            <Route path="/about" element={<Navigate to="/why-pinnacle" replace />} />
            <Route path="/about-us" element={<Navigate to="/why-pinnacle" replace />} />
            <Route path="/contact-us" element={<Navigate to="/contact" replace />} />
            <Route path="/medicare-plans" element={<Navigate to="/plans/medicare-advantage" replace />} />
            
            {/* Contact Route */}
            <Route path="/contact" element={<Contact />} />
            
            {/* Legal Routes */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/accessibility" element={<Accessibility />} />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PixelProvider>
      </AnalyticsProvider>
    </Router>
  );
}