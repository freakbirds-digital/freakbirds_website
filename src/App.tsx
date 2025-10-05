import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";
import WebDevelopment from "./pages/services/WebDevelopment";
import VisionMission from "./pages/services/VisionMission";
import MobileDevelopment from "./pages/services/MobileDevelopment";
import EcommerceDevelopment from "./pages/services/EcommerceDevelopment";
import BookkeepingSupport from "./pages/services/BookkeepingSupport";
import LLMTraining from "./pages/services/LLMTraining";
import BrandingDesign from "./pages/services/BrandingDesign";
import StockEducation from "./pages/services/StockEducation";
import ImmigrationSupport from "./pages/services/ImmigrationSupport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/vision-mission" element={<VisionMission />} />
        <Route path="/services/mobile-development" element={<MobileDevelopment />} />
        <Route path="/services/ecommerce" element={<EcommerceDevelopment />} />
        <Route path="/services/bookkeeping" element={<BookkeepingSupport />} />
        <Route path="/services/llm-training" element={<LLMTraining />} />
        <Route path="/services/branding" element={<BrandingDesign />} />
        <Route path="/services/stock-education" element={<StockEducation />} />
        <Route path="/services/immigration" element={<ImmigrationSupport />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
