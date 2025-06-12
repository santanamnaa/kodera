import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import CompanyProfilePage from './pages/CompanyProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import BlogPage from './pages/BlogPage';
import FutureOf5G from './pages/blog/future-of-5g';
import FiturWebsiteUntukBisnisKecil from './pages/blog/fitur-website-bisnis-kecil';
import CloudSolutionsModernEnterprises from './pages/blog/cloud-solutions-modern-enterprises';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/future-of-5g" element={<FutureOf5G />} />
        <Route path="blog/fitur-website-bisnis-kecil" element={<FiturWebsiteUntukBisnisKecil />} />
        <Route path="blog/cloud-solutions-modern-enterprises" element={<CloudSolutionsModernEnterprises />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="company-profile" element={<CompanyProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;