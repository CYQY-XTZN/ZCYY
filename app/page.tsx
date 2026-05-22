import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import FeatureSection from "./components/Feature";
import AboutSection from "./components/About";
import BusinessSection from "./components/Business";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TissueCultureLanding from "./components/cultureLanding";
import RefinedHouseProcessing from "./components/RefinedHouseProcessing";
import CompanyInfo from "./components/CompanyInfo";
import ChainInfo from "./components/ChainInfo";
import ProductInfo from "./components/ProductInfo";
// NOTE: All imports here should now point to your components folder
// and the components themselves no longer contain lucide-react.

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-white">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <AboutSection />
      <TissueCultureLanding />
      <RefinedHouseProcessing />
      <CompanyInfo />
      <ChainInfo />
      <ProductInfo />
      <BusinessSection />
      <Contact/>
      <Footer />
    </main>
  );
}
