import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { CourseCategories } from './sections/CourseCategories';
import { WhyExoStudies } from './sections/WhyExoStudies';
import { HowItWorks } from './sections/HowItWorks';
import { HowYouLearn } from './sections/HowYouLearn';
import { Faculty } from './sections/Faculty';
import { FreeDemoCTA } from './sections/FreeDemoCTA';
import { FacultyPage } from './pages/FacultyPage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { TeachingMethodologyPage } from './pages/TeachingMethodologyPage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { RefundPolicyPage } from './pages/RefundPolicyPage';
import './App.css';

function HomePage() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <CourseCategories />
        <WhyExoStudies />
        <HowItWorks />
        <HowYouLearn />
        <Faculty />
        <FreeDemoCTA />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/jee" element={<CourseDetailPage courseSlug="jee" />} />
        <Route path="/courses/neet" element={<CourseDetailPage courseSlug="neet" />} />
        <Route path="/courses/humanities" element={<CourseDetailPage courseSlug="humanities" />} />
        <Route path="/courses/foundation" element={<CourseDetailPage courseSlug="foundation" />} />
        <Route path="/courses/physics" element={<CourseDetailPage courseSlug="physics" />} />
        <Route path="/courses/chemistry" element={<CourseDetailPage courseSlug="chemistry" />} />
        <Route path="/teaching-methodology" element={<TeachingMethodologyPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/refund-policy" element={<RefundPolicyPage />} />
        <Route path="/faq" element={<div className="page-placeholder">FAQ page coming soon</div>} />
        <Route path="/privacy" element={<div className="page-placeholder">Privacy Policy page coming soon</div>} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;