import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import ServicesPage from './pages/Services/ServicesPage'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import PortfolioPage from './pages/Portfolio/PortfolioPage.jsx'
import ProjectPage from './pages/Project/ProjectPage.jsx'
import ScrollToHash from './components/ScrollToHash/ScrollToHash.jsx'
import AboutPage from './pages/About/AboutPage.jsx'
import ContactPage from './pages/ContactPage/ContactPage.jsx'
import BriefPage from './pages/Brief/BriefPage.jsx'
import NotFoundPage from './pages/NotFound/NotFoundPage.jsx'
import PrivacyPolicyPage from './pages/PrivacyPolicy/PrivacyPolicyPage.jsx'

function App() {

  return (
    <>
    <ScrollToHash />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/brief" element={<BriefPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage /> } />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
