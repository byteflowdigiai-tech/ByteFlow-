import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Index from "./pages/Index";
import ITSolutions from "./pages/ITSolutions";
import WebsiteBuilding from "./pages/WebsiteBuilding";
import AIAutomation from "./pages/AIAutomation";
import DigitalMarketing from "./pages/DigitalMarketing";
import SEO from "./pages/SEO";
import SocialMediaMarketing from "./pages/SocialMediaMarketing";
import PerformanceMarketing from "./pages/PerformanceMarketing";
import GrowthStrategy from "./pages/GrowthStrategy";
import BookConsultation from "./pages/BookConsultation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import OurWork from "./pages/OurWork";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/it-solutions" element={<ITSolutions />} />
                <Route path="/it-solutions/website-building" element={<WebsiteBuilding />} />
                <Route path="/it-solutions/ai-automation" element={<AIAutomation />} />
                <Route path="/digital-marketing" element={<DigitalMarketing />} />
                <Route path="/digital-marketing/seo" element={<SEO />} />
                <Route path="/digital-marketing/social-media-marketing" element={<SocialMediaMarketing />} />
                <Route path="/our-work" element={<OurWork />} />
                <Route path="/digital-marketing/performance-marketing" element={<PerformanceMarketing />} />
                <Route path="/digital-marketing/growth-strategy" element={<GrowthStrategy />} />
                <Route path="/book-consultation" element={<BookConsultation />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
