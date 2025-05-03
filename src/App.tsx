
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Category from "./pages/Category";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Custom from "./pages/Custom";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Policies from "./pages/Policies";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ThankYou from "./pages/ThankYou";
import CareInstructions from "./pages/CareInstructions";
import Warranty from "./pages/Warranty";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import GiftGuide from "./pages/GiftGuide";
import Sustainability from "./pages/Sustainability";
import JewelryEducation from "./pages/JewelryEducation";
import StoreLocator from "./pages/StoreLocator";
import Financing from "./pages/Financing";
import TradeProgram from "./pages/TradeProgram";
import Careers from "./pages/Careers";
import IndustryPartners from "./pages/IndustryPartners";
import PressRoom from "./pages/PressRoom";
import ShippingInfo from "./pages/ShippingInfo";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark">
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/category/:categoryId" element={<Category />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/custom" element={<Custom />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/testimonials" element={<Testimonials />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:id" element={<BlogPost />} />
                  <Route path="/policies/:type" element={<Policies />} />
                  <Route path="/policies/privacy" element={<PrivacyPolicy />} />
                  <Route path="/care-instructions" element={<CareInstructions />} />
                  <Route path="/warranty" element={<Warranty />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/thank-you" element={<ThankYou />} />
                  
                  {/* New routes */}
                  <Route path="/gift-guide" element={<GiftGuide />} />
                  <Route path="/sustainability" element={<Sustainability />} />
                  <Route path="/jewelry-education" element={<JewelryEducation />} />
                  <Route path="/store-locator" element={<StoreLocator />} />
                  <Route path="/financing" element={<Financing />} />
                  <Route path="/trade-program" element={<TradeProgram />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/industry-partners" element={<IndustryPartners />} />
                  <Route path="/press-room" element={<PressRoom />} />
                  <Route path="/shipping-info" element={<ShippingInfo />} />
                  
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
            </BrowserRouter>
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
